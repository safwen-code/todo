import React, { useRef, useState } from 'react'
import { Alert, Divider, Grid, Button, Typography, Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: '#5AB2FF',
}))

const Contact = () => {
  const formRef = useRef()

  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    message: '',
  })
  // const [errorField, seterrorField] = useState(false)
  // const [alertVisible, setAlertVisible] = useState(false)

  // const { name, email, message } = formdata
  const ChangeHundel = (e) => {
    const { name, value } = e.target
    setformdata({ ...formdata, [name]: value })
  }

  const submitHundel = (e) => {
    e.preventDefault()
    console.log('hi')
    console.log(formdata)
  }

  return (
    <Box
      sx={{
        bgcolor: '#121212',
        color: '#fff',
        p: { xs: 2, sm: 4, md: 6 },
        borderRadius: 3,
        maxWidth: '900px',
        mx: 'auto',
      }}
    >
      {/* contact typo */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ m: 2 }}>
          Contact
        </Typography>
        <Divider sx={{ bgcolor: '#ff007f', height: 3, width: 300, mb: 4 }} />
      </Box>
      {/* email and adress info */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              bgcolor: '#1e1e1e',
              p: 2,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Box display="flex" alignItems="center" gap={1} color="whitesmoke">
              <PhoneIcon />
              <Typography variant="subtitle1" fontWeight="bold">
                Phone :
              </Typography>
            </Box>
            <Typography color="whitesmoke">+452 666 386</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              bgcolor: '#1e1e1e',
              p: 2,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon />
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="whitesmoke"
              >
                Email :
              </Typography>
            </Box>
            <Typography color="whitesmoke">ibthemes@gmail.com</Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* form control */}

      <Box
        sx={{
          mt: 4,
          p: 3,
          border: '1px solid #2e2e2e',
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          I'm always open to discussing product{' '}
          <Box component="span" fontWeight="bold">
            design work or partnerships.
          </Box>
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ mt: 2 }}
          ref={formRef}
          onSubmit={submitHundel}
        >
          {Object.entries(formdata).map(([key, value]) => {
            return (
              <TextField
                key={key}
                name={key}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                value={value}
                multiline={key === 'message'}
                rows={key === 'message' ? 4 : 1}
                fullWidth
                onChange={ChangeHundel}
                required
                variant="standard"
                margin="normal"
                color="secondary"
                sx={{
                  '& .MuiInputBase-root.MuiInput-root': {
                    color: '#DDDDDD',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#DDDDDD',
                  },
                }}

                // error={message === '' && errorField}
                // helperText={
                //   errorField && message === '' ? 'Message is required' : ''
                // }
              />
            )
          })}
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                boxShadow: '0 0 12px #ff416c',
              },
            }}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
