import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Grid } from '@mui/material'

const Formulario = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container>
        <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Nome"
          />
        </Grid>
        <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Telefone"
          />
        </Grid>
        <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Email"
          />
        </Grid>
        <Grid
          item
          md={12}
          sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}
        >
          <Button variant="outlined"> Enviar </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Formulario
