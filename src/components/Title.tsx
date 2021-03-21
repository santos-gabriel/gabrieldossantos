import styles from '../styles/components/Title.module.css';

interface TitleProps {
    text: string,
    id: string
}

export function Title(props: TitleProps) {
    
    return (

        <div>
            <section id={props.id} className={styles.section} >
                <header className={styles.sectionHeader}>
                    <div className='content'>
                        <h1>
                            <span>{props.text}</span>
                        </h1>
                    </div>
                </header>
            </section>
        </div>

    );

}