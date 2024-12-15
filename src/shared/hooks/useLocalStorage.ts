import { useState } from 'react';

export const useLocalStorage = (key: string, defaultValue: unknown = '') => {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }

      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (e) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  })

  const updateStorageValue = (value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value))
    setStorageValue(value)
  }

  return { storageValue, updateStorageValue }
}