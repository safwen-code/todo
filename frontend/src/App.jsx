import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@mui/material'
import MainContent from './components/MainContent'
import { Routes, Route } from 'react-router-dom'
import {
  prfAbout,
  prfdescription,
  prfprofpath,
  prfproject,
  prfskills,
} from './thunk/profile'
import { useEffect } from 'react'
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(prfAbout())
    dispatch(prfdescription())
    dispatch(prfprofpath())
    dispatch(prfproject())
    dispatch(prfskills())
  }, [dispatch])

  const {
    about,
    description,
    project,
    professionalpath,
    skills,
    loading,
    error,
  } = useSelector((state) => state.profile)
  console.log('about', about)
  console.log('description', description)
  console.log('project', project)
  console.log('professionalpath', professionalpath)
  console.log('skills', skills)
  console.log('loading', loading)
  console.log('error', error)

  return (
    <Container maxWidth="xl">
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
    </Container>
  )
}

export default App
