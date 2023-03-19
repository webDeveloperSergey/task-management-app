import React, { Children } from 'react'

import styles from './MyTextarea.module.css'

export const Textarea = (props) => {
  return (
    <textarea className={styles.myTextarea} name='text' {...props}/>
  )
}
