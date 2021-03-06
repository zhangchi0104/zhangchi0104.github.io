import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { selectAppearance } from "./store/selectors";

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
    matchMedia.current.addEventListener("change", handleChange);
    return () => matchMedia.current.removeEventListener("change", handleChange);
  }, []);
  return match;
};

export const useAnimationFrame = (
  callback: (time: number) => void,
  ticksToWait = 0
) => {
  // stores the necessary values with useRef
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const ticksToWaitRef = useRef<number>(ticksToWait);

  const animate = (elapsed: number) => {
    if (ticksToWaitRef.current > 0) {
      ticksToWaitRef.current--;
      requestRef.current = requestAnimationFrame(animate);
      return;
    }
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

export const useDarkMode = () => {
  const systemDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const selectedAppearance = useAppSelector(selectAppearance);
  if (selectedAppearance === "system") {
    return systemDarkMode;
  }
  return selectedAppearance === "dark";
};

const UpdateContext = createContext<((deltaHeight: number) => void) | null>(
  null
);

export const useTriggerUpdate = () => {
  return useContext(UpdateContext);
};
export const UpdateContextProvider = UpdateContext.Provider;

const CollapsedContext = createContext(true);
export const useParentCollapsedState = () => useContext(CollapsedContext);
export const CollapsedStateProvider = CollapsedContext.Provider;
