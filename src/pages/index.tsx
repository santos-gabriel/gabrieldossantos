import { NavBarProvider } from '../contexts/NavBarContext';

import { NavBar } from '../components/NavBar';
import { HomeTop } from '../components/HomeTop';
import { About } from '../components/About';
import { Conquest } from '../components/Conquest';
import { Footer } from '../components/Footer';

import styles from '../styles/pages/Home.module.css';


export default function Home() {
  
  return (

    <div className={styles.container}>
      <NavBarProvider >
        <NavBar />
                
        <section id="home">
          <HomeTop />
        </section>

        <section id="about">
          <About />
        </section>

        <section>
          <Conquest />
        </section>
        
        <Footer />      
      </NavBarProvider>      
    </div>

  )

}
