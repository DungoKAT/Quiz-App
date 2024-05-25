import { useEffect, useState } from "react"
import { useContext } from "react"
import { DataContext } from "./QuizBox"
import QuestionsData from "../data/QuestionsData"

const Quiz = () => {
    const {score, setScore, setAppState} = useContext(DataContext)

    const [currentQuiz, setCurrentQuiz] = useState(0)
    const [selectChoice, setSelectChoice] = useState('')

    useEffect(() => {
        checkAnswer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectChoice])

    const checkAnswer = () => {
        if(selectChoice !== '') {
            if(selectChoice === QuestionsData[currentQuiz].answer) {
                setScore(score+1)
                nextQuestion()
            } else {
                nextQuestion()
            }
        }
    }

    const nextQuestion = () => {
        setSelectChoice('')

        if(currentQuiz === QuestionsData.length-1) {
            setAppState('score')
        } else {
            setCurrentQuiz(currentQuiz+1)
        }
    }

    return (
        <div className="quiz">
            <h2>{QuestionsData[currentQuiz].question}</h2>
            <button className="choice-button" onClick={() => setSelectChoice('A')}>{QuestionsData[currentQuiz].A}</button>
            <button className="choice-button" onClick={() => setSelectChoice('B')}>{QuestionsData[currentQuiz].B}</button>
            <button className="choice-button" onClick={() => setSelectChoice('C')}>{QuestionsData[currentQuiz].C}</button>
            <button className="choice-button" onClick={() => setSelectChoice('D')}>{QuestionsData[currentQuiz].D}</button>
            <p>{`${currentQuiz+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz