import React from 'react'

import { StatusList } from '../components/StatusList'
import { StatisticList } from '../components/StatisticList'

import { TaskList } from '../components/TaskList/TaskList'

import { WorkWithTask } from '../components/WorkWithTask'

function HomePage() {
  return (
    <div className='HomePage'>
      <div className='main-content'>
        <WorkWithTask />
        <StatisticList />
        <StatusList />
        <TaskList />
      </div>
    </div>
  )
}

export default HomePage
