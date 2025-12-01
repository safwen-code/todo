import React from 'react'
import Typewriter from 'typewriter-effect'

import {
  Button,
  ListItemIcon,
  ListItemButton,
  Divider,
  ListItemText,
  ListItem,
  Typography,
  List,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Stack,
} from '@mui/material'

import { Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'
import { IconButton } from '@mui/material'
import MyInfo from './MyInfo'

const socialButtons = [
  { icon: <Facebook />, color: '#4267B2' },
  { icon: <Twitter />, color: '#1DA1F2' },
  { icon: <SportsBasketballIcon />, color: '#ea4c89' },
  { icon: <LinkedIn />, color: '#0077B5' },
]
const AboutMe = () => {
  const style = {
    width: '100%',
    bgcolor: '#2C3E50',
  }

  let styles = {
    fontFamily: 'DethronePoliceSerifModerne, serif',
    fontSize: '34px',
  }

  return (
    <Box sx={{ position: 'relative', paddingY: 7 }}>
      <Avatar
        sx={{
          width: 120,
          height: 120,
          position: 'absolute',
          top: -60,
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: 3,
          border: '4px solid #111',
        }}
      >
        'Avatar'
      </Avatar>
      <Box sx={{ zIndex: 1, margin: 2 }}>
        <List sx={style} component="div" aria-label="mailbox folders">
          {/* about text */}
          <ListItem
            sx={{
              color: '#DDDDDD',
              backgroundColor: ' rgba(0, 0, 0, 0.55)',
              border: '1px solid #1e1e1e',
              borderRadius: 3,
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
              },
            }}
          >
            <ListItemText
              sx={{
                color: '#5c6bc0',
                display: 'flex',
                justifyContent: 'center',
              }}
              primary={
                <Typography
                  variant="h1"
                  style={styles}
                  sx={{ color: '#E2DFD0' }}
                >
                  About me
                </Typography>
              }
            />
          </ListItem>
          <Divider sx={{ marginTop: '10px', borderColor: '#D74B76' }} />
          {/* jobs description */}
          <ListItem
            divider
            sx={{
              backgroundColor: ' rgba(0, 0, 0, 0.55)',
              border: '1px solid #1e1e1e',
              borderRadius: 3,
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
              },
              mt: 1,
              mb: 1,
            }}
          >
            <ListItemText
              sx={{
                color: '#E2DFD0',
                display: 'flex',
                justifyContent: 'center',
              }}
              style={{ fontFamily: 'cursive' }}
              primary={
                <Typewriter
                  options={{
                    strings: ['dev', 'prod', 'concepts'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              }
            />
          </ListItem>
          <Divider sx={{ borderColor: '#D74B76' }} />

          {/* Social Buttons */}
          <Stack
            direction="row"
            justifyContent="center"
            spacing={1}
            mb={2}
            mt={2}
          >
            {socialButtons.map((item, index) => (
              <IconButton
                key={index}
                sx={{
                  color: '#fff',
                  backgroundColor: item.color,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: `0 0 8px ${item.color}`,
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </List>
      </Box>
      {/* myInfo */}
      <MyInfo />
    </Box>
  )
}

export default AboutMe
