import React from 'react'
import { Divider, Typography } from '@mui/material'

import CircularPrg from './CircularPrg'
import BarPrg from './BarPrg'
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'

const Skills = () => {
  return (
    <>
      {/* CircularProgressbar fixed */}
      <CircularPrg />
      <Divider sx={{ borderColor: '#D74B76' }} />

      {/* pogrsseve bar fixed */}
      <BarPrg />

      <Divider sx={{ borderColor: '#D74B76' }} />

      {/* swip progress */}
      <SwipeableTextMobileStepper />
    </>
  )
}

export default Skills
