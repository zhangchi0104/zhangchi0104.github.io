type EventHandlerCallback<P extends any = void, V extends any = void> = (
  val: P
) => V;

export class EventManager<E extends string = string> {
  private handlersByEvent: { [key: string]: (() => void)[] } = {};
  on(event: E, handler: EventHandlerCallback) {
    if (!this.handlersByEvent[event]) {
      this.handlersByEvent[event] = [];
    }
    this.handlersByEvent[event].push(handler);
  }

  once(event: E, handler: EventHandlerCallback) {
    if (!this.handlersByEvent[event]) {
      this.handlersByEvent[event] = [];
    }
    const onceHandler = () => {
      handler();
      this.handlersByEvent[event] = this.handlersByEvent[event].filter(
        (h) => h !== onceHandler
      );
    };
    this.handlersByEvent[event].push(onceHandler);
  }

  off(event: E, handler?: EventHandlerCallback) {
    if (!handler) {
      delete this.handlersByEvent[event];
      return;
    }

    if (!this.handlersByEvent[event]) {
      return;
    }

    this.handlersByEvent[event] = this.handlersByEvent[event].filter(
      (h) => h !== handler
    );
  }
  emit(event: E) {
    if (!this.handlersByEvent[event]) {
      return;
    }
    this.handlersByEvent[event].forEach((handler) => handler());
  }
}

export const cubicBezier =
  (p0: number, p1: number, p2: number, p3: number) => (t: number) => {
    const oneMinusT = 1 - t;
    return (
      oneMinusT * oneMinusT * oneMinusT * p0 +
      3 * oneMinusT * oneMinusT * t * p1 +
      3 * oneMinusT * t * t * p2 +
      t * t * t * p3
    );
  };

export const getRefreshRate = () =>
  new Promise((resolve) =>
    requestAnimationFrame((t1) =>
      requestAnimationFrame((t2) => resolve(1000 / (t2 - t1)))
    )
  );

export type Path<T> = T extends object
  ? {
      [K in keyof T]: K extends string | number
        ? `${K}` | `${K}.${Path<T[K]>}`
        : never;
    }[keyof T]
  : never;

export type FieldType<
  T,
  P extends Path<T>
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Rest extends Path<T[K]>
      ? FieldType<T[K], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never;

export type MutuallyExclude<T, E extends keyof T> =
  | {
      [K in E]: { [P in K]: T[P] } & Omit<T, E> & {
          [P in Exclude<E, K>]?: never;
        } extends infer O
        ? { [P in keyof O]: O[P] }
        : never;
    }[E]
  | ({ [K in E]?: never } & Omit<T, E>);
