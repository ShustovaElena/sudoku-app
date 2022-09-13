import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LevelState {
  value: string,
}

const initialState: LevelState = {
  value: 'easy',
}

export const levelSlice = createSlice({
  name: 'level',
  initialState,
  reducers: {
    setLevel: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setLevel } = levelSlice.actions;

export default levelSlice.reducer;