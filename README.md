# 🤖 AI Image Generator

## 📌 Project Overview
AI Image Generator is a full-stack web application that allows users to generate images using AI by providing a text prompt or combining text with an existing image. Users can generate, publish, and download images. All published images are visible to other users, creating a shared gallery of AI-generated art.  
The project uses **React** for the frontend and **Node.js + Express** for the backend, with **Google GenAI** for AI image generation and **Cloudinary** + **MongoDB** for storing published images.

---

## Project Image

<img src="https://i.ibb.co.com/TBNpyzn8/aiiii.png" width="100%" height="400" />

---

## 🚀 Main Features

### 🎨 AI Image Generation
- Generate images from **text prompts**.
- Generate images using **text + uploaded image**.
- Real-time preview of generated images.

### ☁️ Publish & Download
- Publish AI-generated images to **Cloudinary**.
- Store image metadata and prompts in **MongoDB**.
- Download generated images locally for personal use.

### 🖼️ Gallery & Browsing
- View **latest AI-generated images** on the homepage.
- Paginated list of all published images for easy browsing.
- Display associated prompts with each image.

### ⚡ User-Friendly Interface
- Clean and responsive **React** frontend.
- Minimal latency for smooth interactions.
- Open access, no authentication required.

---
## 📦 NPM Packages Used

Client:
- tailwindcss
- daisyui
- react-router
- react-icons
- axios
- SweetAlert2
  
Server:
- cors
- express
- dotnet
- mongoose
- @google/genai
- cloudinary
- socket.io
- url

---

## How to Run Locally

1. Clone these repository:

   ```bash
   git clone https://github.com/Nur-Nayeem/Ai-Img-gen.git
   ```

2. Install dependencies:

   ```bash
   cd Ai-Img-gen/client && npm install
   cd Ai-Img-gen/server && npm install
   ```

3. Add .env in server folder with Firebase Admin credentials and MongoDB URI.

server (.env):

```bash
  GOOGLE_API_KEY=your-Google-api-key
  CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
  CLOUDINARY_API_KEY=your-cloudinary-api-key
  CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```
4. Start server:
   ```bash
   node index.js
   ```
5. Start client:

   ```bash
   npm run dev
   ```

---

### **🌍 Live Website:** [PawMart Website](https://image-gen-422.web.app/)

### **💻 Client GitHub Repo:** [Project Repo](https://github.com/Nur-Nayeem/Ai-Img-gen?tab=readme-ov-file)

