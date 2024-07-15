import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import sequelize from "./config/dbConnect";

app.listen(process.env.PORT,async ()=>{
    try {
        await sequelize.authenticate()
        console.log("Database established");  
    } catch (error:any) {
        console.log(error.message);  
    }
    console.log(`server on port: ${process.env.PORT}`);
    
});