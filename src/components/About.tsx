import { PercentBar } from './PercentBar';
import { Title } from './Title';

import styles from '../styles/components/About.module.css';
import sytlesPercentBar from '../styles/components/PercentBar.module.css';

export function About () {
    return (
        <>
            <Title text={'sobre'} id={'aboutTitle'}/>
                    
            <div className={`content ${styles.about}`}>


                <div className={styles.imgAbout}>
                    <h1 className="font-zero">Sobre Gabriel</h1>
                    <img src="/front-gabriel.svg" alt="Gabriel" />
                    <p>Me chamo Gabriel dos Santos tenho {new Date().getFullYear().toString().substr(-2)} anos, sou desenvolvedor de software e formado em Análise e Desenvolvimento de Sistemas. 
                    Iniciei-me neste mundo da tecnologia aos meus 17 anos, tive minha primeira oportunidade na área da tecnologia aos meus 18 anos, sendo como auxiliar de TI em uma clínica psiquiátrica onde junto com a equipe de TI prestava suporte e zelava 
                    por toda a infraestrutura de redes da clínica, mantendo sempre seu funcionamento efetivo.
                    </p>
                    <br/>
                    <p>Atualmente estou voltado ao desenvolvimento de soluções em softwares, colaboro com uma equipe de desenvolvimento, onde junto com a mesma realizo o desenvolvimento de novas soluções e presto manutenção em seus sistemas e suas API's. 
                    Recentemente tive a oportunidade de participar juntamente a um grupo formado por três integrantes onde realizáva-mos a documentação, criação e implantação de um sistema de gestão em uma loja varejista de calçados situada no interior do estado de Goiás. Estou sempre a procura de novos desafios, aprendendo novas habilidades e melhorando as já existentes.
                    </p>
                    <br/>
                    <p>Leitura, jogos eletrônicos, caminhadas ao ar livre, filmes e séries fazem parte de meus hobbies favoritos</p>
                </div>


                <div className={sytlesPercentBar.skills}>
                    <div className={sytlesPercentBar.center}>
                        <h1 className="font-zero">Software Skills</h1>
                        <div id={sytlesPercentBar.skillsImg}>
                            <div>
                                <img src="/html5.svg" alt="html5" />
                                <img src="/css3.svg" alt="css3" />                                
                                <img src="/javascript.svg" alt="javascript" />
                                <img src="/typescript.svg" alt="typescript" />
                            </div>

                            <div>
                                <img src="/java.svg" alt="java" />
                                <img src="/spring.svg" alt="spring" />
                            </div>

                            <div>
                                <img src="/react.svg" alt="react" />                                
                            </div>

                            <div>
                                <img src="/dart.svg" alt="dart" />
                                <img src="/flutter.svg" alt="flutter" />                                
                            </div>

                            <div>
                                <img src="/git.svg" alt="git" />
                                {/* <img src="/mysql.svg" alt="Gabriel" />*/}
                            </div>                            
                        </div>                        
                    </div>
                </div>
            
            </div>
        </>
    );
}

