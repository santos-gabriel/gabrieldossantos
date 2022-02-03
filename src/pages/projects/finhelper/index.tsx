import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import NavBarProject from "../../../components/NavBarProject";
import { LinkProjects } from "../../../components/NavBarProject";

export default function FinHelper() {
    let links: LinkProjects[] = [
        {icon:faGithub, link:"https://www.github.com/Santos-Gabriel", targetType:"_blank"},
        {icon:faGooglePlay, link:"https://www.linkedin.com/in/gabriel-almeida-dos-santos", targetType:"_blank"}];
    
    
    return (
        <>
            <div>
                <NavBarProject 
                    projectName={'FinHelper'} 
                    projectImage="/FinHelper_purple.svg"
                    links={links}
                />
            </div>
        </>
    );
}