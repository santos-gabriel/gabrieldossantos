
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/components/ProjectCard.module.css';

import { faTrophy } from '@fortawesome/free-solid-svg-icons';

interface ProjectCardProps {
    title: string,
    description: string,
    imgSrc: string;
}

export function ProjectCard(props: ProjectCardProps) {
    return (
        
        <div className={styles.cardProject}>
            <div className={styles.circleProject}>
                <h2 className={styles.titleCardProject}>
                    {props.title}
                </h2>
                <div className={styles.imgProject}>
                    <img className={styles.img} src={props.imgSrc} alt={props.title} />
                </div>
                <div className={styles.textProject}>
                    <h2 className={styles.descriptionProject}>
                        {props.description}
                    </h2>
                </div>
            </div>
        </div>
        
    );
}