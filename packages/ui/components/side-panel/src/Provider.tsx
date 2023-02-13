import { createContext } from "react";

export const context = createContext({
  isOpen: false,
  toggle: () => {}
});
export const Provider = context.Provider;