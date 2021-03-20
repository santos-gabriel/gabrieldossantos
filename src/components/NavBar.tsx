import { faGithub, faInstagram, faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { NavBarContext } from '../contexts/NavBarContext';

import styles from '../styles/components/NavBar.module.css';

export function NavBar() {
    
    const [activeColapseNavBarToggle, setActiveColapseNavBarToggle] = useState(false);

    const { isFixed, activeItemIndex } = useContext(NavBarContext);

    function handleColapseNavBar(e) {        
        e.preventDefault();
        setActiveColapseNavBarToggle(!activeColapseNavBarToggle);
    }

    return(
        <header className={isFixed ? `row ${styles.header} ${styles.fixed}` : `row ${styles.header}`}>
        <h1 className='font-zero'>Portifólio Gabriel dos Santos software developer</h1>
        <div className='content'>
            {/* <!--logo header--> */}
            <div className={styles.headerLogo}>
                <a href="#" title="Gabriel dos Santos">
                    <img src="/logo.svg" alt="Logomarca" />
                </a>
            </div>            
            {/* <!--menu toggle for mobile--> */}
            <a href="/" id={styles.navToggle} className={activeColapseNavBarToggle ? styles.active : ''} onClick={(e) => handleColapseNavBar(e)}>
                <span></span>
                <span></span>
                <span></span>
            </a>
            {/* <!--menu--> */}
            <div className={`${styles.headerCollapse} ${activeColapseNavBarToggle ? styles.active : ''}`}>
              <nav className={styles.headerNav}>
                  <h1 className='font-zero'>Navegação do site</h1>
                  <ul>
                      <li><a href="#home" title="Home" className={styles.active}>Home</a></li>
                      <li><a href="#about" title="Sobre">Sobre</a></li>
                      <li><a href="#conquest" title="Conquistas">Conquistas</a></li>                      
                  </ul>
              </nav>
              {/* <!--contacts social links and icons--> */}
              <div className={styles.headerRedes}>
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
            </div>

        </div>
      </header>
    );
}