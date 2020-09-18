import React from "react";

const LoginWithOthers = (props) => {
	return (
		<div>
			<div className="text-center">
				<p>---------------Or--------------------</p>
			</div>

			<div className="tg-thirdparty-login p-2">
				<button className="btn btn-secondary" onClick={props.facebook}>
					<span>
						<img src={require("../../images/icon/fb.png")} style={{ width: "30px" }} alt="fb logo" />
					</span>
					<span>Continue with Facebook</span>
				</button>
				<button className="btn btn-secondary ml-2" onClick={props.google}>
					<span>
						<img src={require("../../images/icon/google.png")} style={{ width: "30px" }} alt="google logo" />
					</span>
					<span>Continue with Google</span>
				</button>
			</div>
		</div>
	);
};

export default LoginWithOthers;
