import { faGithub, faGooglePlay, faInstagram, faLinkedin, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useContext, useEffect } from "react";
import NavBarProject from "../../../components/NavBarProject";
import { LinkIcon } from "../../../models/LinkIcons";
import styles from '../../../styles/pages/Project.module.css';
import { NavBarProjectsContext } from "../../../contexts/NavBarProjectsContext";
import { FooterProject } from "../../../components/FooterProject";

export default function Home() {
    let links: LinkIcon[] = [
        {icon:faGithub, link:"https://www.github.com/Santos-Gabriel/fin-helper", targetType:"_blank"},
        {icon:faGooglePlay, link:"https://play.google.com/store/apps/", targetType:"_blank"}];

    const { handleFixed } = useContext(NavBarProjectsContext);    

    useEffect (() => {
        document.addEventListener('scroll', e => {
          let scrollPosition = document.scrollingElement.scrollTop;
          if (scrollPosition > 50) {
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
                            FinHelper é um acrônimo para Finances Helper, que traduzido diretamente significa Ajudante de Finanças. 
                            E este é seu papel, ajudar nas finanças pessoais de todos que buscam um melhor controle de sua vida financeira.
                        </p>
                        <br />
                        <p>
                            FinHelper se trata de um aplicativo com o objetivo de auxiliar nas finanças pessoais, podendo gerenciar suas receitas
                            e despesas pessoais, categorizando por <b>Fixas</b> e <b>Não Fixas</b> tanto as despesas quanto as receitas pode ser categorizadas.
                        </p>
                        <p>
                            Podendo ser acessado de qualquer lugar, podendo ser utilizado até mesmo sem acesso a internet. Basta apenas 
                            um celular e uma vontade de organização financeira pessoal.
                        </p>
                        <p>
                            Para segurança e privacidade FinHelper conta com proteção de acesso, seja por senha, padrão ou até mesmo reconhecimento facial ou impressão digital.
                        </p>
                        <p>
                            Ainda pensando na segurança e privacidade, o aplicativo armazena seus dados em seu próprio dispositivo para que não seja armazenado dados em servidores.
                        </p>
                    </div>
                </div>
                <div className={styles.photos}>
                    <div className={styles.photo}>
                        <img src="/home.png" alt="FinHelper" />
                        <img src="/first_login.png" alt="FinHelper" />
                        <img src="/add_revenue.png" alt="FinHelper" />
                    </div>
                    <div className={styles.photo}>
                        <img src="/settings.png" alt="FinHelper" />
                        <img src="/splash.png" alt="FinHelper" />
                    </div>
                </div>
                
                
            </div>
            <FooterProject linksIcons={[]} />
        </div>
    );
}