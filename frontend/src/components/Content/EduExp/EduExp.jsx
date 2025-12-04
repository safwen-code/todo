import React from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material'
import WorkStep from './WorkStep'
import EduStep from './EduStep'
const EduExp = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ m: 4 }}>
          Resume
        </Typography>
        <Divider sx={{ bgcolor: '#ff007f', height: 3, width: 250, mb: 4 }} />
      </Box>
      <Grid container spacing={2}>
        {' '}
        <Grid item size={{ xs: 12, sm: 6 }}>
          <WorkStep />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <EduStep />
        </Grid>
      </Grid>
    </>
  )
}

export default EduExp
