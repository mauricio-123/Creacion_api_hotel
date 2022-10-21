import mongoose from 'mongoose';

   export async function conectarConMongo(){
        try{
            await mongoose.connect(process.env.DATABASE );
            console.log("Exito conectando a base de datos con mongo")
        }catch{
            console.log("conecion fallida a mongos")
        }
    }