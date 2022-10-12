//TRAIGO LIBRERIAS QUE CONTROLA VARIABLES DE ENTORNO
import * as dotenv from 'dotenv' 
dotenv.config()

import {ServidorApi} from'./API/ServidorApi.js'

let servidorHotel = new ServidorApi() //Intaciar un objeto
servidorHotel.despertarServidor()


    
