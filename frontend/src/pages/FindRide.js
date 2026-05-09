import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/findRide.css";

function FindRide(){

const [rides,setRides] = useState([]);

useEffect(()=>{
fetchRides();
},[]);

const fetchRides = async ()=>{
const res = await axios.get("http://localhost:5000/api/rides");
setRides(res.data);
};

return(

<div className="find-container">

<h2>Available Rides</h2>

<div className="ride-list">

{rides.map((ride,index)=>(

<div className="ride-card" key={index}>

<h3>{ride.from} → {ride.to}</h3>

<p>Date: {ride.date}</p>
<p>Seats: {ride.seats}</p>
<p>Price: ₹{ride.price}</p>

<button>Book Ride</button>

</div>

))}

</div>

</div>

);

}

export default FindRide;