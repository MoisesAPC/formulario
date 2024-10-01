import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'

import { useState } from 'react'


function FormRegistro() {
  // Datos del formulario {Nombre, Apellidos, Edad}
  const [data, setData] = useState({nombre:'', apellidos:'', edad:''})

  const handleEnviar = (e) => {
    //Para que no mande el formulario, sino que haga lo que yo le diga
    e.preventDefault();
  }

  const handleChangeNombre = (e) =>{
    setData({
      ...data,
      nombre: e.target.value
    })
  }

  const handleChangeApellidos = (e) =>{
    setData({
      ...data,
      apellidos: e.target.value
    })
  }

  const handleChangeEdad = (e) =>{
    setData({
      ...data,
      edad: e.target.value
    })
  }

  return(
    <Container>
      <Paper elevation={0} square={false} sx={{textAlign:'center'}} >
        <Box
          component='form'
          onSubmit={handleEnviar}
        >
          <Grid container spacing={2}>

            {/* Campo nombre */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField 
                required
                label='Nombre'
                variant='outlined'
                fullWidth
                value={data.name}
                onChange={handleChangeNombre}
              />
            </Grid>

            {/* Campo apellidos */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField 
                required
                label='Apellidos'
                variant='outlined'
                fullWidth
                value={data.name}
                onChange={handleChangeApellidos}
              />
            </Grid>

            {/* Campo edad */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField 
                required
                label='Edad'
                variant='outlined'
                fullWidth
                value={data.name}
                onChange={handleChangeEdad}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4, lg: 2, xl: 6 }}>
                <Button variant='contained' fullWidth onClick={handleEnviar}>
                  Enviar
                </Button>
            </Grid>

          </Grid>
        </Box>
      </Paper>
    </Container>
    
  )

}

export default FormRegistro
