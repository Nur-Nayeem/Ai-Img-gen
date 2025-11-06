import React from "react";
import AIImageGenerator from "../components/ImagePromptSection";
import LatestImages from "../components/LatestImages";
import GeneratedImage from "../components/GeneratedImage";

const Home = () => {
  return (
    <div>
      <AIImageGenerator />
      <GeneratedImage
        image={
          "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        }
        loading={false}
      />
      <LatestImages />
    </div>
  );
};

export default Home;
