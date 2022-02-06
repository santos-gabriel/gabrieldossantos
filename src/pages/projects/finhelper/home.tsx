import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { useContext, useEffect } from "react";
import NavBarProject from "../../../components/NavBarProject";
import { LinkProjects } from "../../../components/NavBarProject";
import styles from '../../../styles/pages/Project.module.css';
import { NavBarProjectsContext } from "../../../contexts/NavBarProjectsContext";

export default function Home() {
    let links: LinkProjects[] = [
        {icon:faGithub, link:"https://www.github.com/Santos-Gabriel/fin-helper", targetType:"_blank"},
        {icon:faGooglePlay, link:"https://play.google.com/store/apps/", targetType:"_blank"}];
        
    
    const { handleFixed } = useContext(NavBarProjectsContext);    

    useEffect (() => {
        document.addEventListener('scroll', e => {
          let scrollPosition = document.scrollingElement.scrollTop;
          if (scrollPosition > 50) {
            console.log(typeof(handleFixed))
            handleFixed(true);                   
          } else {
            handleFixed(false);          
          }
        });
      }, []); 

    
    return (
        <div>
            
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
                    <div className={styles.photo}>
                        <img src="/back-gabriel.svg" alt="FinHelper" />
                        <img src="/front-gabriel.svg" alt="FinHelper" />
                    </div>
                    <div className={styles.photo}>
                        <img src="/FinHelper_purple.svg" alt="FinHelper" />
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}