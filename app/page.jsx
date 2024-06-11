import React from "react";

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="h-screen bg-blue-700"></div>
      <div className="w-32 h-32 bg-primary">Primary</div>
      <div className="w-32 h-32 bg-foreground">Foreground</div>
    </div>
  );
};

export default page;
