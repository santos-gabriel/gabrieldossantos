import { faGithub, faGooglePlay, faInstagram, faLinkedin, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useContext, useEffect, useState } from "react";
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
    const [ projectTitle, setProjectTitle ] = useState("FinHelper");

    useEffect (() => {
        document.addEventListener('scroll', e => {
          let scrollPosition = document.scrollingElement.scrollTop;
          if (scrollPosition > 50) {
            handleFixed(true);
          } else {
            handleFixed(false);          
          }
        });

        window.addEventListener('resize', e => {
          let size = window.innerWidth;
          if (size > 960) {
            setProjectTitle("FinHelper - Finances Helper");
          } else {
            setProjectTitle("FinHelper");
          }
        });
      }, []); 

    
    return (
        <div>
            
            <div>
                <NavBarProject 
                    projectName={projectTitle} 
                    projectImage="/FinHelper_purple.svg"
                    links={links}
                />
            </div>
            
            <div className={styles.content}>
                <div className={styles.about}>
                    <div>
                        <img src="/FinHelper_w410h248.png" alt="FinHelper" />
                    </div>
                    <div>
                        <p>
                            <b>FinHelper</b> é um acrônimo para <i>Finances Helper</i>, que traduzido diretamente para o português significa Ajudante de Finanças. 
                            E este é seu papel, ajudar nas finanças pessoais de todos que buscam um melhor controle de sua vida financeira.
                        </p>
                        <br />
                        <p>
                            FinHelper se trata de um aplicativo com o objetivo de auxiliar nas finanças pessoais, podendo gerenciar suas receitas
                            e despesas pessoais, categorizando por <b>Fixas</b> e <b>Não Fixas</b> tanto as despesas quanto as receitas podem ser categorizadas.
                        </p>
                        <p>
                            FinHelper pode ser acessado de qualquer lugar, podendo ser utilizado até mesmo sem acesso a <b>internet</b>. Basta apenas 
                            um celular e uma vontade de organização financeira pessoal.
                        </p>
                        <br />
                        <p>
                            Para sua segurança e privacidade FinHelper conta com <b>proteção de acesso</b>, podendo ser habiliada a qualquer momento pelo app, 
                            quando habilitada seu acesso ficará protegido seja por senha, padrão, reconhecimento facial ou impressão digital.
                        </p>
                        <p>
                            Ainda pensando na sua segurança e privacidade, o aplicativo armazena seus dados em seu próprio dispositivo.
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