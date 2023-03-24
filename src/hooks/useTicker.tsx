import { useCallback, useEffect, useState } from "react";

interface UseTickerProps {
  length: number;
  delay: number;
}

const useTicker = ({ length, delay }: UseTickerProps) => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (value < length - 1) setValue(value + 1);
      else setValue(0);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, length, value]);

  return { value };
};

export default useTicker;
