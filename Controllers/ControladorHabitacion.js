import { ServicioHabitacion } from "../Services/ServicioHabitacion.js"
import { ServicioReserva } from "../Services/ServicioReserva.js"


export class ControladorHabitacion{

    constructor(){}
    
     async buscarHabitacion(request,res){

            let objetoServicioHabitacion = new ServicioHabitacion() 
       
        
            try{
                res.status(200).json({
                    "mensaje":"exito en la consulta",
                    "datos": await objetoServicioHabitacion.buscarHabitaciones(),
                })

            }catch(e){
                res.status(400).json({
                    "mesaje":"error en consola"+e,
                    "datos": null
                })

        }
        
      }
      
        async buscarHabitacionPorId(request,res){
            let datosurl = request.params.id
            let objetoServicioHabitacion = new ServicioHabitacion()
         
        
                try{

                    res.status(200).json({
                        "mensaje":"exito en la consulta" + datosurl,
                        "datos": await objetoServicioHabitacion.buscarHabitacionesId(datosurl)
                    })

                }catch(e){

                    console.error(e)

                    res.status(400).json({
                    "mesaje":"error en consola"+e,
                    "datos": null
                    })

                }
            }
    
      async  RegistrarHabitacion(request,res){

            let datosHabitacion=request.body 
            let objetoServicioHabitacion = new ServicioHabitacion()
         

            try{
                await objetoServicioHabitacion.agregarHabitacionBd(datosHabitacion)
                res.status(200).json({
                    "mensaje":"exito en la registro",
                    "datos":objetoServicioHabitacion.agregarHabitacionBd(),
                })

            }catch(e){
                res.status(400).json({
                    "mesaje":"error al registro"+e,
                    "datos": null
                })
            }
        }

       async EditarReserva(req,res){
            let id =req.params.id
            let datosHabitacion = req.body
            let objetoServicioReservas = new ServicioReserva()
            

            try{
               
                res.status(200).json({
                    "mensaje":"exito  editando "+id,
                    "datos": await objetoServicioReservas.EditarReservas(id,datosHabitacion)
                })

            }catch(e){
                res.status(400).json({
                    "mesaje":"error en consola"+e,
                    "datos": null
                })
            }    
        }

} 