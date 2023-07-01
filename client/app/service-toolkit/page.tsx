import ServiceToolkit from "@/components/ServiceToolkit/ServiceToolkit";
import React, { useState } from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex w-full flex-col">
      <ServiceToolkit />
    </div>
  );
};

export default page;
