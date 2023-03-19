import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { MyButton } from '../UI/button/MyButton'
import { MyInput } from '../UI/input/MyInput'

import { creaTask, updStatusCount } from '../../redux/slices/tasksSlice'
import { Textarea } from '../UI/textarea'
import { Statuses } from '../Statuses'

import styles from './CreateTask.module.css'

export const CreateTask = ({ toggleModel }) => {
  const [title, setTitle] = React.useState('')
  const [descr, setDescr] = React.useState('')

  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.createTask.tasks)
  const selectedStatus = useSelector((state) => state.createTask.selectedStatus)
  const statusCount = useSelector((state) => state.createTask.statusCount)

  const createTask = () => {
    const newTask = {
      id: Date.now(),
      title,
      descr,
      selectedStatus,
    }

    const newStatusCount = {
      ...statusCount,
    }
    newStatusCount[selectedStatus] += 1

    dispatch(creaTask([newTask, ...tasks]))
    dispatch(updStatusCount(newStatusCount))
    toggleModel()
    setTitle('')
  }

  return (
    <div>
      <div className={styles.CreateTaskWrap}>
        <h2>Create your own Task</h2>

        <div className={styles.CreateTaskItem}>
          <MyInput
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder={'Task name'}
          />
        </div>

        <div className={styles.CreateTaskItem}>
          <Textarea
            rows={5}
            placeholder='Describe your task'
            onChange={(e) => setDescr(e.target.value)}
            value={descr}
          />
        </div>

        <div className={styles.CreateTaskItem}>
          <Statuses />
        </div>

        <div className={styles.CreateTaskItem}>
          <MyButton className={'green-btn'} onClick={() => createTask()}>
            Create Task
          </MyButton>
        </div>
      </div>
    </div>
  )
}
