import React, { useState } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Modal,
  IconButton,
  Chip,
  List,
  ListItem,
  Button,
  ListItemText,
  Backdrop,
  Fade,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SchoolIcon from '@mui/icons-material/School'
import CustumModal from './CustumModal'

const EduStep = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedEducation, setSelectedEducation] = useState(null)
  const education = [
    {
      company: 'Gomaycode',
      date: '07-10-2019 / 10-01-2020',
      titleformation: 'Formation Développeur Web-Full Stack (MERN)',
      workFor: [
        'Maîtrise des technologies MongoDB, Express.js, React, Node.js (MERN)',
        ' Mise en œuvre de projets pratiques, tels que des applications e-commerce, des blogs interactifs',
        "Création et gestion de bases de données NoSQL avec MongoDB, Conception d'API RESTful et intégration backend avec Node.js et Express.js",
        "Développement frontend interactif avec React.js, incluant hooks, context API et gestion de l'état",
        'Experience of version management with Git and deployment in cloud platforms like Heroku or Netlify',
      ],
    },
    {
      company: 'Téchnicien Supérieur En Informatique',
      date: '03-10-2017',
      titleformation: 'Développeur du Systéme Informatique',
      workFor: [
        "Formation complète en concepts fondamentaux de l'informatique, incluant la programmation, les algorithmes, les systèmes d'information et les réseaux",
        'Développement des compétences en analyse et résolution de problèmes techniques',
        'Réalisation de projets académiques, mettant en pratique des langages comme C++, Java, ou Javascript',
      ],
    },
    {
      company: 'Baccalaureate informatique',
      date: 'October 2013, 2014',
    },
  ]
  const handleOpenModal = (edu) => {
    if (edu.workFor && edu.workFor.length > 0) {
      setSelectedEducation(edu)
      setOpenModal(true)
    }
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedEducation(null)
  }

  return (
    <Box>
      {/* Title Typography centered above the cards */}
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
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          color="#ff4b2b"
        >
          <SchoolIcon sx={{ mr: 1 }} />
          Education
        </Typography>
      </Box>

      {/* Render Education as Cards in Column */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          px: { xs: 2, sm: 4 }, // Padding for better spacing on mobile
        }}
      >
        {education.map((edu, index) => (
          <Card
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
            key={index}
          >
            <CardActionArea onClick={() => handleOpenModal(edu)}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {edu.company}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {edu.titleformation}
                </Typography>
                {edu.date && (
                  <Chip
                    label={edu.date}
                    sx={{
                      background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
                      color: '#DDDDDD',
                      mt: 1,
                    }}
                  />
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      {/* modal traitement */}
      <CustumModal open={openModal} handleClose={handleCloseModal}>
        {selectedEducation && (
          <>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              {selectedEducation.company}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 'bold' }}>
              {selectedEducation.titleformation}
            </Typography>
            <Chip
              label={selectedEducation.date}
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
              {selectedEducation.workFor &&
                selectedEducation.workFor.map((detail, index) => (
                  <ListItem key={index} sx={{ color: '#ECF0F1' }}>
                    <ListItemText primary={`${index + 1}. ${detail}`} />
                  </ListItem>
                ))}
            </List>
            <Button
              onClick={handleCloseModal}
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

export default EduStep
