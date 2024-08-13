import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue =
        JSON.parse(localStorage.getItem(key)) || String(defaultValue);
    } catch (er) {
      console.log(er);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  // const setValueToStorage = (newValue) => {
  //   setValue(newValue);
  //   localStorage.setItem(key, JSON.stringify(newValue));
  // };

  // return [value, setValueToStorage];

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
