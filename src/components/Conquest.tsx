import styles from '../styles/components/Conquest.module.css';
import { ConquestCard } from './ConquestCard';

export function Conquest () {
    return (
        <div>
            <ConquestCard 
                title={'Graduação'} 
                description={'Análise e Desenvolvimento de Sistemas - UniFanap'} 
                icon={1}
                />
        </div>
    );
}