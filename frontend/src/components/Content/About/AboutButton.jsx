import React from 'react'
import {
  Box,
  Button,
  ListItemIcon,
  ListItemButton,
  Menu,
  MenuItem,
} from '@mui/material'
import WordIcon from '@mui/icons-material/Description'
import PDFIcon from '@mui/icons-material/PictureAsPdf'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

const AboutButton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <Button
        variant="contained"
        sx={{
          background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 'bold',
          '&:hover': {
            boxShadow: '0 0 12px #ff416c',
          },
        }}
        endIcon={<CloudDownloadIcon />}
      >
        Télécharger CV
      </Button>
    </Box>
  )
}

export default AboutButton
