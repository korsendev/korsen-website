import React from 'react';
import styles from './page.module.css';
import Loader from './components/Loader';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Loader />
        <p className={styles.message}>Muy pronto</p>
        <p className={styles.subtitle}>Estamos trabajando en la página</p>
      </div>
    </div>
  );
}
