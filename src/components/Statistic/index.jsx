import React from 'react'

import styles from './Statistic.module.css'

export const Statistic = ({ statusCount, statisticsImg, name, index }) => {
  return (
    <div className={styles.StatisticItem}>
      <img src={statisticsImg[index]} alt={name} />
      <div className={styles.Statistic}>
        <span className={styles.StatisticCount}>{statusCount[name]}</span>
        <span className={styles.StatisticText}>{name}</span>
      </div>
    </div>
  )
}
