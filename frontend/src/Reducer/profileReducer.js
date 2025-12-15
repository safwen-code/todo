import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // ===== Requests =====
    startLoading(state) {
      state.loading = true
      state.error = null
    },

    // ===== Error =====
    setError(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { startLoading, setError } = profileSlice.actions

console.log(profileSlice)
export const profileReducer = profileSlice.reducer
