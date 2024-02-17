import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  events: [],
  status: 'idle',
  error: null
}

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await axios.get(
    'https://00f2f813-ae16-475f-a9c4-96e475463e67-00-23sy3odetpv0i.pike.replit.dev/api/v1/events'
  )

  return response.data.events
})

export const addEventAsync = createAsyncThunk(
  'events/addEventAsync',
  async newEvent => {
    const response = await axios.post(
      'https://00f2f813-ae16-475f-a9c4-96e475463e67-00-23sy3odetpv0i.pike.replit.dev/api/v1/events',
      newEvent
    )

    return response.data.event
  }
)

export const updateEventsAsync = createAsyncThunk(
  'events/updateEventsAsync',
  async ({id, updatedEvent}) => {
    const response = await axios.put(
      `https://00f2f813-ae16-475f-a9c4-96e475463e67-00-23sy3odetpv0i.pike.replit.dev/api/v1/events/${id}`,
      updatedEvent
    )

    return response.data.event
  }
)

export const deleteEventAsync = createAsyncThunk(
  'events/deleteEventAsync',
  async id => {
    const response = await axios.delete(
      `https://00f2f813-ae16-475f-a9c4-96e475463e67-00-23sy3odetpv0i.pike.replit.dev/api/v1/events/${id}`
    )

    return response.data.event
  }
)

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEvents.pending]: state => {
      state.status = 'loading'
    },
    [fetchEvents.fulfilled]: (state, action) => {
      state.status = 'success'
      state.events = action.payload
    },
    [fetchEvents.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [addEventAsync.pending]: state => {
      state.status = 'loading'
    },
    [addEventAsync.fulfilled]: (state, action) => {
      state.status = 'success'
      state.events.push(action.payload)
    },
    [addEventAsync.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [updateEventsAsync.pending]: state => {
      state.status = 'loading'
    },
    [updateEventsAsync.fulfilled]: (state, action) => {
      state.status = 'success'
      const updatedEvent = action.payload
      const index = state.events.findIndex(
        event => event._id === updatedEvent._id
      )
      if (index !== -1) {
        state.events[index] = updatedEvent
      }
    },
    [updateEventsAsync.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [deleteEventAsync.pending]: state => {
      state.status = 'loading'
    },
    [deleteEventAsync.fulfilled]: (state, action) => {
      state.status = 'success'
      state.events = state.events.filter(
        event => event._id !== action.payload.id
      )
    },
    [deleteEventAsync.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    }
  }
})
