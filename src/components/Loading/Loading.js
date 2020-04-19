import React from 'react';

import {LinearProgress} from '@material-ui/core'

import styles from './Loading.module.css'

export default function Loading() {
  return (
    <section className={styles.container}>
      <div className={styles.loadingText}><h1>Loading</h1></div>
      <div className={styles.loadingBar}><LinearProgress /></div>
    </section>
    
  );
}
