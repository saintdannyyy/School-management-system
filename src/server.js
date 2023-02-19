import express from "express";
const app = express();
import DBCONNECT from "./config/dbconnection.js";
const PORT = process.env.PORT || 5000;
import studentRoutes from "./routes/student.js"

//use express json
app.use[express.urlencoded[{extended : true}]]
app.use[express.json()];


//routes
app.use("/api/v1", studentRoutes)

//connect db and listen on part
app.listen(PORT, async() =>{
    try {
        awaitDBCONNECT();
        console.log("server listening on port ${PORT}")
    } catch (err) {
        console.log(err)
    }
});