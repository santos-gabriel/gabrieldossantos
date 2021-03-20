

import { useContext, useEffect, useState } from 'react';
import { About } from '../components/About';
import { Conquest } from '../components/Conquest';
import { Footer } from '../components/Footer';
import { HomeTop } from '../components/HomeTop';
import { NavBar } from '../components/NavBar';
import { NavBarProvider } from '../contexts/NavBarContext';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  
  return (

    <div className={styles.container}>
      <NavBarProvider >
        <section>
          <NavBar />
          <HomeTop />
        </section>

        <section>
          <About />
        </section>

        <section>
          <Conquest />
        </section>

        <section>
          <Footer />
        </section>
      </NavBarProvider>
    </div>
  )
}
