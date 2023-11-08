import { Point } from "../interfaces";
import Particle from "./Particle";

class TriangleParticle extends Particle {
  public static get side() {
    return (this.BASE_LENGTH / Math.sqrt(3)) * 2;
  }

  protected drawParticle(ctx: CanvasRenderingContext2D, scale: number): void {
    const { x, y } = this.center;
    const topPoint = {
      x,
      y: y - (TriangleParticle.BASE_LENGTH * scale * 2) / 3
    };
    const verticies = [
      topPoint,
      {
        x: topPoint.x - (TriangleParticle.side * scale) / 2,
        y: topPoint.y + TriangleParticle.BASE_LENGTH * scale
      },
      {
        x: topPoint.x + (TriangleParticle.side * scale) / 2,
        y: topPoint.y + TriangleParticle.BASE_LENGTH * scale
      }
    ];
    // draw the triangle
    ctx.beginPath();
    ctx.moveTo(verticies[0].x, verticies[0].y);
    ctx.lineTo(verticies[1].x, verticies[1].y);
    ctx.lineTo(verticies[2].x, verticies[2].y);
    ctx.lineTo(verticies[0].x, verticies[0].y);
    ctx.stroke();
    ctx.closePath();
  }

  protected get center(): Point {
    const x = this.x;
    const y = this.y + (TriangleParticle.BASE_LENGTH * 2) / 3;
    return { x, y };
  }

  protected get verticies(): Point[] {
    const { x, y } = this;

    const side = TriangleParticle.side;

    return [
      { x, y },
      { x: x + side / 2, y: y + TriangleParticle.BASE_LENGTH },
      { x: x - side / 2, y: y + TriangleParticle.BASE_LENGTH }
    ];
  }
}

export default TriangleParticle;
