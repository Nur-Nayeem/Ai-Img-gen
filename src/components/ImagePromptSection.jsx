import React, { useState } from "react";
import { FaImage, FaMagic } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";

const AIImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  const handleGenerate = async () => {
    if (!prompt) return alert("Please enter a prompt");
  };

  const handlePublish = () => {
    if (!prompt && !selectedImage) {
      alert("No image to publish");
      return;
    }
    alert("Image published");
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 bg-[#ecf0f1] p-8 rounded-2xl shadow-sm border border-base-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* left side  */}
        <div className="flex flex-col">
          <label className="font-semibold text-sm mb-2">Prompt</label>
          <textarea
            className="textarea textarea-bordered w-full h-32 text-base focus:outline-0 border-primary bg-gray-100"
            placeholder="Write your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleGenerate}
              className="btn flex items-center gap-2 btn-primary text-white "
            >
              <FaMagic />
              Generate
            </button>

            <button
              onClick={handlePublish}
              className="btn flex items-center gap-2 bg-base-300 hover:bg-base-200 text-black"
            >
              <ImEarth /> Publish
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="border-2 border-dashed border-base-300 rounded-xl flex flex-col items-center justify-center text-center p-6 transition cursor-pointer relative">
          {selectedImage ? (
            <>
              <RxCross2
                onClick={() => setSelectedImage(null)}
                className="absolute z-50 right-5 top-5 text-2xl text-error"
              />

              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-64 object-cover rounded-xl"
              />
            </>
          ) : (
            <>
              <FaImage className="text-4xl text-gray-400 mb-3" />
              <p className="font-medium text-gray-600">Add an image</p>
              <p className="text-sm text-gray-400 mb-4">
                Drag and drop or click to upload a source image.
              </p>
              <label className="btn bg-base-300 hover:bg-base-200 border-none text-sm">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIImageGenerator;
