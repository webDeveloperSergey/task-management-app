import React from 'react'

import { timeConverter } from '../../utils/timeConverter'

import styles from './TaskItem.module.css'

export const TaskItem = ({ id, title, descr, selectedStatus }) => {
  return (
    <div className={styles.task}>
      <div
        className={`${styles.taskItemStatus} 
        ${selectedStatus.replace(/ /g, '')}-status`}
      >
        {selectedStatus[0].toUpperCase() + selectedStatus.slice(1)}
      </div>
      <h2 className={styles.taskTitle}>{title}</h2>
      <span className={styles.taskItemDate}>{timeConverter(id)}</span>
    </div>
  )
}
