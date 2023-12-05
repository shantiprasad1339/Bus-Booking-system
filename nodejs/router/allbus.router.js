import Express from "express";
import { createallbus, getallbus, searchBus } from "../controller/allbus.controller.js";

const allbusRouter = Express.Router()
allbusRouter.post('/create/data/allbus',createallbus)
allbusRouter.get('/all/bus/get',getallbus)
allbusRouter.get('/search/bus',searchBus)


export default allbusRouter