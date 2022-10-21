import { modeloHabitacion } from "../Models/Modelhabtacion.js";

export class ServicioHabitacion{
    //aqui programo metodos para andar una las consultas
    async buscarHabitaciones(){
        let habitacion = await modeloHabitacion.find()
        console.log(habitacion)
        return habitacion 
    }
    async buscarHabitacionesId(id){
        let habitaciones = await modeloHabitacion.find({_id: id})
        return habitaciones
    }
    async EditarHabitacion(id,datosHabitacion){
       
        return await modeloHabitacion.findByIdAndUpdate({_id: id},{datosHabitacion})
    }
    async  agregarHabitacionBd(datosHabitacion){
        let datos = new modeloHabitacion(datosHabitacion)
        return await datos.save()
    }
}