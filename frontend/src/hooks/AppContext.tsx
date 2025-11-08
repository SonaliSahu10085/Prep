import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

type fnc = Dispatch<SetStateAction<string>>;

type AppContextType = {
  theme: string;
  setTheme: fnc;
};


// Give the context a type, but initialize with `undefined`
export const AppContext = createContext<AppContextType | undefined>(undefined);
