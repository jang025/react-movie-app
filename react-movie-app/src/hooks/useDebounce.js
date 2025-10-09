import { useState, useEffect } from "react";

//! reference for deBounce() https://medium.com/@sankalpa115/usedebounce-hook-in-react-2c71f02ff8d8

// reusable hook that allows me to implement debouncing in my search and preventing unneccessary API calls

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
