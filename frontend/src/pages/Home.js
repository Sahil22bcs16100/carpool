import "../styles/home.css";
import hero from "../assets/drive1.webp";
import driver from "../assets/low1.webp";
import { Link } from "react-router-dom";
import {FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

import {
FaSearch,
FaRoute,
FaLeaf,
FaShieldAlt
} from "react-icons/fa";

const cities = [
"Delhi",
"Chandigarh",
"Mumbai",
"Pune",
"Bangalore",
"Mysore",
"Jaipur",
"Shimla"
];

function Home() {

return (

<div className="home">

<section className="hero">

<div className="hero-left">

<h1>
Ride Together. <br/> Travel Smarter.
<span className="hero-tagline">
Trusted rides across cities
</span>
</h1>

<p>
Find people traveling your way and share rides to save
money, reduce traffic, and make journeys more enjoyable.
</p>

</div>

<div className="hero-right">

<img src={hero} alt="GoPool ride sharing"/>

</div>

</section>




{/* SEARCH BAR */}

<div className="search-wrapper">

<div className="search-bar">

<div className="input-group">

<FaMapMarkerAlt className="input-icon"/>

<input
list="cities"
placeholder="Start location"
/>

</div>


<div className="input-group">

<FaMapMarkerAlt className="input-icon"/>

<input
list="cities"
placeholder="Destination"
/>

</div>


<div className="input-group">

<FaCalendarAlt className="input-icon"/>

<input type="date"/>

</div>


<div className="input-group">

<FaUser className="input-icon"/>

<input placeholder="Passengers"/>

</div>


<datalist id="cities">
{cities.map((city,index)=>(
<option key={index} value={city}/>
))}
</datalist>


<button className="search-btn">

<FaSearch/> Search

</button>

</div>

</div>


{/* FEATURES */}

<section className="features">

<div className="feature-card">

<FaRoute className="feature-icon"/>

<h3>Explore More Destinations</h3>

<p>
Travel between cities easily by sharing
rides with other travelers.
</p>

</div>


<div className="feature-card">

<FaLeaf className="feature-icon"/>

<h3>Eco Friendly Travel</h3>

<p>
Carpooling helps reduce carbon emissions
and traffic congestion.
</p>

</div>


<div className="feature-card">

<FaShieldAlt className="feature-icon"/>

<h3>Trusted Community</h3>

<p>
Ride with verified users and enjoy
safe shared journeys.
</p>

</div>

</section>


{/* POPULAR ROUTES */}

<section className="routes">

<h2>Trending Ride Routes</h2>

<div className="route-grid">

<div className="route-card">Delhi → Chandigarh</div>
<div className="route-card">Mumbai → Pune</div>
<div className="route-card">Bangalore → Mysore</div>
<div className="route-card">Delhi → Jaipur</div>

</div>

</section>


{/* RIDE PREVIEW */}

<section className="ride-preview">

<h2>Available Rides Today</h2>

<div className="ride-cards">

<div className="ride-card">

<h3>Delhi → Chandigarh</h3>

<p>Driver: Aman</p>

<p>Seats Available: 3</p>

<p className="price">₹350</p>

<button>View Ride</button>

</div>


<div className="ride-card">

<h3>Mumbai → Pune</h3>

<p>Driver: Rahul</p>

<p>Seats Available: 2</p>

<p className="price">₹250</p>

<button>View Ride</button>

</div>

</div>

</section>


{/* DRIVER CTA */}

<section className="driver-section">

<div className="driver-left">

<h2>
Offer a Ride. <br/> Share the Journey.
</h2>

<p>
Have empty seats in your car? Publish your ride and
connect with travelers heading the same way while
sharing travel costs.
</p>

<Link to="/offer">

<button className="offer-btn">
Offer a Ride
</button>

</Link>

</div>


<div className="driver-right">

<img src={driver} alt="Driver offering ride"/>

</div>

</section>

</div>

);

}

export default Home;