import React from 'react'
import { useSelector } from 'react-redux'

import { TaskItem } from '../../components/TaskItem'


import styles from './TaskList.module.css'

export const TaskList = () => {
  const tasks = useSelector(state => state.createTask.tasks)

  return (
    <div className={styles.TaskListWrap}>

      {
        tasks.map(taskObj => (
          <TaskItem
            key={taskObj.id}
            {...taskObj}
          />
        ))
      }
    </div>
  )
}
