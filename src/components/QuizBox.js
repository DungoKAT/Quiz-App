import { createContext, useState } from 'react';

// Components
import Menu from './Menu';
import Quiz from './Quiz';
import Score from './Score';

// CSS
import './quiz.css'

export const DataContext = createContext()

const QuizBox = () => {
    const [appState, setAppState] = useState("menu")
    const [score, setScore] = useState(0)

    return (
        <DataContext.Provider value={{appState, setAppState, score, setScore}}>
            <div className="quiz-box">
                <h1>Web Development Quiz</h1>
                <div className="components">
                    {appState === "menu" && <Menu />}
                    {appState === "quiz" && <Quiz />}
                    {appState === "score" && <Score />}
                </div>
            </div>
        </DataContext.Provider>
    )
}

export default QuizBox