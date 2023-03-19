import React from 'react'

import { MyButton } from '../UI/button/MyButton'
import { MyInput } from '../UI/input/MyInput'
import { Modal } from '../Modal'

import styles from './WorkWithTask.module.css'
import searchIc from './img/search-ic.svg'



export const WorkWithTask = () => {

  const [isOpen, setIsOpen] = React.useState(false)

  const toggleModel = () => setIsOpen(prev => !prev)

  return (
    <div className={styles.WorkWithTask}>

      <div className={styles.searchWrap}>
        <MyInput placeholder={'Search'}/>
        <img className={styles.searchIc} src={searchIc} alt='Search icon' />
      </div>

      <MyButton onClick={toggleModel} className={'green-btn'}>Create Task</MyButton>

      { isOpen && <Modal toggleModel={toggleModel} /> }

      {/* <Link to='/task-manage'>
        <MyButton className={'green-btn'}>task-manage</MyButton>
      </Link> */}

    </div>
  )
}
