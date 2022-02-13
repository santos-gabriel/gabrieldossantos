import { faGithub, faGooglePlay, faInstagram, faLinkedin, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useContext, useEffect, useState } from "react";
import NavBarProject from "../../../components/NavBarProject";
import { LinkIcon } from "../../../models/LinkIcons";
import styles from '../../../styles/pages/Project.module.css';
import { NavBarProjectsContext } from "../../../contexts/NavBarProjectsContext";
import { FooterProject } from "../../../components/FooterProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    let links: LinkIcon[] = [
        {icon:faGithub, link:"https://www.github.com/Santos-Gabriel/fin-helper", targetType:"_blank"},
        {icon:faGooglePlay, link:"https://play.google.com/store/apps/", targetType:"_blank"}];

    const { handleFixed } = useContext(NavBarProjectsContext);
    const [ projectTitle, setProjectTitle ] = useState("FinHelper");

    const [ modalIsShowing, setModalIsShowing ] = useState(false);
    const [ imgModal, setImgModal ] = useState("");
    const [ captionModal, setCaptionModal] = useState("");

    useEffect (() => {
        document.addEventListener('scroll', e => {
          let scrollPosition = document.scrollingElement.scrollTop;
          if (scrollPosition > 50) {
            handleFixed(true);
          } else {
            handleFixed(false);          
          }
        });
        window.innerWidth > 960 && setProjectTitle("FinHelper - Finances Helper");
        window.addEventListener('resize', e => {
          let size = window.innerWidth;
          if (size > 960) {
            setProjectTitle("FinHelper - Finances Helper");
          } else {
            setProjectTitle("FinHelper");
          }
        });
      }, []); 

      function handleShowModal(imgModal, caption) {
        setModalIsShowing(!modalIsShowing);
        setImgModal(imgModal);
        setCaptionModal(caption);
      }

    
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
                            Para sua segurança e privacidade FinHelper conta com <b>proteção de acesso</b>, podendo ser habilitada a qualquer momento pelo app, 
                            quando habilitada seu acesso ficará protegido seja por senha, padrão, reconhecimento facial ou impressão digital.
                        </p>
                        <p>
                            Ainda pensando na sua segurança e privacidade, o aplicativo armazena seus dados em seu próprio dispositivo.
                        </p>
                    </div>
                    <div id={styles.divider}></div>
                    <div>
                        <h3>Tech's</h3>
                        <p>
                            A construção do aplicativo <b>FinHelper</b> baseou-se em grandes tecnologias que resolvessem as necessidades pertinentes ao 
                            projeto, o mesmo foi constuído com linguagem de programação <b>Dart</b>.
                        </p> 
                        <br />
                        <p>
                            Neste projeto fez-se o uso do kit de desenvolvimento que foi criado pela própria <b>Google</b> o <b>Flutter</b>, 
                            que tem como premissa um desenvolvimento multiplataforma onde pode-se utilizar do mesmo desenvolvimento para realizar a
                            criação de aplicativos para Android, IOS, WEB e Desktop.
                            Como design fez-se o uso dos padrões oferecidos pelo <b>Material Design</b> desenvolvido também pela Google
                        </p>
                        <p>Adentrando no Flutter, neste projeto fez-se a utilização de diversas funcionalidades que o kit de desenvolvimento da Google pode oferecer, 
                            dentre elas vale resaltar: <i>contextos, estados, rotas, componentização dentre outras</i>. 
                           </p>
                        <br />
                        <p>
                            Para auxílio no processo de desenovlimento foi-se utilizado diversas <b>bibliotecas</b>, dentre elas é importante citar algumas como: 
                             <i> google_fonts, shared_preferences, intl, image_picker, local_auth, flutter_icons</i>, dentre outras...
                        </p>
                        <br />
                        <p>
                            Como editor de código utilizou-se do <b>Visual Studio Code</b>, editor desenvolvido pela <b>Microsoft. </b> 
                        {/* </p> */}
                        {/* <p> */}
                            Armazenado o código fonte em repositório aberto, hospedado no <b>GitHub</b>.
                        </p>
                        <p>
                            Para testagem utilizou-se de dispositivos físicos, e virtuais como o <b>AVD <i>(Android Virtual Devices)</i></b>.
                        </p>
                    </div>
                    <div className={styles.technologies}>
                        <img src="/dart.svg" alt="dart" />
                        <img src="/flutter.svg" alt="flutter" />
                        <img src="/vscode.svg" alt="dart" />
                        {/* <img src="/github.svg" alt="flutter" /> */}
                        <FontAwesomeIcon icon={faGithub} className={styles.techProject} />
                        <img src="/android.svg" alt="flutter" />
                    </div>
                </div>
                <div className={styles.photos}>
                    <div className={styles.photo}>
                        <img className={styles.myImg} src="/first_login.svg" alt="FinHelper" onClick={() => {handleShowModal("/splash.svg", "Tela de Cadastro")}} />
                        <img className={styles.myImg} src="/add_revenue.svg" alt="FinHelper" onClick={() => {handleShowModal("/add_revenue.svg", "Tela de Adição de Receita")}} />
                        <img className={styles.myImg} src="/home.svg" alt="FinHelper" onClick={() => {handleShowModal("/home.svg", "Tela Inicial")}} />
                    </div>
                    <div className={styles.photo}>
                        <img className={styles.myImg} src="/settings.svg" alt="FinHelper" onClick={() => {handleShowModal("/settings.svg", "Tela de Configurações")}} />
                        <img className={styles.myImg} src="/splash.svg" alt="FinHelper" onClick={() => {handleShowModal("/splash.svg", "Tela de Splash")}} />
                    </div>
                </div>
            </div>
            <div className={`${styles.contentLinkProject}`}>
                <a href="https://play.google.com/store/apps/">
                    <p>Conheça agora mesmo</p>
                    <div>
                        <FontAwesomeIcon icon={faGooglePlay}/>
                    </div>
                </a>
            </div>
            <FooterProject linksIcons={[]} />
            
            
            <>
                <div className={modalIsShowing ? `${styles.modal} ${styles.modalActive}` : `${styles.modal}`} id={styles.myModal}>
                    <span className={styles.close} onClick={() => {handleShowModal("", "")}} >&times;</span>
                    <img className={styles.modalContent} id={styles.img01} src={imgModal}/>
                    <div id={styles.caption}>{captionModal}</div>
                </div>
            </>
             

            



        </div>
        
    );
}
