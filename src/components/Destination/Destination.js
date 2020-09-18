import React from "react";
import fakeData from "../../fakeData";
import DestinationPlace from "../DestinationPlace/DestinationPlace";
import GoogleMapping from "../GoogleMap/GoogleMapping";

const Destination = () => {

	const destination = fakeData;
	return (
		<div className="container">
			<div className="row text-center">
				<div className="col-lg-6">
					{
						destination.map((place) => (
							<DestinationPlace DestinationPlace={place} key={place.id}></DestinationPlace>
						))
					}
				</div>
				<div className="col-lg-6">
					<GoogleMapping></GoogleMapping>
				</div>

			</div>
		</div>
	);
};

export default Destination;
