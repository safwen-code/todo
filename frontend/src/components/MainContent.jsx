import React from 'react'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import AboutMe from './Content/About/AboutMe'
import { useState } from 'react'
import Navbar from './Content/Layout/Navbar'
import Containers from './Containers'

// Define styled Item component
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '25px',
}))

const MainContent = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md')) // Mobile detection
  const [activeNavItem, setActiveNavItem] = useState('description')

  return (
    <Container fixed>
      {/* Display Navbar on mobile */}
      <Navbar
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        isMobile={isMobile} // pass screen info
      />
      <Box sx={{ flexGrow: 1 }} p={2} mt={2}>
        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Item sx={{ bgcolor: '#2C3E50', color: 'white' }}>
              <AboutMe />
            </Item>
          </Grid>

          {/* Right Column */}
          <Grid
            item
            size={{ xs: 12, md: 8 }}
            sx={
              {
                //   height: activeNavItem === 'contact' ? '35rem' : 'auto',
              }
            }
          >
            {/* Navbar for larger screens */}
            {/* {!isMobile && (
              <Navbar
                activeNavItem={activeNavItem}
                setActiveNavItem={setActiveNavItem}
              />
            )} */}

            {/* Main Content */}
            <Item sx={{ bgcolor: '#111', color: 'white', mt: 3 }}>
              <Containers activeNavItem={activeNavItem} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default MainContent
