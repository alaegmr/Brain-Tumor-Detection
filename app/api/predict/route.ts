import * as ort from "onnxruntime-node";
import path from "path";

export async function POST(req: Request) {
  try {
    const { imageBase64 } = await req.json();

    if (!imageBase64) {
      return new Response(JSON.stringify({ error: "No image provided" }), { status: 400 });
    }

    // 🔹 Convertir l’image Base64 en buffer
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
    const imgBuffer = Buffer.from(base64Data, "base64");

    // 🔹 Charger sharp pour resize et raw RGB
    const sharp = (await import("sharp")).default;
    const width = 224;
    const height = 224;

    // Resize et obtenir raw RGB (sans alpha)
    const imgResized = await sharp(imgBuffer)
      .resize(width, height)
      .removeAlpha()
      .raw()
      .toBuffer();

    // 🔹 Convertir en Float32Array normalisé
    const floatArray = new Float32Array(imgResized.length);
    for (let i = 0; i < imgResized.length; i++) {
      floatArray[i] = imgResized[i] / 255;
    }

    // 🔹 Charger le modèle ONNX
    const modelPath = path.join(process.cwd(), "public", "models", "rf_tumor_model.onnx");
    const session = await ort.InferenceSession.create(modelPath);

    // 🔹 Vérifier le nom de l’input
    const inputName = session.inputNames?.[0] ?? "input";
    console.log("ONNX input name:", inputName);

    // 🔹 Créer le tensor 2D [1, features]
    const inputTensor = new ort.Tensor("float32", floatArray, [1, floatArray.length]);

    // 🔹 Préparer les feeds
    const feeds: Record<string, ort.Tensor> = {};
    feeds[inputName] = inputTensor;

    // 🔹 Faire la prédiction
    const outputs = await session.run(feeds);
    const outName = Object.keys(outputs)[0];
    const resultArray = Array.from((outputs as any)[outName].data);

    return new Response(
      JSON.stringify({
        success: true,
        prediction: resultArray[0],
        rawOutput: resultArray,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Prediction error:", err);
    return new Response(JSON.stringify({ error: err.message ?? String(err) }), { status: 500 });
  }
}
