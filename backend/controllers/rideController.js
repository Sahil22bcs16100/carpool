import Ride from "../models/Ride.js";

export const createRide = async(req,res)=>{

const ride = await Ride.create(req.body);

res.json(ride);
};


export const getRides = async(req,res)=>{

const rides = await Ride.find();

res.json(rides);
};