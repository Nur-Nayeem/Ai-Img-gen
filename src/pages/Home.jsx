import React from "react";
import AIImageGenerator from "../components/ImagePromptSection";
import LatestImages from "../components/LatestImages";

const Home = () => {
  return (
    <div>
      <AIImageGenerator />
      <LatestImages />
    </div>
  );
};

export default Home;
