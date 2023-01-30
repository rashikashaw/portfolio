import { useEffect, useRef } from "react";


export const useOutsideClick = (onOutsideClick: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (event: Event) => {
      console.log('event', event)
      if (!ref.current?.contains(event.target as Node | null)) {
        onOutsideClick();
      }
    };
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
    };
  }, [onOutsideClick]);
  return ref;
};