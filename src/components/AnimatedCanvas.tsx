import React, { useLayoutEffect } from "react";
import { useAnimationFrame, useAppSelector } from "../hooks";
import round from "lodash/round";
import ParticleAnimation from "../animation";
import { selectFancyModeEnabled } from "@/store/selectors";

const AnimatedCavnas: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const animationRef = React.useRef<ParticleAnimation | null>(null);
  const fancyModeEnabled = useAppSelector(selectFancyModeEnabled);
  useLayoutEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) {
      return;
    }
    const dpi = window.devicePixelRatio || 1;
    const canvasElem = canvasRef.current;

    const resizeCanvas = () => {
      canvasElem.width = canvasElem.clientWidth * dpi;
      canvasElem.height = canvasElem.clientHeight * dpi;
      const ctx = canvasElem.getContext("2d");
      if (!ctx) {
        return;
      }
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
  });

  useAnimationFrame((time) => {
    if (!canvasRef.current) {
      return;
    }

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (!animationRef.current) {
      const refreshRate = round(1000 / time, -1);
      console.log("refreshRate", refreshRate);
      const animation = new ParticleAnimation(25, { refreshRate });
      animationRef.current = animation;
    } else {
      animationRef.current.step();
    }
    animationRef.current?.draw(ctx);
  }, 10);
  return (
    fancyModeEnabled && (
      <canvas
        className="-z-10 h-screen w-screen fixed"
        ref={canvasRef}
      ></canvas>
    )
  );
};

export default AnimatedCavnas;
