import mongoose from "mongoose";
import {DB_NAME} from "../constants"


const connectDB = async()=>{
try {
   const connectionInstence = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

   console.log(`/n MONGODB connected !! HOST ${connectionInstence.connection.host}`)
} catch (error) {
    console.log('mongodb connection error'+ error);
    process.exit(1);
}

}

export default connectDB;