"use client";
import { Dithering } from "@paper-design/shaders-react";

const Sphere = ({
  width = 220,
  height = 220,
  size = 1.75,
  speed = 0.1,
  scale = 0.8,
  onWhite = false,
  shape = "sphere",
  type = "5x5",
  rotation,
  offsetX,
  offsetY,
}) => {
  const backgroundColor = onWhite ? "#fff" : "#fff";
  const textColor = onWhite ? "#00b3ff" : "white";

  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width, height }}>
        <Dithering
          width={width}
          height={height}
          colorBack={backgroundColor}
          colorFront="#00b3ff"
          shape={shape}
          type={type}
          size={size}
          speed={speed}
          scale={scale}
          rotation={rotation}
          offsetX={offsetX}
          offsetY={offsetY}
        />

        <div className="hidden sm:flex absolute inset-0 items-center justify-center pointer-events-none">
          <div
            className="aspect-square rounded-full absolute bg-[#00b3ff]/40"
            style={{
              height: height - 42,
            }}
          ></div>
          <h2
            className="text-[75px] z-100 font-black leading-none tracking-tighter select-none"
            style={{
              color: textColor,
              letterSpacing: "-0.05em",
            }}
          >
            &lt;T&gt;
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sphere;
