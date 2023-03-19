import React from 'react'

import styles from './MyButtun.module.css'


export const MyButton = ({children, ...props}) => {

  // const typeBtn = props.className ? props.className : ''
  let classBtn
  
  props.className 
    ?classBtn = `${props.className} ${styles.btn}` 
    :classBtn = `${styles.btn}`


 

  
  return (
    <button {...props} className={classBtn}>{children}</button>
  )
}
