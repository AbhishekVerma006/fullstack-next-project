import mongoose from 'mongoose';


type ConnectionObjects = {
    isConnected?:number
}

const connection : ConnectionObjects = {}

async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to database");
        return;
    }

    try {
        const db =  await mongoose.connect(process.env.MONGODB_URI || '', {});

        connection.isConnected = db.connections[0].
        readyState;

        console.log("DB is connected successfully")
    } catch (error) {
        console.log("databse connection failed", error);
        process.exit(1);
    }
}


export default dbConnect;