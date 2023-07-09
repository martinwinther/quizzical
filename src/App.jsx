import { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Start from "./components/Start";

export default function App() {
	const [isQuizzing, setIsQuizzing] = useState(false);

	function toggleQuiz() {
		setIsQuizzing((isQuizzing) => !isQuizzing);
	}

	return (
		<div className="container" style={{ backgroundColor: "#DEEBF8" }}>
			{!isQuizzing && <Start start={toggleQuiz} />}
			{isQuizzing && (
				<div>
					<Quiz />
					<button onClick={toggleQuiz}>Play Again</button>
				</div>
			)}
		</div>
	);
}
