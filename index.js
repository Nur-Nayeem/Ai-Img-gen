import express from "express";
import cors from "cors";
import { GoogleGenAI, Modality } from "@google/genai";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { connectDB, Image } from "./db.js";

dotenv.config();

const app = express();

// increase payload limit
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

// connect MongoDB
connectDB();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// --- Routes ---
app.get("/", (req, res) => {
  res.send("Hello from AI Image Generator server!");
});

// generate image
app.post("/generate-image", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "No prompt provided" });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: prompt,
      config: { responseModalities: [Modality.TEXT, Modality.IMAGE] },
    });

    const parts = response.candidates[0].content.parts;
    const imagePart = parts.find((p) => p.inlineData);

    if (imagePart) {
      return res.json({ imageBase64: imagePart.inlineData.data });
    }
    res.status(500).json({ error: "Image generation failed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// publish to cloudinary + MongoDB
app.post("/publish-image", async (req, res) => {
  const { base64Image, prompt } = req.body;
  if (!base64Image || !prompt)
    return res.status(400).json({ error: "Image and prompt required" });

  try {
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64Image}`,
      { folder: "gemini-images" }
    );

    const newImage = new Image({ url: result.secure_url, prompt });
    await newImage.save();

    res.json({ url: result.secure_url, prompt });
  } catch (error) {
    console.error("Upload failed:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

// latest images (for homepage)
app.get("/latest-images", async (req, res) => {
  try {
    const images = await Image.find()
      .sort({ createdAt: -1 })
      .select("url prompt")
      .limit(6);
    res.json({ images });
  } catch (err) {
    console.error("Error listing images:", err);
    res.status(500).json({ error: "Failed to load images" });
  }
});

// paginated list (for AllAiImages page)
app.get("/all-ai-images", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const skip = (page - 1) * limit;

    const images = await Image.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("url prompt");

    const total = await Image.countDocuments();
    res.json({ images, total });
  } catch (err) {
    console.error("Error listing images:", err);
    res.status(500).json({ error: "Failed to load images" });
  }
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
