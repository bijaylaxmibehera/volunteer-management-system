import { configureStore } from '@reduxjs/toolkit';
import { volunteerSlice } from '../features/volunteer/volunteerSlice';
import { eventSlice } from '../features/event/eventSlice';

export const store = configureStore({
  reducer: {
    volunteers:volunteerSlice.reducer,
    events:eventSlice.reducer
  },
});
