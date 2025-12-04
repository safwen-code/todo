import React from 'react'
import { Divider, Typography } from '@mui/material'

import CircularPrg from './CircularPrg'

const Skills = () => {
  return (
    <>
      {/* CircularProgressbar fixed */}
      <CircularPrg />
      <Divider sx={{ borderColor: '#D74B76' }} />

      {/* pogrsseve bar fixed */}
      <Typography>progresseve bar</Typography>
    </>
  )
}

export default Skills
