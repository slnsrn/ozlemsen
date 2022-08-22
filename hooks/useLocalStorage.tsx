import { useState } from "react";

function useLocalStorage(key: string, initialValue: unknown) {
  const [storedValue, set] = useState(() => {
    try {
      // try to get value if already there
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      console.log("Error while trying to access local storage", error);
      return initialValue;
    }
  });
  const setStoredValue = (value: unknown) => {
    try {
      /**
       * @note
       * by allowing the hook's parameter to be a function
       * we can mimic the same API as useState
       */
      const newValue = value instanceof Function ? value(storedValue) : value;
      set(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log("Error while trying to set value to local storage", error);
    }
  };
  return [storedValue, setStoredValue];
}

export { useLocalStorage };
