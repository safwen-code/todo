import Description from './Content/Description/Description'
import EduExp from './Content/EduExp/EduExp'
import Skills from './Content/Skills/Skills'
import Project from './Content/Project/Project'
const Containers = ({ activeNavItem }) => {
  console.log(activeNavItem)
  return (
    <>
      {activeNavItem === 'description' && <Description />}

      {activeNavItem === 'project' && <Project />}

      {activeNavItem === 'skills' && <EduExp />}

      {activeNavItem === 'SW.Skills' && <Skills />}
    </>
  )
}

export default Containers
