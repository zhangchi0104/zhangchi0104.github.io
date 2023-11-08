import { EventManager, cubicBezier } from "../../utils";
import { ParticleEvent, Point, Transformable } from "../interfaces";
import { round } from "lodash";
export interface ParticleConstructorParam {
  // initial position
  x?: number;
  y?: number;
  // volocity
  dx: number;
  dy: number;
  // rotation:
  deg: number;
  ddeg: number;
}

abstract class Particle
  extends EventManager<ParticleEvent>
  implements Transformable
{
  protected x: number;
  protected dx: number;
  protected dy: number;
  protected deg: number;
  protected ddeg: number;
  protected y: number;
  protected dpi: number;
  private static CURVE = cubicBezier(0, 0, 1.5, 1);
  private age = 0;
  private static readonly EXPECTED_FRAMES = 60;
  public static readonly DPI = window.devicePixelRatio || 1;
  public static readonly STROKE_WIDTH = 4;
  public static readonly BASE_LENGTH = 30 * Particle.DPI;
  constructor(opts?: Partial<ParticleConstructorParam>) {
    super();
    this.x = opts?.x || 0;
    this.y = opts?.y || 0;
    this.dx = opts?.dx || 0;
    this.dy = opts?.dy || 0;
    this.deg = opts?.deg || 0;
    this.ddeg = opts?.ddeg || 0;
    // this.ctx = ctx;
    this.dpi = window.devicePixelRatio || 1;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  rotate() {
    this.deg += this.ddeg;
  }

  draw(ctx: CanvasRenderingContext2D, refreshRate: number) {
    // console.log("draw");
    const { deg } = this;
    const { x: centerX, y: centerY } = this.center;
    if (!this.visible(ctx)) {
      this.emit("leave");
    }
    const expectedFrames = refreshRate >= 60 ? 60 : 30;
    const progress = this.age / expectedFrames;
    const scale = this.age < expectedFrames ? Particle.CURVE(progress) : 1;

    ctx.save();
    // ctx.scale(scale, scale);

    ctx.strokeStyle = "#AAA";
    ctx.lineWidth = Particle.STROKE_WIDTH;
    ctx.translate(centerX, centerY);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.translate(-centerX, -centerY);

    this.drawParticle(ctx, scale);
    ctx.restore();
    this.age = Math.min(expectedFrames, this.age + 1);
  }

  protected abstract drawParticle(
    ctx: CanvasRenderingContext2D,
    scale: number
  ): void;
  protected abstract get center(): Point;
  protected abstract get verticies(): Point[];
  protected visible(ctx: CanvasRenderingContext2D): boolean {
    for (const { x, y } of this.verticies) {
      if (x < 0 || y < 0 || x > ctx.canvas.width || y > ctx.canvas.height) {
        return false;
      }
    }
    return true;
  }
  public nextFrame() {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.move();
    this.rotate();
  }
}

export default Particle;
