import { modeloHabitacion } from "../Models/Modelhabtacion.js";

export class ServicioHabitacion{
    //aqui programo metodos para andar una las consultas
    async buscarHabitaciones(){
        let habitacion = await modeloHabitacion.find()
        return habitacion 
    }
    async buscarHabitacionesId(id){
        let habitaciones = await modeloHabitacion.find(id)
        return habitaciones
    }
    async editarhabitacion(id,datosHabitacion){
        return await modeloHabitacion.findByIdAndUpdate(id,datosHabitacion)
    }
    async  agregarHabitacionBd(datosHabitacion){
        let datos = new modeloHabitacion(datosHabitacion)
        return await datos.save()
    }
}