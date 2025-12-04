import React, { useState } from 'react'
import {
  Chip,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  List,
  ListItem,
  ListSubheader,
  Typography,
  Box,
  Button,
  Modal,
  Backdrop,
  Fade,
  IconButton,
} from '@mui/material'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import CloseIcon from '@mui/icons-material/Close'
import CustumModal from './CustumModal'

// Data
const internship = [
  {
    company: 'Network Expertise Tunisia',
    date: '09-05-14 01-06-14',
    titleformation: 'Stage d Initiation',
    workFor: [
      'Participer à la conception et au développement d’applications informatiques en utilisant des technologies adaptées.',
      "Contribution à l'identification et à la résolution de problèmes techniques pour améliorer la performance des systèmes.",
      'Rédaction de rapports techniques et documentation des processus pour assurer un suivi et une amélioration continue des projets.',
    ],
  },
  {
    company: 'Intercom Technologie',
    date: '01-08-17 / 31-08-17',
    titleformation: 'Développeur Web',
    workFor: [
      "Développement d'un système de gestion des ressources humaines, incluant la gestion des équipes (Comsis).",
      "Mise en place d'un système de notifications par email pour informer les utilisateurs des statuts ANFR.",
      'Optimisation des processus internes via des solutions web adaptées aux besoins opérationnels.',
    ],
  },
]

const StageStep = () => {
  const [open, setOpen] = useState(false)
  const [selectedInternship, setSelectedInternship] = useState(null)

  const handleOpen = (internship) => {
    setSelectedInternship(internship)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedInternship(null)
  }

  return (
    <>
      {/* stage stepper  */}
      <Box sx={{ margin: '0 auto', maxWidth: '600px', padding: '1rem' }}>
        <Stepper orientation="vertical">
          {internship.map((item, index) => (
            <Step key={index} active={1}>
              <StepLabel
                StepIconComponent={WorkOutlineOutlinedIcon}
                sx={{ color: '#ff4b2b' }}
              >
                <Typography component="span" sx={{ color: '#FFFFFF' }}>
                  {item.company}
                </Typography>
                <Chip
                  label={item.date}
                  sx={{
                    bgcolor: '#ff4b2b',
                    color: '#FFFFFF',
                    marginLeft: '8px',
                  }}
                />
              </StepLabel>
              <StepContent>
                <List
                  subheader={
                    <ListSubheader
                      component="div"
                      sx={{
                        color: '#DDDDDD',
                        backgroundColor: '#1e1e1e',
                        border: '1px solid #ffffff33',
                        borderRadius: 2,
                        transition: '0.3s',
                        mb: 1,
                      }}
                    >
                      {item.titleformation}
                    </ListSubheader>
                  }
                >
                  {item.workFor.slice(0, 2).map((work, workIndex) => (
                    <ListItem key={workIndex} sx={{ padding: '0.5rem 0' }}>
                      {work}
                    </ListItem>
                  ))}
                  {item.workFor.length > 2 && (
                    <Button
                      variant="outlined"
                      onClick={() => handleOpen(item)}
                      sx={{
                        mt: 1,
                        color: '#ff4b2b',
                        borderColor: '#ff4b2b',
                        '&:hover': {
                          borderColor: '#e04326',
                          backgroundColor: 'rgba(255, 75, 43, 0.08)',
                        },
                      }}
                    >
                      Voir plus
                    </Button>
                  )}
                </List>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Modal */}
      <CustumModal open={open} handleClose={handleClose}>
        {selectedInternship && (
          <>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}
            >
              {selectedInternship.company}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
              {selectedInternship.titleformation}
            </Typography>
            <List
              sx={{
                mt: 3,
                backgroundColor: '#1e1e1e',
                border: '1px solid #ffffff33',
                borderRadius: 3,
                padding: '10px',
                mb: 1,
              }}
            >
              {selectedInternship.workFor.map((work, index) => (
                <ListItem key={index} sx={{ padding: '0.5rem 0' }}>
                  {work}
                </ListItem>
              ))}
            </List>
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{
                mt: 2,
                display: 'block',
                margin: '0 auto',
                bgcolor: '#ff4b2b',
                color: '#fff',
                boxShadow: '0 4px 15px rgba(255, 75, 43, 0.5)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#e04326',
                  boxShadow: '0 6px 20px rgba(255, 75, 43, 0.6)',
                },
                '&:active': {
                  boxShadow: '0 3px 10px rgba(255, 75, 43, 0.4)',
                },
              }}
            >
              Close
            </Button>
          </>
        )}
      </CustumModal>
    </>
  )
}

export default StageStep
