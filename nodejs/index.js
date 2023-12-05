import express from "express"
import UserRouter from "./router/user.router.js";
import allbusRouter from "./router/allbus.router.js";
import bookingRouter from "./router/booking.router.js";
import cors from "cors"
import bodyParser from "body-parser";

const port = 8080;
const app = express();
app.use(express.json());
app.use(cors())
app.set(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(UserRouter)
app.use(allbusRouter)
app.use(bookingRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
