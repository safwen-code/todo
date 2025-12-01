import React from 'react'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import { Email, Phone, LocationOn, Cake } from '@mui/icons-material'

const MyInfo = () => {
  return (
    <List
      sx={{
        borderColor: '#2C3E50',
        marginTop: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        border: '1px solid #1e1e1e',
        borderRadius: 3,
        transition: '0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
        },
      }}
    >
      {/* PHONE */}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Phone
              sx={{
                color: '#ff4081',
                mx: 1,
              }}
            />
          </ListItemIcon>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: '#D74B76', mr: 2 }}
          />

          <ListItemText primary="+216 2 706 437" sx={{ color: '#DDDDDD' }} />
        </ListItemButton>
      </ListItem>

      {/* EMAIL */}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Email sx={{ mx: 1, color: '#f06292' }} />
          </ListItemIcon>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: '#D74B76', mr: 2 }}
          />

          <ListItemText
            primary="todo@gmail.com"
            sx={{
              color: '#DDDDDD',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minWidth: 0,
            }}
          />
        </ListItemButton>
      </ListItem>

      {/* LOCATION */}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LocationOn sx={{ mx: 1, color: '#00e676' }} />
          </ListItemIcon>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: '#D74B76', mr: 2 }}
          />

          <ListItemText primary="Ben Arous Nassen" sx={{ color: '#DDDDDD' }} />
        </ListItemButton>
      </ListItem>

      {/* BIRTHDAY */}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Cake sx={{ ml: 1, color: '#9575cd' }} />
          </ListItemIcon>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: '#D74B76', mr: 2 }}
          />

          <ListItemText primary="20/08/1995" sx={{ color: '#DDDDDD' }} />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default MyInfo
