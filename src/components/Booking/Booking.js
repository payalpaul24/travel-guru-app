import React from "react";
import { useHistory, useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import "../Home/Home.css";

const Booking = () => {
	const history = useHistory();
	const handleLoginRoute = () => {
		history.push("/destination");
	};

	const { id } = useParams();

	const bookingTravelPlace = fakeData.find((place) => place.id === id);
	const { place, details } = bookingTravelPlace;

	return (
		<section className="home">
			<div className="container">
				<div className="row text-center">
					<div className="col-lg-6">
						<div className="home-content style={{color: 'white'}}">
							<h1>{place}</h1>
							<p>{details}</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="home-content bg-white p-4">
							<div className="form-group">
								<label className="text-dark">Origin</label>
								<input type="text" className="form-control" placeholder="Dhaka" />
							</div>
							<div className="form-group">
								<label>Destination</label>
								<input type="text" className="form-control" placeholder={place} />
							</div>
							<div className="form-group row booking-date">
								<div className="col-6">
									<label htmlFor="date-input">From</label>
									<input className="form-control" type="date" id="dateFrom" />
								</div>
								<div className="col-6">
									<label htmlFor="dateTo">To</label>
									<input className="form-control" type="date" id="dateTo" />
								</div>
							</div>
							<button
								onClick={handleLoginRoute}
								type="submit"
								className="btn btn-warning tg-primary btn-block"
							>
								Start Booking
								</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Booking;
