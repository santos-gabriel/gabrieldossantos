
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/components/ProjectCard.module.css';

import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';


interface ProjectCardProps {
    title: string,
    description: string,
    imgSrc: string;
    link: string;
}

export function ProjectCard(props: ProjectCardProps) {
    return (
        <>
            <a href={props.link}>
                <div className={styles.cardProject}>
                    <div className={styles.circleProject}>
                        
                            <img className={styles.img} src={props.imgSrc} alt={props.title} />
                        
                    </div>

                    <div className={styles.captionProject}>
                        <div>
                            <p>
                                {props.title}
                            </p>
                            <p>
                                {props.description}
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronCircleRight}/>
                        </div>
                    </div>
                </div>
            </a>

        </>
    );
}