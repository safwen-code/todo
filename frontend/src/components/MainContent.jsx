import React from 'react'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

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

  return (
    <Container fixed>
      {/* Display Navbar on mobile */}
      {isMobile && <Typography>Navbar Traitemnt</Typography>}
      <Box sx={{ flexGrow: 1 }} p={2} mt={2}>
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={4} mt={6}>
            <Item sx={{ bgcolor: '#2C3E50', color: 'white' }}>
              <Typography>About Me</Typography>
            </Item>
          </Grid>

          {/* Right Column */}
          <Grid
            item
            xs={12}
            md={8}
            sx={
              {
                //   height: activeNavItem === 'contact' ? '35rem' : 'auto',
              }
            }
          >
            {/* Navbar for larger screens */}
            {!isMobile && (
              <Item sx={{ mb: 2, bgcolor: '#2C3E50', color: 'white' }}>
                <Typography>Navbar Traitement</Typography>
              </Item>
            )}

            {/* Main Content */}
            <Item sx={{ bgcolor: '#111', color: 'white' }}>
              <Typography>Containers Traitement</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default MainContent
