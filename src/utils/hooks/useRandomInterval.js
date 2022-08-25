import { useRef, useEffect, useCallback } from "react";

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function useRandomInterval(callback, minDelay, maxDelay) {
  const timeoutRef = useRef(null);
  const callbackRef = useRef(callback);

  //change callback ref when updated
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleTick = () => {
      const nextTickAt = getRandom(minDelay, maxDelay);
      timeoutRef.current = setTimeout(() => {
        callbackRef.current();
        handleTick();
      }, nextTickAt);
    };
    handleTick();
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [minDelay, maxDelay]);

  const cancel = useCallback(() => clearTimeout(timeoutRef.current), [timeoutRef]);
  return cancel;
}
