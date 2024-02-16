import { configureStore } from '@reduxjs/toolkit';
import { volunteerSlice } from '../features/volunteer/volunteerSlice';

export const store = configureStore({
  reducer: {
    volunteers:volunteerSlice.reducer
  },
});
