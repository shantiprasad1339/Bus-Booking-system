
import booked from "../model/booking.model.js";

export const createBooking = async (req, res) => {
  try {
    const newBooking = await booked.create(req.body);
    return res.send({status: true,  message: "Booking created successfully",  data: newBooking, });
  } catch (error) {
    console.error("Error creating a new booking:", error);
    return res.status(500).json({
      status: false, message: "Something went wrong",  data: error });
  }
};
