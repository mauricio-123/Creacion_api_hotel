import { modeloReserva } from "../Models/ModeloReserva.js";

export class ServicioReserva{
    //aqui programo metodos para andar una las consultas
    async buscarReserva(){
        let Reservas = await modeloReserva.find()
        return Reservas 
    }
    async buscarReservaId(id){
        let Reserva = await modeloReserva.find({_id: id})
        return Reserva
    }
    async EditarReservas(id,datosReserva){
       
        return await modeloReserva.findByIdAndUpdate({_id: id},{datosReserva})
    }
    async  agregarReservaBd(datosReserva){
        let datos = new modeloReserva(datosReserva)
        return await datos.save()
    }
}