import { useContext, useEffect, useState } from 'react';
import { NavBarContext } from '../contexts/NavBarContext';
import styles from '../styles/components/HomeTop.module.css';

export function HomeTop () {
    const { handleActiveItem, handleFixed } = useContext(NavBarContext);    
    useEffect (() => {
      document.addEventListener('scroll', e => {
        let scrollPosition = document.scrollingElement.scrollTop;
        if (scrollPosition >= 50) {
          handleActiveItem(1);
          handleFixed(true);                   
        } else {
          handleFixed(false);          
        }
      });
    }, []);    
    return (
        // image top
        <div id={styles.imgTop}>
          <div id={styles.img}>
            <div className={styles.caption}>
              <p><strong id={styles.nameTop}>Gabriel Santos</strong></p>
              <p><strong id={styles.titleTop}>Estudante | Developer</strong></p>
              <p>Grande amante da tecnologia e extremamente apaixonado por café, role para baixo e me conheça melhor</p>
            </div>
          </div>
        </div>
    );
}