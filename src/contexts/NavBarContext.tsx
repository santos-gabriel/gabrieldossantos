import { createContext, ReactNode, useState } from "react";


interface NavBarProviderData {
    activeItemIndex: number;
    isFixed: boolean;
    handleActiveItem: (itemIndex: number) => void;
    handleFixed: (fixed: boolean) => void;
}

interface NavBarProviderProps {
    children: ReactNode
}


export const NavBarContext = createContext({} as NavBarProviderData);


export function NavBarProvider ({children}: NavBarProviderProps) {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [isFixed, setIsFixed] = useState(false);

    function handleActiveItem (itemIndex: number) {
        if (itemIndex !== activeItemIndex) 
            setActiveItemIndex(itemIndex);                               
    }

    function handleFixed(fixed: boolean) {
        if (fixed !== isFixed) 
            setIsFixed(fixed);
    }

    return (
        <NavBarContext.Provider value={{activeItemIndex, isFixed, handleActiveItem, handleFixed}}>
            {children}
        </NavBarContext.Provider>
    );

}
