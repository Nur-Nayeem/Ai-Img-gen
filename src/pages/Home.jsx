import React, { Suspense, useState } from "react";
import AIImageGenerator from "../components/ImagePromptSection";
import LatestImages from "../components/LatestImages";
import Loading from "../components/Loading";

const Home = () => {
  const [latestImg, setLatestImg] = useState([]);
  return (
    <div>
      <AIImageGenerator latestImg={latestImg} setLatestImg={setLatestImg} />
      <Suspense fallback={<Loading />}>
        <LatestImages latestImg={latestImg} setLatestImg={setLatestImg} />
      </Suspense>
    </div>
  );
};

export default Home;
