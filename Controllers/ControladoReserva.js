import { ServicioReserva } from "../Services/ServicioReserva.js"


export class ControladorReserva{

    constructor(){}
    
     async buscarReserva(request,res){

            let objetoServicioReservas = new ServicioReserva() 
       
        
            try{
                res.status(200).json({
                    "mensaje":"exito en la consulta",
                    "datos": await objetoServicioReservas.ServicioReserva(),
                })

            }catch(e){
                res.status(400).json({
                    "mesaje":"error en consola"+e,
                    "datos": null
                })

        }
        
      }
      
        async buscarReservaPorId(request,res){
            let datosurl = request.params.id
            let objetoServicioReservas = new ServicioReserva()
         
        
                try{

                    res.status(200).json({
                        "mensaje":"exito en la consulta" + datosurl,
                        "datos": await objetoServicioReservas.buscarReservaId(datosurl)
                    })

                }catch(e){

                    console.error(e)

                    res.status(400).json({
                    "mesaje":"error en consola"+e,
                    "datos": null
                    })

                }
            }
    
      async  RegistrarReserva(request,res){

            let datosReserva=request.body 
            let objetoServicioReservas = new ServicioReserva()
         

            try{
                await objetoServicioReservas.agregarReservaBd(datosReserva)
                res.status(200).json({
                    "mensaje":"exito en la registro",
                    "datos":objetoServicioReservas.agregarReservaBd(),
                })

            }catch(e){
                res.status(400).json({
                    "mesaje":"error al registro"+e,
                    "datos": null
                })
            }
        }

       async EditarReserva(req,res){
            let id =req.params.idHabitacion
            let datosHabitacion = req.body
            let objetoServicioHabitacion = new ServicioHabitacion()
            

            try{
               
                res.status(200).json({
                    "mensaje":"exito  editando "+id,
                    "datos": await objetoServicioHabitacion.EditarHabitacion(id,datosHabitacion)
                })

            }catch(e){
                res.status(400).json({
                    "mesaje":"error en consola"+e,
                    "datos": null
                })
            }    
        }

} 
