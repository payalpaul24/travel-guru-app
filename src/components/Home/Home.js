import React from "react";
import { useHistory } from "react-router-dom";
import fakeData from "../../fakeData";
import DestinationPlace from "../DestinationPlace/DestinationPlace";
import "./Home.css";

const Home = () => {
	const history = useHistory();
	const bookingTravelPlace = fakeData;

	const handleBookingRoute = () => {
		history.push(`/booking/${bookingTravelPlace[0].id}`);
	};

	return (
		<section className="home">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-6">
						<div className="home-content ">
							<h1>Cox's bazar</h1>
							<p>
								Cox's Bazar is a city, fishing port, tourism centre and district headquarters in
								southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it
								...
							</p>
							<button className="btn bg-warning" onClick={handleBookingRoute}>
								Booking ->
							</button>
						</div>
					</div>
					<div className="col-lg-7 col-md-6 d-flex text-md-center text-sm-left home-images">
						{
							bookingTravelPlace.map((placeSpot) => (
								<DestinationPlace DestinationPlace={placeSpot} key={placeSpot.id}></DestinationPlace>
							))
						}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
