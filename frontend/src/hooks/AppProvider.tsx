import { useState } from "react";
import type { ReactNode } from "react";
import { AppContext } from "./AppContext";

interface AppProviderProps {
    children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {

    const [theme, setTheme] = useState("light");
    const providerValues = {
        theme, setTheme
    };

    return (
        <AppContext.Provider value={providerValues}>
            {children}
        </AppContext.Provider>
    )

}