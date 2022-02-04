import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import NavBarProject from "../../../components/NavBarProject";
import { LinkProjects } from "../../../components/NavBarProject";
import styles from '../../../styles/pages/Project.module.css';

export default function FinHelper() {
    let links: LinkProjects[] = [
        {icon:faGithub, link:"https://www.github.com/Santos-Gabriel/fin-helper", targetType:"_blank"},
        {icon:faGooglePlay, link:"https://play.google.com/store/apps/", targetType:"_blank"}];
    
    
    return (
        <>
            
            <div>
                <NavBarProject 
                    projectName={'FinHelper - Finances Helper'} 
                    projectImage="/FinHelper_purple.svg"
                    links={links}
                />
            </div>
            
            <div className={styles.content}>
                <div className={styles.about}>
                    <div>
                        <img src="/FinHelper_purple.svg" alt="FinHelper" />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati praesentium deserunt veniam 
                            doloribus, sint at pariatur enim omnis soluta odio, fugiat quo, repellat a magni odit architecto animi! 
                            Recusandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati praesentium deserunt veniam 
                            doloribus, sint at pariatur enim omnis soluta odio, fugiat quo, repellat a magni odit architecto animi! 
                            Recusandae.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati praesentium deserunt veniam 
                            doloribus, sint at pariatur enim omnis soluta odio, fugiat quo, repellat a magni odit architecto animi! 
                            Recusandae.
                        </p>
                    </div>
                </div>
                <div className={styles.photos}>
                    <div>
                        <img src="/back-gabriel.svg" alt="FinHelper" />
                    </div>
                    <div>
                        <img src="/front-gabriel.svg" alt="FinHelper" />
                    </div>
                    <div>
                        <img src="/FinHelper_purple.svg" alt="FinHelper" />
                    </div>
                </div>
            </div>
        </>
    );
}