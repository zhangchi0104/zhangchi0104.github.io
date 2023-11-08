import Particle from "./Particle";
import { Point } from "../interfaces";

class Circle extends Particle {
  protected drawParticle(ctx: CanvasRenderingContext2D, scale: number): void {
    const { x, y } = this.center;
    ctx.beginPath();
    ctx.arc(x, y, (Circle.BASE_LENGTH / 2) * scale, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
  }

  protected get center(): Point {
    return {
      x: this.x + Circle.BASE_LENGTH / 2,
      y: this.y + Circle.BASE_LENGTH / 2
    };
  }

  protected get verticies(): Point[] {
    const { x, y } = this.center;
    const safeRadius = Circle.BASE_LENGTH / 2 + Circle.STROKE_WIDTH;
    return [
      { x: x - safeRadius, y: y - safeRadius },
      { x: x + safeRadius, y: y + safeRadius },
      { x: x + safeRadius, y: y - safeRadius },
      { x: x - safeRadius, y: y + safeRadius }
    ];
  }
}

export default Circle;
