import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  volunteers: [],
  status: 'idle',
  error: null
}

export const fetchVolunteers = createAsyncThunk(
  'volunteers/fetchVolunteers',
  async () => {
    const response = await axios.get(
      'https://00f2f813-ae16-475f-a9c4-96e475463e67-00-23sy3odetpv0i.pike.replit.dev/api/v1/volunteers'
    )

    return response.data.volunteers
  }
)

export const addVolunteerAsync = createAsyncThunk(
  'volunteers/addVolunteerAsync',
  async newVolunteer => {
    const response = await axios.post(
      'https://00f2f813-ae16-475f-a9c4-96e475463e67-00-23sy3odetpv0i.pike.replit.dev/api/v1/volunteers',
      newVolunteer
    )

    return response.data.volunteer
  }
)

export const updateVolunteerAsync = createAsyncThunk(
  'voluteers/updateVolunteerAsync',
  async ({id, updatedVolunteer}) => {
    const response = await axios.put(
      `https://00f2f813-ae16-475f-a9c4-96e475463e67-00-23sy3odetpv0i.pike.replit.dev/api/v1/volunteers/${id}`,
      updatedVolunteer
    )
   
    return response.data.volunteer
  }
)

export const deleteVolunteerAsync = createAsyncThunk(
  'volunteers/deleteVolunteerAsync',
  async id => {
    const response = await axios.delete(
      `https://00f2f813-ae16-475f-a9c4-96e475463e67-00-23sy3odetpv0i.pike.replit.dev/api/v1/volunteers/${id}`
    )

    return response.data.volunteer
  }
)

export const volunteerSlice = createSlice({
  name: 'volunteers',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchVolunteers.pending]: state => {
      state.status = 'loading'
    },
    [fetchVolunteers.fulfilled]: (state, action) => {
      state.status = 'success'
      state.volunteers = action.payload
    },
    [fetchVolunteers.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [addVolunteerAsync.pending]: state => {
      state.status = 'loading'
    },
    [addVolunteerAsync.fulfilled]: (state, action) => {
      state.status = 'success'
      state.volunteers.push(action.payload)
    },
    [addVolunteerAsync.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [updateVolunteerAsync.pending]: state => {
      state.status = 'loading'
    },
    [updateVolunteerAsync.fulfilled]: (state, action) => {
      state.status = 'success'
      const updatedVolunteer = action.payload
      const index = state.volunteers.findIndex(
        volunteer => volunteer._id === updatedVolunteer._id
      )
      if (index !== -1) {
        state.volunteers[index] = updatedVolunteer
      }
    },
    [updateVolunteerAsync.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [deleteVolunteerAsync.pending]: state => {
      state.status = 'loading'
    },
    [deleteVolunteerAsync.fulfilled]: (state, action) => {
      state.status = 'success'
      state.volunteers = state.volunteers.filter(
        volunteer => volunteer._id !== action.payload.id
      )
    },
    [deleteVolunteerAsync.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    }
  }
})

export default volunteerSlice.reducer
