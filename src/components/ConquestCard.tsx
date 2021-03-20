import { faAward, faMedal, faTrophy, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/components/ConquestCard.module.css';

interface ConquestCardProps {
    title: string,
    description: string,
    icon:  IconDefinition;
}

export function ConquestCard (props: ConquestCardProps) {
    return (
        // <!--circle card conquest-->
        <div className={styles.cardConquest}>
          <div className={styles.circleConquest}>
            <h2 className={styles.titleCardConquest}>
                {props.title}
            </h2>
            <div className={styles.iconConquest}>
                <FontAwesomeIcon className={styles.icon} icon={props.icon} />
            </div>            
            <div className={styles.textConquest}>
                <h2 className={styles.titleConquest}>
                    {props.description}
                </h2>
            </div>
          </div>
        </div>
    );
}