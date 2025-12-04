import React, { useState } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  Chip,
  Button,
} from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'
import CustumModal from './CustumModal'

const WorkStep = () => {
  const [open, setOpen] = useState(false)
  const [selectedWork, setSelectedWork] = useState(null)

  const experiences = [
    {
      company: 'BQube ITS',
      dates: '29-03-22 / 03-04-24',
      role: 'Développeur Full Stack',
      details: [
        'Participation au développement de CRM et CMS solutions, adapté aux besoins des clients.',
        "Conception et création d'un système MES dédié à la gestion et au suivi de la production :",
        '1. Surveillance et suivi de la production en temps réel.',
        '2. Automatisation de la génération de tickets pour les emballages et palettes.',
        '3. Analyse des rebuts, suivi des PPM (parties par million), analyse de Pareto et capacités de production.',
        '4. Garantie de la qualité fournisseur et client.',
        'Technologies utilisées : Frontend (HTML, SASS, JavaScript, React), Backend (PHP, Node.js, PostgreSQL).',
      ],
    },
    {
      company: 'TIMELEC',
      dates: '10-02-2020 / 27-11-21',
      role: 'Opérateur Machine',
      details: [
        '1. Opérateur du Montage Timelec. Vérification du produit.',
        '2. Assemblage du produit en utilisant le système FT bios.',
        "3. Identification et gestion des QRQS en cas d'erreur.",
        '4. Enregistrement des données sur la plateforme TRS.',
        "5. Utilisation de la méthodologie LEAN pour accroître l'efficacité de l'équipe.",
      ],
    },
  ]

  const handleOpen = (work) => {
    setSelectedWork(work)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedWork(null)
  }

  return (
    <Box>
      {/* title */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          color="#ff4b2b"
        >
          <WorkIcon sx={{ mr: 1 }} /> Experiences
        </Typography>
      </Box>

      {/* the card part */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          px: { xs: 2, sm: 4 },
        }}
      >
        {experiences.map((exp, index) => (
          <Card
            key={index}
            sx={{
              color: '#DDDDDD',
              backgroundColor: '#1e1e1e',
              border: '1px solid #ffffff33',
              borderRadius: 3,
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
              },
            }}
            onClick={() => handleOpen(exp)}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {exp.company}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {exp.role}
              </Typography>
              <Chip
                label={exp.dates}
                sx={{
                  background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
                  color: '#DDDDDD',
                  mt: 1,
                }}
              />
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Modal for detailed view */}
      <CustumModal open={open} handleClose={handleClose}>
        {selectedWork && (
          <>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              {selectedWork.company}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {selectedWork.role}
            </Typography>
            <Chip
              label={selectedWork.dates}
              sx={{
                bgcolor: '#ff4b2b',
                color: '#FFFFFF',
                mt: 1,
              }}
            />
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
              {selectedWork.details.map((detail, index) => (
                <ListItem
                  key={index}
                  sx={{ padding: '0.5rem 0', color: '#ECF0F1' }}
                >
                  {detail}
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
    </Box>
  )
}

export default WorkStep
