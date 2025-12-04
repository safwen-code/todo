import React from 'react'
import { Grid } from '@mui/material'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './skills.css'
import AnimatedProgressProvider from './AnimatedProgressProvider'

let softskill = [
  { name: 'html', count: 100 },
  { name: 'css', count: 60 },
  { name: 'js', count: 75 },
  { name: 'Dom', count: 70 },
  { name: 'react', count: 80 },
  { name: 'reactN', count: 60 },
  { name: 'vuejs', count: 60 },
  { name: 'angular', count: 50 },
]

const skillColors = {
  html: '#1E90FF', // blue
  css: '#2965f1', // CSS blue
  js: '#f0db4f', // yellow
  Dom: '#00cec9', // cyan
  react: '#61DBFB', // React cyan
  reactN: '#61DBFB',
  vuejs: '#42b883', // Vue green
  angular: '#dd0031', // Angular red
}

const CircularPrg = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {softskill.map((skill, index) => {
        const color = skillColors[skill.name.toLowerCase()] || '#ff4b2b' // fallback to coral

        return (
          <Grid
            key={index}
            item
            size={{
              xs: 6,
              sm: 4,
              md: 3,
              lg: 3,
            }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AnimatedProgressProvider values={[0, 20, 40, 50, skill.count]}>
              {(percentage) => (
                <div className="skill-card">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: color,
                      textColor: color,
                      trailColor: '#444',
                      pathTransitionDuration: 0.15,
                    })}
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              )}
            </AnimatedProgressProvider>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CircularPrg
