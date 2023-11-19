import {
  CollapsedStateProvider,
  useAppDispatch,
  useAppSelector,
  useTriggerUpdate
} from "@/hooks";
import { selectFancyModeEnabled } from "@/store/selectors";
import React, {
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { useTranslation } from "react-i18next";
type CollapsablePropsCommon = React.PropsWithChildren<{
  className?: string;
  collapsed: boolean;
  observable?: boolean;
}>;

export interface CollapsableHandle {
  resize(deltaHeight: number): void;
}
const Collapsable = React.forwardRef<CollapsableHandle, CollapsablePropsCommon>(
  ({ className, children, collapsed, observable = false }, ref) => {
    const selfRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | null>(null);
    const heightStyle = useMemo(() => height + "px", [height]);
    const notify = useTriggerUpdate();
    const { i18n } = useTranslation();
    const locale = i18n.language;
    useLayoutEffect(() => {
      setHeight(collapsed ? 0 : selfRef.current!.scrollHeight);
    }, [collapsed, locale]);

    useEffect(() => {
      if (observable && notify) {
        notify(
          collapsed
            ? 0 - (selfRef.current!.scrollHeight ?? 0)
            : selfRef.current!.scrollHeight ?? 0
        );
      }
    }, [height]);

    useImperativeHandle(
      ref,
      () => {
        return {
          resize(deltaHeight: number) {
            setHeight(height === null ? null : height + deltaHeight);
          }
        };
      },
      [height, collapsed]
    );

    useLayoutEffect(() => {}, [collapsed]);
    const animation = `transition-[max-height] origin-top ease-in-out duration-500`;
    const css = `overflow-hidden ${className ?? ""}`;
    const fancyModeEnabled = useAppSelector(selectFancyModeEnabled);
    return (
      <div
        ref={selfRef}
        className={`${css} ${fancyModeEnabled ? animation : ""}`}
        style={{ maxHeight: heightStyle }}
      >
        <CollapsedStateProvider value={collapsed}>
          {children}
        </CollapsedStateProvider>
      </div>
    );
  }
);
export default Collapsable;
