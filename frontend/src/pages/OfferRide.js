import { useState } from "react";
import axios from "axios";
import "../styles/offerRide.css";

function OfferRide() {

const [ride,setRide] = useState({
from:"",
to:"",
date:"",
seats:"",
price:""
});

const handleChange = (e)=>{
setRide({
...ride,
[e.target.name]:e.target.value
});
};

const handleSubmit = async (e)=>{
e.preventDefault();

try{
await axios.post("http://localhost:5000/api/rides",ride);
alert("Ride created successfully!");
}
catch(err){
console.log(err);
}
};

return(

<div className="offer-container">

<h2>Offer a Ride</h2>

<form onSubmit={handleSubmit}>

<input name="from" placeholder="From" onChange={handleChange} required/>
<input name="to" placeholder="To" onChange={handleChange} required/>
<input type="date" name="date" onChange={handleChange} required/>

<input type="number" name="seats" placeholder="Seats" onChange={handleChange} required/>
<input type="number" name="price" placeholder="Price" onChange={handleChange} required/>

<button type="submit">Publish Ride</button>

</form>

</div>

);

}

export default OfferRide;