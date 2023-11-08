import { Point } from "../interfaces";
import Particle from "./Particle";

class SquareParticle extends Particle {
  protected drawParticle(ctx: CanvasRenderingContext2D, scale: number): void {
    const { x, y } = this.center;
    const verticies = [
      {
        x: x - (SquareParticle.BASE_LENGTH / 2) * scale,
        y: y - (SquareParticle.BASE_LENGTH / 2) * scale
      },
      {
        x: x + (SquareParticle.BASE_LENGTH / 2) * scale,
        y: y - (SquareParticle.BASE_LENGTH / 2) * scale
      },
      {
        x: x + (SquareParticle.BASE_LENGTH / 2) * scale,
        y: y + (SquareParticle.BASE_LENGTH / 2) * scale
      },
      {
        x: x - (SquareParticle.BASE_LENGTH / 2) * scale,
        y: y + (SquareParticle.BASE_LENGTH / 2) * scale
      }
    ];
    // draw the square
    ctx.beginPath();
    ctx.moveTo(verticies[0].x, verticies[0].y);
    ctx.lineTo(verticies[1].x, verticies[1].y);
    ctx.lineTo(verticies[2].x, verticies[2].y);
    ctx.lineTo(verticies[3].x, verticies[3].y);
    ctx.lineTo(verticies[0].x, verticies[0].y);
    ctx.stroke();
    ctx.closePath();
  }

  protected get center(): Point {
    const x = this.x + SquareParticle.BASE_LENGTH / 2;
    const y = this.y + SquareParticle.BASE_LENGTH / 2;
    return { x, y };
  }

  protected get verticies(): Point[] {
    const { x, y } = this;

    return [
      { x, y },
      { x: x + SquareParticle.BASE_LENGTH, y },
      { x: x + SquareParticle.BASE_LENGTH, y: y + SquareParticle.BASE_LENGTH },
      { x, y: y + SquareParticle.BASE_LENGTH }
    ];
  }
}

export default SquareParticle;
