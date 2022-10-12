//este archivo establece las rutas o enpoid
import  express  from 'express'

import {ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'
let controladorHabitacion =new ControladorHabitacion()//usando controlador

export let rutas= express.Router() 

rutas.get('/hotel/habitacion', controladorHabitacion.buscarHabitacion)
rutas.get('/hotel/habitacion/:id',controladorHabitacion.buscarHabitacionPorId )
rutas.post('/hotel/habitacion', controladorHabitacion.RegistrarHabitacion)
rutas.put('/hotel/nodificarhabitacion/:idHabitacion',controladorHabitacion.EditarHabitacion)