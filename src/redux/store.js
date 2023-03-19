import { configureStore } from '@reduxjs/toolkit'

import createTask from './slices/tasksSlice'


export const store = configureStore({
  reducer: {
    createTask,
  },
})