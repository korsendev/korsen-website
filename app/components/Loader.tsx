import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <div className={styles.box1} />
        <div className={styles.box2} />
        <div className={styles.box3} />
      </div>
    </div>
  );
};

export default Loader;