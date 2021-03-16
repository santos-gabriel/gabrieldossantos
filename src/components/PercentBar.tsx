import styles from '../styles/components/PercentBar.module.css';

interface PercentBarProps {
    title: string,
    percent: number
}

export function PercentBar (props: PercentBarProps) {
    return (
        <div className={styles.skillBox}>
            <p>{props.title}</p>
            <p>{`${props.percent}%`}</p>
            <div className={styles.skill}>
              <div className={styles.skillLevel} style={{width: `${props.percent}%`}}></div>
            </div>
        </div>
    );
}