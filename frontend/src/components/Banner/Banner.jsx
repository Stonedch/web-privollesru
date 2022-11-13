import React from 'react';
import styles from './Banner.module.scss';
import banner from 'assets/Banner/banner.png'

function Banner() {
  return (
    <div className={styles.banner}>
        <img src={banner}/>
    </div>
  )
}

export {Banner};