import React from "react";
import { Link } from "react-router-dom";

const DestinationPlace = (props) => {
	const { place, img, id } = props.DestinationPlace;
	return (
		<div className="col-4">
			<Link to={`/booking/${id}`}>
				<div className="tg-hero-img">
					<img src={img} className="w-100" alt="" />
					<h5>{place}</h5>
				</div>
			</Link>
		</div>
	);
};

export default DestinationPlace;
