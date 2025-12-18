import { profile } from '../utils/data'
import { createAsyncThunk } from '@reduxjs/toolkit'

//about
export const prfAbout = createAsyncThunk('/profile/fetchAbout', async () => {
  return profile.about
})
//description
export const prfdescription = createAsyncThunk(
  '/profile/fetchDescription',
  async () => {
    return profile.description
  },
)
//project
export const prfproject = createAsyncThunk(
  '/profile/fetchProject',
  async () => {
    return profile.project
  },
)
//profesionnal path
export const prfprofpath = createAsyncThunk('/profile/fetchProf', async () => {
  return profile.professionalpath
})
//skills
export const prfskills = createAsyncThunk('/profile/fetchSkills', async () => {
  return profile.skills
})
