import React, { useRef, useState } from "react";
import ShowImage from "./ShowImage";
import axios from "axios";

const ImageCard = ({ image }) => {
  const modalRef = useRef();
  const [imageUrl, setImageUrl] = useState("");

  const handleDetails = async () => {
    try {
      const res = await axios.get(
        `https://image-gen-server.vercel.app/all-ai-images/${image._id}`
      );
      setImageUrl(res.data.url);
      modalRef.current.showModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl"
        onClick={handleDetails}
      >
        <img
          className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          alt="Ai generated image"
          src={image?.url}
          onError={(e) => {
            e.currentTarget.src =
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
          }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-full">
          <p className="text-sm font-medium line-clamp-2">
            Prompt: "{image?.prompt}"
          </p>
          <p className="text-xs text-gray-300 mt-1">by User123</p>
        </div>
      </div>
      <ShowImage modalRef={modalRef} imageUrl={imageUrl} />
    </>
  );
};

export default ImageCard;
