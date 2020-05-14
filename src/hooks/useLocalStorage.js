import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storeValue, setStore] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStore(value);
    } catch (error) {
      setStore(value);
    }
  };

  return [storeValue, setLocalStorage];
};
