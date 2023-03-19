import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  tasks: [],

  statusCount: {
    'active': 0,
    'in progress': 0,
    'urgent': 0,
    'done': 0,
  },

  selectedStatus: '',
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    creaTask: (state, action) => {
      state.tasks = action.payload
    },

    setSelectedStatus: (state, action) => {
      state.selectedStatus = action.payload
    },

    updStatusCount: (state, action) => {
      state.statusCount = action.payload
    },

  },
})


export const { creaTask, setSelectedStatus, updStatusCount } = tasksSlice.actions

export default tasksSlice.reducer