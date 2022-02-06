
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
            <div className={styles.cardProject}>
                
                <div className={styles.circleProject}>               
                    <img className={styles.img} src={props.imgSrc} alt={props.title} />
                </div>

                <a href={props.link} className={styles.captionProject}>
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
                </a>

            </div>

    </>
    );
}