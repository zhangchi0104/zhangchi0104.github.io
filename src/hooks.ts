import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useExtendStyle =
  (classNames: string) =>
  (base: TemplateStringsArray, ...strExprs: (string | undefined)[]) => {
    const res = `${classNames} ${base.join(" ")} ${strExprs
      .filter((s) => !!s)
      .join(" ")}`;
    return res.trim();
  };

export const useAnimationFrame = (callback: (time: number) => void) => {
  // stores the necessary values with useRef
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = (elapsed: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = elapsed - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = elapsed;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
};
