import { faAward, faMedal, faTrophy } from '@fortawesome/free-solid-svg-icons';

import stylesCard from '../styles/components/ConquestCard.module.css';
import { ConquestCard } from './ConquestCard';
import { Title } from './Title';

export function Conquest () {
    return (
        // <!--start CONQUEST-->
        <>
            <Title text={'conquistas'} id={'conquestId'}/>
            <section className={`section row ${stylesCard.circle}`} id="conquest">
                <div className={`content ${stylesCard.content}`}>
                <div className={`container ${stylesCard.container}`}>                    
                    <ConquestCard title={'Graduação'} description={'Análise e Desenvolvimento de Sistemas - UniFanap'} icon={faTrophy} />
                    <ConquestCard title={'Evento'} description={'Bootcamp FullStack - IGTI'} icon={faAward} />
                    <ConquestCard title={'Evento'} description={'Next Level Week - Rocketseat'} icon={faMedal} />
                </div>
                </div>
            </section> 
        </>     
        // <!--end CONQUEST-->
    );
}