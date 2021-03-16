

import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { HomeTop } from '../components/HomeTop';
import { NavBar } from '../components/NavBar';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (

    <div className={styles.container}>
      
      <section>
        <NavBar />
        <HomeTop />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Footer />
      </section>

    </div>
  )
}
