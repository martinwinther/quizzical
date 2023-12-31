import { Link } from "react-router-dom";

export default function Intro() {
	return (
		<div className="intro-container">
			<h1 className="intro-title">Quizzlet</h1>
			<p className="intro-tagline">lets get started</p>
			<Link className="btn-link" to="/start-quiz">
				start quiz
			</Link>
		</div>
	);
}
