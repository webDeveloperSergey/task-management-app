import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { MyButton } from '../UI/button/MyButton'
import { setSelectedStatus } from '../../redux/slices/tasksSlice'

import styles from './Statuses.module.css'

export const Statuses = () => {
  const dispatch = useDispatch()
  const statusCount = useSelector((state) => state.createTask.statusCount)
  const [statusType, setStatusType] = React.useState('')

  React.useEffect(() => {
    dispatch(setSelectedStatus(statusType))
  }, [statusType])

  return (
    <div className={styles.statusesWrap}>
      {Object.keys(statusCount)
        .filter((status) => status !== 'done')
        .map((status, index) => (
          <MyButton
            key={status + index}
            onClick={() => setStatusType(status)}
            className={
              statusType === status
                ? `${status.replace(/ /g, '')}Btn btn-vis`
                : `${status.replace(/ /g, '')}Btn`
            }
          >
            {status}
          </MyButton>
        ))}
    </div>
  )
}
