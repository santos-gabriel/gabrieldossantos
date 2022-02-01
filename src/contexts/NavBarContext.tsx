import { createContext, ReactNode, useEffect, useState } from "react";


interface NavBarProviderData {    
    isFixed: boolean;    
    handleFixed: (fixed: boolean) => void;
}

interface NavBarProviderProps {
    children: ReactNode
}


export const NavBarContext = createContext({} as NavBarProviderData);

export function NavBarProvider ({children}: NavBarProviderProps) {
    
    const [isFixed, setIsFixed] = useState(false);    

    function handleFixed(fixed: boolean) {
        setIsFixed(fixed);
    }

    return (
        <NavBarContext.Provider value={{isFixed, handleFixed}}>
            {children}
        </NavBarContext.Provider>
    );

}
