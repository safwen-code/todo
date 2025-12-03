import React from 'react'
import {
  Typography,
  Divider,
  Grid,
  Card,
  IconButton,
  CardContent,
  CardActions,
  CardMedia,
  Box,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

const Project = () => {
  const projects = [
    { title: 'hi', image: 'hi', description: 'description', likes: 4 },
    { title: 'hi', image: 'hi', description: 'description', likes: 4 },
    { title: 'hi', image: 'hi', description: 'description', likes: 4 },
  ]
  return (
    <>
      {/* title  */}
      <Box display="flex" alignItems="center" m={2}>
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          sx={{
            borderLeft: '4px solid #ff007f',
            pl: 2,
            fontSize: { xs: '1.8rem', md: '2.4rem' },
          }}
        >
          Intro
        </Typography>
        <Box
          sx={{
            height: 2,
            flexGrow: 1,
            backgroundColor: '#ff007f',
            ml: 2,
          }}
        />
      </Box>
      {/* description content */}
      <Typography
        variant="subtitle1"
        component="h3"
        align="left"
        ml={5}
        mt={1}
        sx={{ color: '#B4B4B8' }}
      >
        projectDescription
      </Typography>
      {/* title view */}
      <Typography
        variant="h3"
        component="h3"
        align="left"
        m={4}
        mb={2}
        sx={{ color: '#DDDDDD' }}
      >
        Project I Done
      </Typography>
      <Divider sx={{ border: '1px solid #ff007f', margin: '10px' }} />
      {/* project card */}
      <Grid container spacing={4} rowSpacing={1} mt={1}>
        {projects.map((project, index) => (
          <Grid item size={{ xs: 12, sm: 6 }} key={index}>
            <Card
              sx={{
                height: 170,
                maxWidth: 345,
                margin: 'auto',
                opacity: '0.9',
                display: 'flex',
                padding: 2,
                backgroundColor: '#1e1e1e',
                border: '1px solid #ffffff33',
                borderRadius: 3,
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 100, height: 70 }}
                image={project.image || 'https://via.placeholder.com/100x70'} // Fallback image
                alt={project.title}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ color: '#DDDDDD', fontWeight: 400 }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    color: '#B4B4B8',
                  }}
                >
                  {project.description || 'No description available.'}
                </Typography>
                <CardActions
                  disableSpacing
                  sx={{
                    justifyContent: 'flex-end',
                    mt: 1,
                    gap: 1.5,
                  }}
                >
                  {/* Like Button */}
                  <IconButton
                    aria-label="add to favorites"
                    sx={{
                      color: '#D80032',
                      transition: 'transform 0.2s ease, color 0.2s ease',
                      '&:hover': {
                        color: '#ff4b2b',
                        transform: 'scale(1.2)',
                        backgroundColor: '#ffffff10',
                      },
                    }}
                  >
                    <FavoriteIcon />
                    <Typography
                      variant="caption"
                      sx={{ ml: 0.5, fontWeight: 500, color: 'inherit' }}
                    >
                      {project.likes.length}
                    </Typography>
                  </IconButton>

                  {/* Share Button */}
                  <IconButton
                    aria-label="share"
                    sx={{
                      color: 'whitesmoke',
                      transition: 'transform 0.2s ease, color 0.2s ease',
                      '&:hover': {
                        color: '#00BFFF',
                        transform: 'rotate(10deg) scale(1.1)',
                        backgroundColor: '#ffffff10',
                      },
                    }}
                  >
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Project
