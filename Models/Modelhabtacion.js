import mongoose, { mongo } from 'mongoose';

//Esquema de datos es un estandar donde aparecen solo lods datos
const Schema = mongoose.Schema;

const EsquemaHabitacion = new Schema({

    nombre:{
        required:true,
        type:String

    },
    valorNoche:{
        required:true,
        type:Number
    },
    descripcion:{
        require:true,
        type:String
    },
    fotografia:{
        require:true,
        type:[String]
    },
    nombreMaximopersona:{
        required:true,
        type:Number
    }

});

export const modeloHabitacion = mongoose.model('habitaciones',EsquemaHabitacion)