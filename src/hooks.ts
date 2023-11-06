import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useExtendStyle =
  (classNames: string) =>
  (base: TemplateStringsArray, ...strExprs: string[]) => {
    const res = `${classNames} ${base.join(" ")} ${strExprs.join(" ")}`;
    return res.trim();
  };
