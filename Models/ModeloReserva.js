//idhabitacion:String
//fechaEntrada:Date
//fechaSalida:date
//numero Adulto:Number
//numero Niños:Number
// costo Reserva ():Number
import mongoose, { mongo } from 'mongoose';

//Esquema de datos es un estandar donde aparecen solo lods datos
const Schema = mongoose.Schema;

const EsquemaReserva = new Schema({

    idhabitacion:{
        required:true,
        type:String
    },
    fechaentrada:{
        required:true,
        type:Date
    },
    fechasalida:{
        require:true,
        type:Date
    },
    numeroadulto:{
        required:true,
        type:Number
    },
    numeroniño:{
        required:true,
        type:Number
    },
    numeroAdulto:{
        required:true,
        type:Number
    },
    costoreserva:{
        require:true,
        type:Number
    }


});

export const modeloReserva = mongoose.model('Reservas',EsquemaReserva)