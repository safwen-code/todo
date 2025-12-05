import { Container } from '@mui/material'
import Description from './Content/Description/Description'
import EduExp from './Content/EduExp/EduExp'
import Skills from './Content/Skills/Skills'
import Project from './Content/project/Project'

const Containers = ({ activeNavItem }) => {
  console.log(activeNavItem)
  return (
    <Container>
      {activeNavItem === 'description' && <Description />}

      {activeNavItem === 'project' && <Project />}

      {activeNavItem === 'skills' && <EduExp />}

      {activeNavItem === 'SW.Skills' && <Skills />}
    </Container>
  )
}

export default Containers
