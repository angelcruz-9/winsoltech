import React from "react";

const currentData = {
  currentTitle: <>Quality RCM Coding</>,
};


function Quality() {
  return (
    <section className="py-16">
      <div className="container-common">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl">{currentData.currentTitle}</h1>
          <div className="border-b-4 border-secondary w-24"></div>
        </div>
        <div className="flex justify-center items-center mt-8">
        <video
            controls
            width="1000"
            poster={`${process.env.PUBLIC_URL}/assets/videos/quality-poster.jpg`}
          >
            <source
              src={`${process.env.PUBLIC_URL}/assets/videos/quality-video.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default Quality;
