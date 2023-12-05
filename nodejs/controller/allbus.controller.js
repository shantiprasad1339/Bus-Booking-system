import { Op } from "sequelize";
import allbus from "../model/allbus.model.js"


export const createallbus = async (req, res) => {
    try {
        const create = await allbus.create(req.body)
        res.status(201).json({ message: "All Bus created", data: create })
    } catch (error) {
        res.status(500).send({ status: false, msg: 'Something went wrong', data: error, });
    }
}
export const getallbus = async (req, res) => {
    try {
      const buses = await allbus.findAll();
  
      // if (!buses || buses.length === 0) {
      //   throw new Error("No Buses found");
      // }
  
      return res.status(200).json({ msg: 'Buses fetched successfully', data: buses });
    } catch (err) {
      console.error('Error in Fetching Buses:', err);
      return res.status(400).json({ msg: 'Error in Fetching Buses', err: err.message });
    }
  };
  
  export const searchBus = async (req, res) => {
    console.log("Request body:", req.query); // Add this line to check request body
      try {
      // const { from, to } = req.body;
  
      // // Check if 'from' and 'to' are present in the request body
      // if (!from || !to) {
      //   return res.status(400).send({ status: false, message: 'Invalid request parameters', data: null });
      // }
  
      const getData = await allbus.findAll({
        where: {
          from:req.query.from,
          to:req.query.to
        },
      });
        console.log(getData);
      if (getData.length === 0) {
        return res.status(404).send({ status: false, message: "Bus Not Found", data: null });
      }
      return res.send({ status: true, message: "Get successful", data: getData });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ status: false, message: 'Something went wrong', data: null });
    }
  };
  



    // [Op.or]: [
          //   { from: { [Op.like]: `%${from}%` } },
          //   { to: { [Op.like]: `%${to}%` } },
          // ],