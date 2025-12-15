import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from './Reducer/profileReducer'

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
})

export default store
