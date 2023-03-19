import React from 'react'

import { WorkStatus } from '../WorkStatus'

import styles from './StatusList.module.css'

export const StatusList = () => {
  return (
    <div>
      <div className={styles.StatusListTitleWrap}>
        <h2 className={styles.StatusListTitle}>Status</h2>
        <h2 className={styles.StatusListTitle}>Title</h2>
        <h2 className={styles.StatusListTitle}>Publish Date</h2>
      </div>
      <WorkStatus />
    </div>
  )
}
