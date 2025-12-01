import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Menu,
  Button,
  Container,
  MenuItem,
  Avatar,
  Typography,
  Grid,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import DescriptionIcon from '@mui/icons-material/Description'
import WorkIcon from '@mui/icons-material/Work'
import BuildIcon from '@mui/icons-material/Build'
import ComputerIcon from '@mui/icons-material/Computer'
import ContactMailIcon from '@mui/icons-material/ContactMail'

const pages = [
  { name: 'description', icon: <DescriptionIcon /> },
  { name: 'project', icon: <WorkIcon /> },
  { name: 'skills', icon: <BuildIcon /> },
  { name: 'SW.Skills', icon: <ComputerIcon /> },
  { name: 'contact', icon: <ContactMailIcon /> },
]

const Navbar = ({ activeNavItem, setActiveNavItem, isMobile }) => {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null)
    setActiveNavItem(page)
  }

  return (
    <Box
      mt={2}
      style={{ position: 'sticky', top: 0, zIndex: 999, margin: '40px' }}
    >
      <AppBar
        position="static"
        sx={{ borderRadius: 2, bgcolor: '#111', color: 'white' }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Mobile Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: isMobile ? 'flex' : 'none',
              }}
            >
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: '#111', // Set background for the floating menu
                    borderRadius: 2,
                    boxShadow: '0px 8px 20px rgba(0,0,0,0.4)',
                    color: 'white',
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => handleCloseNavMenu(page.name)}
                    sx={{
                      mb: 1,
                      borderRadius: 2,
                      background:
                        activeNavItem === page.name
                          ? 'linear-gradient(to right, #ff416c, #ff4b2b)'
                          : 'transparent',
                      color: activeNavItem === page.name ? 'white' : 'gray',
                      boxShadow:
                        activeNavItem === page.name
                          ? '0 4px 15px rgba(255, 75, 43, 0.4)'
                          : 'none',
                    }}
                  >
                    {page.icon}
                    <Typography textAlign="center" sx={{ ml: 1 }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo for mobile */}
            <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              DJEBBI
            </Typography>

            {/* Desktop Buttons */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
              }}
            >
              <Grid container spacing={2} justifyContent="center">
                {pages.map((page) => (
                  <Grid item key={page.name}>
                    <Button
                      onClick={() => setActiveNavItem(page.name)}
                      startIcon={page.icon}
                      sx={{
                        color: 'white',
                        textTransform: 'capitalize',
                        background:
                          activeNavItem === page.name
                            ? 'linear-gradient(to right, #ff416c, #ff4b2b)'
                            : 'transparent',
                        borderRadius: 2,
                        boxShadow:
                          activeNavItem === page.name
                            ? '0 4px 15px rgba(255, 75, 43, 0.4)'
                            : 'none',
                        border:
                          activeNavItem === page.name
                            ? '2px solid #FFF'
                            : 'none',
                        '&:hover': {
                          background:
                            activeNavItem === page.name
                              ? 'linear-gradient(to right, #ff416c, #ff4b2b)'
                              : '#34495E',
                          boxShadow:
                            activeNavItem === page.name
                              ? '0 6px 20px rgba(255, 75, 43, 0.5)'
                              : 'none',
                        },
                      }}
                    >
                      {page.name}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Navbar
