"use client";
import React from "react";
import SlideButton from "../components/slide-button";

const page = () => {
  return (
    <div>
      <SlideButton
        onClick={() => console.log("clicked")}
        text="Hover State"
        variant="default"
        className="w-32 h-10"
      >
        Click Me
      </SlideButton>
    </div>
  );
};

export default page;
