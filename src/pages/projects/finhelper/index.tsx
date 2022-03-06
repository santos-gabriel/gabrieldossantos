import { NavBarProjectsProvider } from "../../../contexts/NavBarProjectsContext";
import Home from "./home";

export default function FinHelper() {
    
    return (
        <NavBarProjectsProvider>
            <Home />
        </NavBarProjectsProvider>
    );
}