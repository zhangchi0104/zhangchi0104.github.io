import { useTriggerUpdate } from "@/hooks";
import React, {
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
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
    useLayoutEffect(() => {
      setHeight(collapsed ? 0 : selfRef.current?.scrollHeight ?? 0);
    }, [collapsed]);

    useEffect(() => {
      if (observable && notify) {
        notify(
          collapsed
            ? 0 - (selfRef.current?.scrollHeight ?? 0)
            : selfRef.current?.scrollHeight ?? 0
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
    const animation = `transition-[height] origin-top ease-in-out duration-500`;
    const css = `overflow-hidden ${className ?? ""}`;
    return (
      <div
        ref={selfRef}
        className={`${css} ${animation}`}
        style={{ height: heightStyle }}
      >
        {children}
      </div>
    );
  }
);
export default Collapsable;
