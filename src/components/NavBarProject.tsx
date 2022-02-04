import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import styles from '../styles/components/NavBarProject.module.css';

interface NavBarProjectProps {
    projectName: String,
    projectImage?: string,
    links: LinkProjects[],
}

export interface LinkProjects {
    link: string,
    icon: IconDefinition,
    targetType: string,
}

export default function NavBarProject (props: NavBarProjectProps) {
    return (
        <header className={`row ${styles.header} ${styles.fixed}`}>
            <h1 className='font-zero'>{props.projectName}</h1>        
            <div className={`content ${styles.contentHeader}`}>
                
                <div className={styles.headerLogo}>
                    <a href="/">
                        <FontAwesomeIcon icon={faChevronCircleLeft} />
                    </a>
                    
                    {props.projectImage && <img src={props.projectImage} alt="Logomarca" /> }
                    <h1>{props.projectName}</h1>
                    
                </div>                        
                
                <div className={styles.headerRedes}>
                    {props.links.map((e, _) => {
                        return (<a href={e.link} target={e.targetType}>
                            <FontAwesomeIcon icon={e.icon} />
                        </a>);
                    })}
                </div>
                
            </div>
        </header>
    );
}
