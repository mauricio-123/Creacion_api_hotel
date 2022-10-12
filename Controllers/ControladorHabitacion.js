import { ServicioHabitacion } from "../Services/ServicioHabitacion.js"


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
        let objetoServicioHabitacion = ServicioHabitacion()
        
            try{
            res.status(200).json({
                "mensaje":"exito en la consulta"+datosurl,
                "datos": await objetoServicioHabitacion.buscarHabitacionPorId(datosurl),
            })

            }catch(e){
            res.status(400).json({
                "mesaje":"error en consola"+e,
                "datos": null
            })

        }
        
      }
    
      async  RegistrarHabitacion(request,res){

            let datosHabitacion=request.body 
            let objetoServicioHabitacion = new ServicioHabitacion()
           console.log(datosHabitacion)

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

       async EditarHabitacion(req,res){
            let id =req.params.idHabitacion
            let datosHabitacion = req.body
            let objetoServicioHabitacion = ServicioHabitacion()

            try{
               await objetoServicioHabitacion.EditarHabitacion(id,datosHabitacion)
                res.status(200).json({
                    "mensaje":"exito en la editando"+id,
                    "datos":null
                })

            }catch(e){
                res.status(400).json({
                    "mesaje":"error en consola"+e,
                    "datos": null
                })
            }    
        }

} 