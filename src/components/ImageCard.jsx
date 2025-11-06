import React from "react";

const ImageCard = () => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl">
      <img
        className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        alt="Ai generated image"
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-full">
        <p className="text-sm font-medium line-clamp-2">
          Prompt: "A beautiful mountain"
        </p>
        <p className="text-xs text-gray-300 mt-1">by User123</p>
      </div>
    </div>
  );
};

export default ImageCard;
