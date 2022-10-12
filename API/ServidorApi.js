import  express  from 'express'

import {rutas} from '../Routes/rutas.js'

import {conectarConMongo} from '../Database/conexion.js'

export class ServidorApi{
    constructor(){
        //APP ES LA VARIABLE QUE ALMACENA TODAS LAS FUNCIONALIDADES DE ESPRESS
        this.app = express()
        this.conectarConBD()
        this.activarBody()
        this.atenderPeticion()
    }
    //METODOS DE LA CLASE SERVIDOR API
    despertarServidor(){
         //Encendiendo el servidor en el puerto 3000
        this.app.listen(process.env.PORT,function(){
            console.log("servidor ensendido")
        })  
    }

    atenderPeticion (){
        this.app.use('/',rutas)
    }

    conectarConBD(){
        conectarConMongo()
    }

    activarBody(){
        this.app.use(express.json())
    }



}