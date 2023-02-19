import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config;{};
//fix depracation warning
mongoose.set["strictQuery", false];

const MONGO_URL = process.env.DEV_MONGO_URL;

const DBCONNECT = async () =>{
    try{
        await mongoose.connect[MONGO_URL, { autoIndex: true}];
        console.log("db connected Succesfully");
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

export default DBCONNECT;