import { useContext } from "react"
import { DataContext } from "./QuizBox"

const Menu = () => {
    const {setAppState} = useContext(DataContext)

    return (
        <div className="menu">
            <h1>Quick Quiz</h1>
            <button className="start-quiz-button" onClick={() => setAppState("quiz")}>Start Quiz</button>
        </div>
    )
}

export default Menu