import React, { Children } from 'react'
import { Modal, Backdrop, Box, Fade, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const CustumModal = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '600px',
            bgcolor: '#111',
            color: '#FFFFFF',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            outline: 'none',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '80vh', // Restrict the height of the modal
            overflowY: 'auto', // Add scrolling if content overflows
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: '#ff4b2b',
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {children}
        </Box>
      </Fade>
    </Modal>
  )
}

export default CustumModal
