import { Container } from '@mui/material'
import MainContent from './components/MainContent'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Container maxWidth="xl">
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
    </Container>
  )
}

export default App
