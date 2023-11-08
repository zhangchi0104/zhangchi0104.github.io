import { ParticleConstructorParam } from "./interfaces";
import {
  CircleParticle,
  CrossParticle,
  Particle,
  SquareParticle,
  TriangleParticle
} from "./particles";
import { random } from "lodash";
interface CanvasMetadata {
  height: number;
  width: number;
}
type ShapeChoice = "square" | "circle" | "triangle" | "cross";
class ParticleAnimation {
  private particles: Particle[];
  private curve: (t: number) => number;
  private static readonly SPAWN_PADDING = 10;
  private static readonly D_DEG = 1;
  private static readonly CHOICES: ShapeChoice[] = [
    "square",
    "circle",
    "triangle",
    "cross"
  ];

  constructor(n: number, meta?: Partial<CanvasMetadata>) {
    const particles = [];

    for (let i = 0; i < n; i++) {
      particles.push(this.randomParticle(meta));
    }
    this.particles = particles;
  }
  private randomParticle(meta?: Partial<CanvasMetadata>) {
    let canvasHeight =
      meta?.height || window.innerHeight * window.devicePixelRatio;
    let canvasWidth =
      meta?.width || window.innerWidth * window.devicePixelRatio;
    // console.log(canvasHeight, canvasWidth);
    const maxWidth = canvasWidth - ParticleAnimation.SPAWN_PADDING;
    const maxHeight = canvasHeight - ParticleAnimation.SPAWN_PADDING;
    const maxDeg = 360;

    const initX = random(ParticleAnimation.SPAWN_PADDING, maxWidth);
    const initY = random(ParticleAnimation.SPAWN_PADDING, maxHeight);
    // console.log({ initX, initY });
    const initDeg = random(0, maxDeg);

    const velocityDirection = random(0, maxDeg);
    const radian = (velocityDirection * Math.PI) / 180;
    const dx = Math.pow(Math.cos(radian), 2) * [-1, 1][random(0, 1)];
    const dy = Math.pow(Math.sin(radian), 2) * [-1, 1][random(0, 1)];
    const choice =
      ParticleAnimation.CHOICES[
        random(0, ParticleAnimation.CHOICES.length - 1)
      ];
    const params: ParticleConstructorParam = {
      x: initX,
      y: initY,
      deg: initDeg,
      ddeg: ParticleAnimation.D_DEG,
      dx,
      dy
    };
    let particle: Particle;
    switch (choice) {
      case "square": {
        particle = new SquareParticle(params);
        break;
      }
      case "circle": {
        particle = new CircleParticle(params);
        break;
      }
      case "triangle": {
        particle = new TriangleParticle(params);
        break;
      }
      case "cross": {
        particle = new CrossParticle(params);
        break;
      }
    }
    particle.once("leave", () => {
      this.particles.filter((p) => p !== particle);
      this.particles.push(this.randomParticle());
    });
    return particle;
  }
  draw(ctx: CanvasRenderingContext2D, refreshRate: number) {
    this.particles.forEach((particle) => particle.draw(ctx, refreshRate));
  }
  step() {
    this.particles.forEach((particle) => particle.nextFrame());
  }
}

export default ParticleAnimation;