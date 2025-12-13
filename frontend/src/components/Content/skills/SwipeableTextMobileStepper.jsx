import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Box,
  MobileStepper,
  Paper,
  Typography,
  Grid,
  Card,
  useMediaQuery,
} from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import ang from '../../../image/ang.jpg'
import react from '../../../image/react.png'
import vue from '../../../image/vue.png'
import nodejs from '../../../image/nodejs.png'
import express from '../../../image/express.png'
import php from '../../../image/php.png'
import mongodb from '../../../image/mongodb.png'
import mysql from '../../../image/mysql.png'
import graph from '../../../image/graph.jpg'

const images = [
  {
    label: 'Framework I Use',
    imgPath: [ang, react, vue],
  },
  {
    label: 'Backend Environment I Use',
    imgPath: [nodejs, php, express],
  },
  {
    label: 'Database I Use',
    imgPath: [mongodb, mysql, graph],
  },
]

const imagesScroll = [
  { label: 'Frameworks', imgPath: react },
  { label: 'Environment', imgPath: nodejs },
  { label: 'Database', imgPath: mongodb },
]

const SwipeableTextMobileStepper = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [activeStep, setActiveStep] = useState(0)

  return (
    <Box sx={{ flexGrow: 1 }} m={1}>
      {/* Header */}
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
          borderRadius: '10px',
        }}
      >
        <Typography color="#E2DFD0" mx="auto">
          {!isMobile
            ? images[activeStep].label
            : imagesScroll[activeStep].label}
        </Typography>
      </Paper>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveStep(swiper.realIndex)}
        slidesPerView={1}
        loop
        style={{ marginTop: 16 }}
      >
        {!isMobile
          ? images.map((step, index) => (
              <SwiperSlide key={index}>
                <Grid
                  container
                  spacing={3}
                  mt={1}
                  mb={4}
                  justifyContent="center"
                >
                  {step.imgPath.map((img, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      <Card
                        sx={{
                          height: 120,
                          width: 160,
                          mx: 'auto',
                          background: `url(${img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </SwiperSlide>
            ))
          : imagesScroll.map((step, index) => (
              <SwiperSlide key={index}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  mt={1}
                  mb={4}
                >
                  <Card
                    sx={{
                      height: 100,
                      width: 100,
                      background: `url(${step.imgPath})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </Grid>
              </SwiperSlide>
            ))}
      </Swiper>

      {/* Stepper */}
      <Box display="flex" justifyContent="center" mt={2}>
        <MobileStepper
          steps={!isMobile ? images.length : imagesScroll.length}
          position="static"
          activeStep={activeStep}
          sx={{
            background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
            borderRadius: '10px',
          }}
        />
      </Box>
    </Box>
  )
}

export default SwipeableTextMobileStepper
