import { createSlice } from '@reduxjs/toolkit'
import {
  prfAbout,
  prfdescription,
  prfproject,
  prfprofpath,
  prfskills,
} from '../thunk/profile'

const initialState = {
  about: {},
  description: {},
  project: '',
  professionalpath: '',
  skills: '',
  loading: true,
  error: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //about
      .addCase(prfAbout.pending, (state) => {
        state.loading = true
      })
      .addCase(prfAbout.fulfilled, (state, action) => {
        state.loading = false
        state.about = action.payload
      })
      .addCase(prfAbout.rejected, (state, action) => {
        state.loading = true
        state.error = action.error.message
      })
      //description
      .addCase(prfdescription.fulfilled, (state, action) => {
        state.description = action.payload
      })
      //project
      .addCase(prfproject.fulfilled, (state, action) => {
        state.project = action.payload
      })
      //prof path
      .addCase(prfprofpath.fulfilled, (state, action) => {
        state.professionalpath = action.payload
      })
      //skills
      .addCase(prfskills.fulfilled, (state, action) => {
        state.skills = action.payload
      })
  },
})

export const profileReducer = profileSlice.reducer
