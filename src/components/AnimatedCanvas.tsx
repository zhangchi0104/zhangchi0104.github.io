import React, { useLayoutEffect } from "react";
import { useAnimationFrame } from "../hooks";
import { round } from "lodash";
import ParticleAnimation from "../animation";

const AnimatedCavnas: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const animationRef = React.useRef<ParticleAnimation | null>(null);

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
    // console.log("animation fram e " + time);
    if (!canvasRef.current) {
      return;
    }
    const fps = round(1000 / time, -1);
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (!animationRef.current) {
      const animation = new ParticleAnimation(25);
      animationRef.current = animation;
    } else {
      animationRef.current.step();
    }
    // setFps(fps);
    animationRef.current?.draw(ctx, fps);
  });
  return (
    <canvas
      className="absolute -z-10 h-screen w-screen"
      ref={canvasRef}
    ></canvas>
  );
};

export default AnimatedCavnas;
