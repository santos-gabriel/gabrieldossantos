import { faAward, faMedal, faTrophy } from '@fortawesome/free-solid-svg-icons';

import { ConquestCard } from './ConquestCard';
import { Title } from './Title';

import stylesCard from '../styles/components/ConquestCard.module.css';

export function Conquest () {
    return (
        
        <>
            <Title text={'conquistas'} id={'conquestTitle'}/>            
            <section id="conquest" className={`section row ${stylesCard.circle}` } >
                <div className={`content ${stylesCard.content}`}>
                <div className={`container ${stylesCard.container}`}>                    
                    <ConquestCard title={'Graduação'} description={'Análise e Desenvolvimento de Sistemas - UniFanap'} icon={faTrophy} />
                    <ConquestCard title={'Evento'} description={'Bootcamp FullStack - IGTI'} icon={faAward} />
                    <ConquestCard title={'Evento'} description={'Next Level Week - Rocketseat'} icon={faMedal} />
                </div>
                </div>
            </section> 
            
        </>     
        
    );
}