import { useState, useEffect } from 'react';

// Custom Hook para persistir datos en LocalStorage
export function useLocalStorage(key, initialValue) {
  // Inicializamos el estado con el valor de LocalStorage o el valor inicial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error leyendo LocalStorage:", error);
      return initialValue;
    }
  });

  // Cada vez que storedValue cambie, actualizamos LocalStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error escribiendo en LocalStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
