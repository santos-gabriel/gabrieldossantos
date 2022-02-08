import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import styles from '../styles/components/Footer.module.css';
import { LinkIcon } from '../models/LinkIcons';

interface FooterProjectProps {
    linksIcons: LinkIcon[],
}

export function FooterProject (props: FooterProjectProps) {
    return (
        
        <footer>
            <div className='row'>
            <h1 className='font-zero'>Agradecimentos</h1>
            <div className='content'>
                <div className={styles.footer}>
                
                <div className={styles.footerRedes}>
                    {props.linksIcons.map((e, index) => {
                        return (
                            <a href={e.link} target={e.targetType} key={index}>
                                <FontAwesomeIcon icon={e.icon} />
                            </a>
                        );
                    })}
                </div>

                <div className={styles.footerTextos}>
                    <p>Copyright © {new Date().getFullYear()} Todos os direitos reservados</p>
                </div>

                </div>
            </div>
            </div>
        </footer>

    );
}
