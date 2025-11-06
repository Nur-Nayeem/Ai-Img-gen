import React from "react";
import { TailSpin } from "react-loader-spinner";

const GeneratedImage = ({ image, loading }) => {
  return (
    <div className="max-w-7xl mx-auto  flex justify-center items-center my-5 bg-[#ecf0f1] rounded-2xl py-2.5">
      {loading ? (
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#9f62f2"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <figure className="max-w-3xl w-full h-[500px] p-5 bg-white">
          <img className="w-full h-full" src={image} alt={"image"} />
        </figure>
      )}
    </div>
  );
};

export default GeneratedImage;
