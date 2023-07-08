/* eslint-disable react/prop-types */
export default function Start(props) {
	return (
		<div>
			<h1 className="title">Quizzical</h1>
			<p className="hero">You know what to do</p>
			<button className="start-btn" onClick={props.start}>
				Start quiz
			</button>
		</div>
	);
}
