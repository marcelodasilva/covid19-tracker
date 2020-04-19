import React from 'react';

import {CircularProgress} from '@material-ui/core'

import styles from './Loading.module.css'

export default function Loading() {
  return (
    <section className={styles.container}>
      <div className={styles.loadingContent}>
        <div>
        <h1>Loading</h1>
        <CircularProgress size={100}  />
        </div>
        </div>
    </section>
    
  );
}
