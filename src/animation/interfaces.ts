export interface Transformable {
  move(refreshRate: number): void;
  rotate(refreshRate: number): void;
}

export interface Point {
  x: number;
  y: number;
}

export type ParticleEvent = "leave";
