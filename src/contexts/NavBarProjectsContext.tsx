import { createContext, ReactNode, useState } from "react";


interface NavBarProjectsProviderData {
    isFixed: boolean;
    handleFixed: (fixed: boolean) => void;
}

interface NavBarProjectsProviderProps {
    children: ReactNode;
}

export const NavBarProjectsContext = createContext({} as NavBarProjectsProviderData);

export function NavBarProjectsProvider ({children}: NavBarProjectsProviderProps) {
    const [isFixed, setIsFixed] = useState(false);

    function handleFixed(fixed: boolean){
        setIsFixed(fixed);
    }

    return (
        <NavBarProjectsContext.Provider value={{isFixed, handleFixed}}>
            {children}
        </NavBarProjectsContext.Provider>
    );

}