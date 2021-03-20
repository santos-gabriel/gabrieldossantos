import styles from '../styles/components/About.module.css';
import sytlesPercentBar from '../styles/components/PercentBar.module.css';
import { PercentBar } from './PercentBar';
import { Title } from './Title';

export function About () {
    return (
        <>
            <Title text={'sobre'} id={'about'}/>
        
            {/* <div className={`row ${styles.row}`}> */}
                <div className={`content ${styles.about}`}>


                <div className={styles.imgAbout}>
                    <img src="/front-gabriel.svg" alt="Gabriel" />
                    <p>Me chamo Gabriel dos Santos tenho 21 anos, sou desenvolvedor de software e formado em Análise e Desenvolvimento de Sistemas. 
                    Iniciei-me neste mundo da tecnologia aos meus 17 anos, tive minha primeira oportunidade na área da tecnologia aos meus 18 anos, sendo como auxiliar de TI em uma clínica psiquiátrica onde junto com a equipe de TI pestava suporte e zelava 
                    por toda a infraestrutura de redes da clínica, mantendo sempre seu funcionamento efetivo.
                    </p>
                    <br/>
                    <p>Atualmente estou voltado ao desenvolvimento de soluções em softwares, colaboro com uma equipe de desenvolvimento onde junto com a mesma realizo o desenvolvimento de novas soluções e presto manutenção em seus sistemas e suas API's. 
                    Recentemente tive a oportunidade de participar juntamente a um grupo formado por três integrantes onde realizáva-mos a documentação, criação e implantação de um sistema de gestão em uma loja varejista de calçados situada no interior do estado de Goiás. Estou sempre a procura de novos desafios, aprendendo novas habilidades e melhorando as já existentes.
                    </p>
                    <br/>
                    <p>Leitura, jogos eletrônicos, caminhadas ao ar livre, filmes e séries fazem parte de meus hobbies favoritos</p>
                </div>








                <div className={sytlesPercentBar.skills}>
                    <div className={sytlesPercentBar.center}>
                        <h1 className="font-zero">Software Skills</h1>
                        <PercentBar title={'java'} percent={65} />
                        <PercentBar title={'javascript'} percent={30} />
                        <PercentBar title={'delphi'} percent={65} />
                        <PercentBar title={'html'} percent={50} />
                        <PercentBar title={'css'} percent={40} />
                        <PercentBar title={'react'} percent={20} />
                        <PercentBar title={'react native'} percent={15} />
                        <PercentBar title={'node'} percent={35} />
                        <PercentBar title={'sql'} percent={65} />
                        <PercentBar title={'git'} percent={60} />
                    </div>
                </div>
                
                </div>
            {/* </div> */}
        </>
    );
}

