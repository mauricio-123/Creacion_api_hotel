//este archivo establece las rutas o enpoid
import  express  from 'express'

import {ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../Controllers/ControladoReserva.js'
let controladorHabitacion = new ControladorHabitacion()//usando controlador
let controladoReserva = new ControladorReserva()

export let rutas= express.Router() 

rutas.get('/hotel/habitacion', controladorHabitacion.buscarHabitacion)
rutas.get('/hotel/habitacion/:id',controladorHabitacion.buscarHabitacionPorId )
rutas.post('/hotel/habitacion', controladorHabitacion.RegistrarHabitacion)
rutas.put('/hotel/nodificarhabitacion/:idHabitacion',controladorHabitacion.EditarHabitacion)

//rutas de reservas

rutas.get('/hotel/Reserva', controladoReserva.buscarReserva)
rutas.get('/hotel/Reserva/:id',controladoReserva.buscarReservaPorId )
rutas.post('/hotel/habitacion', controladoReserva.RegistrarReserva)
rutas.put('/hotel/nodificarhabitacion/:idHabitacion',controladoReserva.EditarReserva)