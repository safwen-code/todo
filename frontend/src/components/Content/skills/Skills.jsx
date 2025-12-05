import React from 'react'
import { Divider, Typography } from '@mui/material'

import CircularPrg from './CircularPrg'
import BarPrg from './BarPrg'

const Skills = () => {
  return (
    <>
      {/* CircularProgressbar fixed */}
      <CircularPrg />
      <Divider sx={{ borderColor: '#D74B76' }} />

      {/* pogrsseve bar fixed */}
      <BarPrg />
    </>
  )
}

export default Skills
