import React, { useCallback, useEffect, useRef } from "react";
type IntersectionDetectorCallback = (entry: IntersectionObserverEntry) => void;
type IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[]
) => void;
type IntersectionDetectorProps = React.PropsWithChildren<{
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number;
  className?: string;
  onEnter?: IntersectionDetectorCallback;
  onLeave?: IntersectionDetectorCallback;
  onLeaveFromTop?: IntersectionDetectorCallback;
  onLeaveFromBottom?: IntersectionDetectorCallback;
}>;

const IntersectionDetector = React.forwardRef<
  HTMLDivElement,
  IntersectionDetectorProps
>(
  (
    {
      children,
      className = "",
      onEnter,
      onLeave,
      root,
      threshold,
      rootMargin,
      onLeaveFromTop,
      onLeaveFromBottom
    },
    ref
  ) => {
    const childRootRef = ref ?? useRef<HTMLDivElement>(null);
    const initializedRef = useRef<boolean>(false);
    const observerCallback = useCallback<IntersectionObserverCallback>(
      ([entry]) => {
        const initialized = initializedRef.current;
        if (!initialized) {
          initializedRef.current = true;
          return;
        }
        if (entry.isIntersecting && onEnter) {
          onEnter(entry);
          return;
        }
        const callFirstCallcack = (
          ...funcs: (IntersectionDetectorCallback | undefined)[]
        ) => {
          const cb = funcs.find((p) => !!p);
          if (cb) {
            cb(entry);
          }
        };
        if (!entry.isIntersecting) {
          if (entry.boundingClientRect.top > 0) {
            callFirstCallcack(onLeaveFromBottom, onLeave);
          } else {
            callFirstCallcack(onLeaveFromTop, onLeave);
          }
        }
      },
      []
    );
    const observerRef = useRef<IntersectionObserver>(
      new IntersectionObserver(observerCallback, {
        root,
        threshold,
        rootMargin
      })
    );

    useEffect(() => {
      if (typeof childRootRef === "function") {
        console.warn(
          "IntersectionDetector Expects ref to be an RefObject, function callback is not accecpted."
        );
        return;
      }

      if (!childRootRef.current) {
        return;
      }
      const observer = observerRef.current;
      observer.observe(childRootRef.current);
      return () => {
        if (!childRootRef.current) {
          return;
        }
        observer.unobserve(childRootRef.current);
        observer.unobserve(childRootRef.current);
      };
    }, []);

    return (
      <div ref={childRootRef} className={className}>
        {children}
      </div>
    );
  }
);

export default IntersectionDetector;
