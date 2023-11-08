export { ParticleConstructorParam } from "./particles/Particle";
export interface Transformable {
  move(): void;
  rotate(): void;
}

export interface Point {
  x: number;
  y: number;
}

export type ParticleEvent = "leave";
