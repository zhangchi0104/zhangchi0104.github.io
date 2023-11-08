import { Point } from "../interfaces";
import Particle from "./Particle";

class CrossParticle extends Particle {
  protected get center(): Point {
    const x = this.x + CrossParticle.BASE_LENGTH / 2;
    const y = this.y + CrossParticle.BASE_LENGTH / 2;
    return { x, y };
  }

  protected drawParticle(ctx: CanvasRenderingContext2D, scale: number): void {
    const { x, y } = this.center;
    const halfSide = (CrossParticle.BASE_LENGTH / 2) * scale;
    const verticies = [
      {
        x: x - halfSide,
        y: y - halfSide
      },
      {
        x: x + halfSide,
        y: y + halfSide
      },
      {
        x: x + halfSide,
        y: y - halfSide
      },
      {
        x: x - halfSide,
        y: y + halfSide
      }
    ];
    // draw the square
    ctx.beginPath();
    ctx.moveTo(verticies[0].x, verticies[0].y);
    ctx.lineTo(verticies[1].x, verticies[1].y);
    ctx.moveTo(verticies[2].x, verticies[2].y);
    ctx.lineTo(verticies[3].x, verticies[3].y);
    ctx.stroke();
    ctx.closePath();
  }

  protected get verticies(): Point[] {
    const { x, y } = this;

    return [
      { x, y },
      {
        x: x + CrossParticle.BASE_LENGTH,
        y: y + CrossParticle.BASE_LENGTH
      },
      { x: x + CrossParticle.BASE_LENGTH, y },
      { x, y: y + CrossParticle.BASE_LENGTH }
    ];
  }
}

export default CrossParticle;
