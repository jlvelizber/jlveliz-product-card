import { useEffect, useRef, useState } from "react";
import { useProductArgsInterface } from "../interfaces";

export const useProduct = ({ onChange, product, value = 0, initialValue }: useProductArgsInterface) => {
  const [count, setCount] = useState<number>(initialValue?.count || value);
  // Nota: creamos una referencia del onChange para saber si estamos o no cambiando el estado del componente
  const isMounted = useRef(false)

  const inscaseBy = (number: number): void => {

    let newValue = Math.max(count + number, 0);
    // Se indica que el maxcount debe ser el que enviamos en el parametro del componente
    if (initialValue?.maxCount) {
      newValue = Math.min(newValue, initialValue.maxCount)
    }

    setCount(newValue);

    onChange && onChange({ count: newValue, product })
  };

  const reset = () => {
    setCount(initialValue?.count || count)
  }

  // Nota: si nuestro componente no esta montado va a retornar 'nada' 
  useEffect(() => {
    if (!isMounted.current) return;
    setCount(count)

  }, [count])


  useEffect(() => {
    isMounted.current = true;
  }, []);

  return { count, inscaseBy, maxCount: initialValue?.maxCount, reset };
};
