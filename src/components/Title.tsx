import styles from '../styles/components/Title.module.css';

interface TitleProps {
    text: string,
    id: string
}

export function Title(props: TitleProps) {
    return (
        <div>
            <section className={styles.section} id={props.id}>
                <header className={styles.sectionHeader}>
                <div className='content'>
                    <h1><span>{props.text}</span></h1>
                </div>
                </header>
            </section>
        </div>
    );
}