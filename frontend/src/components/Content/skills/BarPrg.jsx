import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import LinearProgress from '@mui/material/LinearProgress'
import { Typography, Grid, Chip, Box } from '@mui/material'

const lettetest = [
  'Postman',
  'VsCode',
  'DevExpress',
  'Jira',
  'Flux',
  'Git',
  'Graphql',
  'jwt',
  'MVVM',
  'Redux',
  'socket io',
]
const BarPrg = () => {
  const theme = useTheme()
  const [progress1, setProgress1] = useState(0)
  const [progress2, setProgress2] = useState(0)
  const [progress3, setProgress3] = useState(0)
  const [progress4, setProgress4] = useState(0)

  useEffect(() => {
    const timer1 = setInterval(() => {
      setProgress1((prevProgress) => {
        if (prevProgress >= 70) {
          clearInterval(timer1)
          return 70
        }
        return prevProgress + 1
      })
    }, 50)

    const timer2 = setInterval(() => {
      setProgress2((prevProgress) => {
        if (prevProgress >= 50) {
          clearInterval(timer2)
          return 50
        }
        return prevProgress + 1
      })
    }, 50)

    const timer3 = setInterval(() => {
      setProgress3((prevProgress) => {
        if (prevProgress >= 90) {
          clearInterval(timer3)
          return 90
        }
        return prevProgress + 1
      })
    }, 50)

    const timer4 = setInterval(() => {
      setProgress4((prevProgress) => {
        if (prevProgress >= 50) {
          clearInterval(timer4)
          return 50
        }
        return prevProgress + 1
      })
    }, 50)

    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
      clearInterval(timer3)
      clearInterval(timer4)
    }
  }, [])
  let skills = [
    { name: 'Php', progress: progress1 },
    { name: 'Node js', progress: progress2 },
    { name: 'C Sharp', progress: progress3 },
    { name: 'java', progress: progress4 },
  ]
  const linearColors = {
    Php: '#8892BF', // purple-ish
    'Node js': '#3C873A', // green
    'C Sharp': '#68217A', // violet
    java: '#f89820', // black
  }

  return (
    <Grid
      container
      spacing={4}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row', sm: 'column' },
        alignItems: 'flex-start',
      }}
    >
      {/* brogresseve bar */}
      <Grid item size={{ xs: 12, md: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {skills.map((skill, index) => {
            const color = linearColors[skill.name] || '#ff4b2b'

            return (
              <Grid
                container
                item
                alignItems="center"
                key={index}
                sx={{
                  flexWrap: 'nowrap',
                  [theme.breakpoints.down('sm')]: {
                    display: 'flex',
                    justifyContent: 'center',
                    marginLeft: '4px',
                    marginRight: '5px',
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: '#DDDDDD', minWidth: '80px' }}
                  mt={1}
                >
                  {skill.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={skill.progress}
                    sx={{
                      marginTop: 3,
                      marginBottom: 2,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: '#2e2e2e',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: color,
                        transition: 'box-shadow 0.3s ease-in-out',
                      },
                      '&:hover .MuiLinearProgress-bar': {
                        boxShadow: `0 0 8px ${color}`,
                      },
                      width: '100%',
                      [theme.breakpoints.down('md')]: {
                        width: '24rem',
                      },
                      [theme.breakpoints.down('sm')]: {
                        width: '9rem',
                      },
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  mt={1}
                  sx={{
                    color: '#DDDDDD',
                    marginLeft: 1,
                    minWidth: '40px',
                    textAlign: 'right',
                  }}
                >
                  {`${skill.progress}%`}
                </Typography>
              </Grid>
            )
          })}
        </Box>
      </Grid>

      {/* ships */}
      <Grid item size={{ xs: 12, md: 4 }} sx={{ mt: { xs: 2, md: 2 } }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            [theme.breakpoints.down('md')]: {
              mb: 4,
            },
            [theme.breakpoints.down('sm')]: {
              mb: 4,
            },
          }}
        >
          {lettetest &&
            lettetest.map((lett, index) => {
              return (
                <Chip
                  label={lett}
                  key={index}
                  variant="outlined"
                  color="secondary"
                />
              )
            })}
        </Box>
      </Grid>
    </Grid>
  )
}

export default BarPrg
