import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Container from '@mui/material/Container'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Divider from '@mui/material/Divider'
import Rating from '@mui/material/Rating'
import Checkbox from '@mui/material/Checkbox'

import { useState } from 'react'


function FormRegistro() {
  // Datos del formulario {Nombre, Apellidos, Edad}
  const [data, setData] = useState({nombre:'', apellidos:'', edad:''})
  const [lenguaje, setLenguaje] = useState('');
  const [puntuacion, setPuntuacion] = React.useState(0);
  const [condicionesAceptadas, setCondicionesAceptadas] = useState(false);

  const handleLenguajeProgramacionFavorito = (event) => {
    setLenguaje(event.target.value);
  };

  const handleEnviar = (e) => {
    //Para que no mande el formulario, sino que haga lo que yo le diga
    e.preventDefault();
  }

  const handleLimpiar = (e) =>{
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

  const handleCheckbox = (event) => {
    setCondicionesAceptadas(event.target.checked);
  };

  return(
    <Container>
      <Paper elevation={0} square={false} sx={{textAlign:'center'}} >
        <Box
          component='form'
          onSubmit={handleEnviar}
        >
          <Grid container spacing={2}>
            {/* Campo nombre */}
            <Grid item size={{ xs: 12, md: 6, lg: 5, xl: 5 }}>
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
            <Grid item size={{ xs: 12, md: 6, lg: 5, xl: 5 }}>
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
            <Grid item size={{ xs: 12, md: 5, lg: 3, xl: 2 }}>
              <TextField 
                required
                label='Edad'
                variant='outlined'
                fullWidth
                value={data.name}
                onChange={handleChangeEdad}
              />
            </Grid>
          </Grid>

            {/* Lista de género */}
            <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="flex-end">
              <Grid item size={{ xs: 12, md: 4, lg: 2, xl: 4 }}>
                <FormControl>
                  <FormLabel id="demo-form-control-label-placement">Género</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                  >
                    <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                    <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="otro" control={<Radio />} label="Otro" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Lista del enguaje de programación favorito */}
              <Grid item size={{ xs: 12, md: 4, lg: 2, xl: 7 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Lenguaje de programación favorito</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={lenguaje}
                    label="lenguaje"
                    onChange={handleLenguajeProgramacionFavorito}
                  >
                    <MenuItem value={1}>Javascript</MenuItem>
                    <MenuItem value={2}>Java</MenuItem>
                    <MenuItem value={3}>Python</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* Línea divisora antes de los botones de Enviar y Limpiar */}
            <Grid size={12}>
              <Divider />
            </Grid>

            {/* direction="column" nos permite que todos los items dentro del container se pongan uno debajo del otro */}
            {/* justifyContent="flex-start" alinea los contenidos a la izquierda */}
            <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="flex-start" direction="column">
              {/* Encuesta de estrellas */}
              <Grid item size={{ xs: 12, md: 4, lg: 2, xl: 3 }}>
                <Typography component="legend">Puntúa esta encuesta</Typography>
                
                <Rating
                  name="simple-controlled"
                  puntuacion={puntuacion}
                  onChange={(event, newValue) => {
                    setPuntuacion(newValue);
                  }}
                />
              </Grid>

              {/* Checkbox de "He leído los términos y condiciones" */}
              <Grid item size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                <FormControlLabel
                  control={<Checkbox checked={condicionesAceptadas} onChange={handleCheckbox}/>}
                  label="He leído los términos y condiciones"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              {/* Botón de Enviar */}
              <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                  <Button variant='contained' fullWidth onClick={handleEnviar} disabled={!condicionesAceptadas}>
                    Enviar
                  </Button>
              </Grid>

              {/* Botón de Limpiar */}
              <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                  <Button variant='outlined' fullWidth onClick={handleLimpiar} color="error">
                    Limpiar
                  </Button>
              </Grid>
            </Grid>
        </Box>
      </Paper>
    </Container>
    
  )

}

export default FormRegistro
