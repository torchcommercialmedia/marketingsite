import React from "react";

type Props = {};

const Pricing = (props: Props) => {
  return (
    <div className="w-full min-h-screen max-w-7xl justify-center">
      <h1 className="text-2xl font-bold mx-auto">Pricing</h1>
      <hr />
      <div className="">
        <div className="p-1 border-t"></div>
        <h2>How much horsepower do you need?</h2>
        <p>Click to toogle off advanced features</p>
      </div>
    </div>
  );
};

export default Pricing;
