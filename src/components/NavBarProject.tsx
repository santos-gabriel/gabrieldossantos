import { faGithub, faGooglePlay, faInstagram, faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/components/NavBarProject.module.css';

interface NavBarProjectProps {
    projectName: String;
}

export default function NavBarProject (props: NavBarProjectProps) {
    return (
        
        <header className={`row ${styles.header} ${styles.fixed}`}>
            <h1 className='font-zero'>FinHelper, aplicativo para auxílio nas finanças pessoais</h1>        
            <div className={`content ${styles.contentHeader}`}>
                
                <div className={styles.headerLogo}>
                    <a href="">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </a>
                    
                    <h1>{props.projectName}</h1>
                        {/* <img src="/logo.svg" alt="Logomarca" /> */}
                    
                </div>
                        
                
                <div className={styles.headerRedes}>
                        <a href="https://www.github.com/Santos-Gabriel" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-almeida-dos-santos" target="_blank"> 
                            <FontAwesomeIcon icon={faGooglePlay} />
                        </a>
                </div>

                
            </div>
        </header>
 
    );
}