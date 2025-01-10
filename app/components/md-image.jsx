import React from "react";

const MDXImage = ({ src }) => {
  return (
    <div className="w-full aspect-[4/1] rounded-lg overflow-hidden">
      <img src={src} className="w-full h-auto object-cover" />
    </div>
  );
};

export default MDXImage;
