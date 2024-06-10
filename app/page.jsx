import React from "react";
import SwitchModes from "./components/SwitchModes";
const page = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-32 h-32 bg-primary">Primary</div>
      <div className="w-32 h-32 bg-foreground">Foreground</div>
    </div>
  );
};

export default page;
