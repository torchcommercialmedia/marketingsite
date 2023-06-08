import React from "react";

type Props = {};

const BuiltWithAi = (props: Props) => {
  return (
    <section className="mx-auto max-w-7xl min-h-screen flex items-center flex-col mt-24 sm:mt-0">
      <h2 className="font-bold text-3xl">Built with AI</h2>
      <h3>AI Tools to accelerate your workflow</h3>
      <div className="sm:p-8"></div>
      <div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="w-72 rounded-xl">
          <h3 className="font-block h-16 font-semibold text-center text-lg mt-4">
            AI Photo Background Replacement
          </h3>
          <div className="h-full w-full border pt-24 pb-24 mx-auto">
            <p className="text-center">Image or Content Here</p>
          </div>
        </div>
        <div className="w-72 rounded-xl">
          <h3 className="font-block h-16 font-semibold text-center text-lg mt-4">
            GPT Assisted Description Writer
          </h3>
          <div className="h-full w-full border pt-24 pb-24 mx-auto">
            <p className="text-center">Image or Content Here</p>
          </div>
        </div>
        <div className="w-72 rounded-xl">
          <h3 className="font-block h-16 font-semibold text-center text-lg mt-4">
            AI Augmented Photo Editor
          </h3>
          <div className="h-full w-full border pt-24 pb-24 mx-auto">
            <p className="text-center">Image or Content Here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltWithAi;
