import Express from "express";
import   { createBooking }  from "../controller/booking.controller.js";

const bookingRouter = Express.Router()
bookingRouter.post('/bookin/bus',createBooking)


export default bookingRouter