import express, {Response,Request} from "express"
import initializeDB from "./dbConfig/connection"

const app = express()

app.use(express.json())

app.get("/",(req:Request,res:Response)=>{
    res.send("welcome to my first typeScript server")
})
const port = 3000
app.listen(port,async ()=>{
    await initializeDB()
    console.log(`Server on port ${port}`);
})