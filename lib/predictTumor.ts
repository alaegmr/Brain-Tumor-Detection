import * as ort from "onnxruntime-node";
import path from "path";

export async function predictTumor(flatImage: Float32Array) {

  const session = await ort.InferenceSession.create(
    path.join(process.cwd(), "public/models/rf_tumor_model.onnx")
  );

  const input = new ort.Tensor("float32", flatImage, [1, 150528]);

  const prediction = await session.run({ input });

  // selon ton modèle : change la clé 'output_label'
  const result = prediction.label.data[0];

  return result;
}
