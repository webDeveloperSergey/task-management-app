import React from 'react'
import { useSelector } from 'react-redux'

import { Statistic } from '../Statistic'

import styles from './StatisticList.module.css'

import activeImg from './img/active.png'
import inprogressImg from './img/inprogress.png'
import urgentImg from './img/urgent.png'
import doneImg from './img/done.png'

export const StatisticList = () => {
  const statusCount = useSelector((state) => state.createTask.statusCount)

  const statisticsImg = [activeImg, inprogressImg, urgentImg, doneImg]

  return (
    <div className={styles.StatisticListWrap}>
      {Object.keys(statusCount).map((name, index) => (
        <Statistic
          key={index}
          statusCount={statusCount}
          statisticsImg={statisticsImg}
          name={name}
          index={index}
        />
      ))}
    </div>
  )
}
