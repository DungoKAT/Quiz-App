import { useContext } from "react"
import { DataContext } from "./QuizBox"
import QuestionsData from "../data/QuestionsData"

const Score = () => {
    const {score, setScore, setAppState} = useContext(DataContext)

    const restartApp = () => {
        setScore(0)
        setAppState('menu')
    }

    return (
        <div className="score">
            <h1>Quiz Score</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button className="back-to-menu-button" onClick={restartApp}>Back to menu</button>
        </div>
    )
}

export default Score