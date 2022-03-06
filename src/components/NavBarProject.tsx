import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useContext } from 'react';
import { NavBarProjectsContext } from '../contexts/NavBarProjectsContext';
import { LinkIcon } from '../models/LinkIcons';
import styles from '../styles/components/NavBarProject.module.css';

export interface NavBarProjectProps {
    projectName: String,
    projectImage?: string,
    links: LinkIcon[],
}

export default function NavBarProject (props: NavBarProjectProps) {
    const { isFixed } = useContext(NavBarProjectsContext);
    return (
        <header className={isFixed ? `row ${styles.header} ${styles.fixed}` : `row ${styles.header}`}>
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
                    {props.links.map((e, index) => {
                        return (<a href={e.link} target={e.targetType} key={index}>
                            <FontAwesomeIcon icon={e.icon} />
                        </a>);
                    })}
                </div>
                
            </div>
        </header>
    );
}
