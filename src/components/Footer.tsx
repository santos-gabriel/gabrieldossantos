import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import styles from '../styles/components/Footer.module.css';

export function Footer () {
    return (
        
        <footer>
            <div className='row'>
            <h1 className='font-zero'>Agradecimentos</h1>
            <div className='content'>
                <div className={styles.footer}>
                
                <div className={styles.footerRedes}>
                    <a href="https://www.github.com/Santos-Gabriel" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />                        
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-almeida-dos-santos" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />                        
                    </a>
                    <a href="https://www.instagram.com/gabrieldsoficial/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />                        
                    </a>
                    <a href="https://api.whatsapp.com/send?1=pt_br&phone=5562982989460">
                        <FontAwesomeIcon icon={faWhatsapp} />                        
                    </a>
                    <a href="https://t.me/santos_gabriel" target="_blank">
                        <FontAwesomeIcon icon={faTelegram} />                        
                    </a>
                </div>

                <div className={styles.footerTextos}>
                    <p>
                    Copyright © {new Date().getFullYear()} Todos os direitos reservados
                    </p>
                    <p>Feito com <i><FontAwesomeIcon icon={faHeart} /></i> Gabriel dos Santos</p>
                    <p>gabrielalmeidads@gmail.com</p>
                </div>

                </div>
            </div>
            </div>
        </footer>

    );
}
