import React from "react";

type Props = {};

const BuiltWithAi = (props: Props) => {
  return (
    <section className="mx-auto max-w-7xl min-h-screen flex items-center flex-col">
      <h2 className="font-bold text-3xl">Built with AI</h2>
      <h3>AI Tools to accelerate your workflow</h3>
      <div className="p-8"></div>
      <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5"></div>
      <div className="p-4"></div>
      <div className="w-full flex space-x-8">
        <div className="h-96 w-72 border rounded-xl">
          <h3 className="font-block font-semibold text-center text-xl mt-4">
            AI Photo Background Replacement
          </h3>
        </div>
        <div className="h-96 w-72 border rounded-xl">
          <h3 className="font-block font-semibold text-center text-xl mt-4">
            GPT Assisted Description Writer
          </h3>
        </div>
        <div className="h-96 w-72 border rounded-xl">
          <h3 className="font-block font-semibold text-center text-xl mt-4">
            AI Augmented Photo Editor
          </h3>
        </div>
      </div>
    </section>
  );
};

export default BuiltWithAi;
