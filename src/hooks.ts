import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";

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

export const useMediaQuery = (query: string) => {
  const [match, setMatch] = useState(window.matchMedia(query).matches);
  const matchMedia = useRef(window.matchMedia(query));
  const handleChange = () => {
    setMatch(matchMedia.current.matches);
  };
  useEffect(() => {
    console.log("on change useEffect");
    matchMedia.current.addEventListener("change", handleChange);
    return () => matchMedia.current.removeEventListener("change", handleChange);
  }, []);
  return match;
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
