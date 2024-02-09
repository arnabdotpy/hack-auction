import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import styles from './take-test-modal.style'

const TakeTestModal = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const questions = [
    {
      question: 'What are the symptoms of anxiety?',
      answers: [
        { text: 'Restlessness', isCorrect: true },
        { text: 'Insomnia', isCorrect: true },
        { text: 'Irritability', isCorrect: false },
        { text: 'Depression', isCorrect: false },
      ],
    },
    {
      question: 'What is the purpose of a stress ball?',
      answers: [
        { text: 'To relax', isCorrect: true },
        { text: 'To help with insomnia', isCorrect: false },
        { text: 'To improve concentration', isCorrect: false },
        { text: 'To reduce stress', isCorrect: false },
      ],
    },
    {
      question: 'What is the main goal of cognitive-behavioral therapy (CBT)?',
      answers: [
        { text: 'To change negative thought patterns', isCorrect: true },
        { text: 'To improve physical health', isCorrect: false },
        { text: 'To learn new coping skills', isCorrect: false },
        { text: 'To reduce anxiety symptoms', isCorrect: false },
      ],
    },
    {
      question: 'What is the difference between anxiety and stress?',
      answers: [
        { text: 'Anxiety is a long-term condition, while stress is a short-term condition', isCorrect: false },
        { text: 'Anxiety is a mental health condition, while stress is a physical condition', isCorrect: false },
        { text: 'Anxiety is a more severe form of stress, while stress is a less severe form of anxiety', isCorrect: true },
        { text: 'Anxiety and stress are the same thing', isCorrect: false },
      ],
    },
    {
      question: 'What is the main goal of mindfulness meditation?',
      answers: [
        { text: 'To improve focus', isCorrect: false },
        { text: 'To reduce stress', isCorrect: false },
        { text: 'To increase self-awareness', isCorrect: true },
        { text: 'To improve physical health', isCorrect: false },
      ],
    },
  ]

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer)
    if (answer.isCorrect) {
      setCorrectAnswers(correctAnswers + 1)
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].answers.map((answer, index) => (
        <Button
          key={index}
          title={answer.text}
          onPress={() => handleAnswerSelect(answer)}
          color={selectedAnswer === answer ? '#ccc' : '#333'}
          disabled={selectedAnswer !== null}
        />
      ))}
      {currentQuestion === questions.length - 1 ? (
        <Button
          title="Submit Quiz"
          onPress={() => {
            // Handle quiz submission here
          }}
          disabled={selectedAnswer === null}
        />
      ) : null}
      {currentQuestion > 0 ? (
        <Text style={styles.score}>
          Correct answers: {correctAnswers}/{currentQuestion}
        </Text>
      ) : null}
       <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            You got {correctAnswers}/{questions.length} questions correct!
          </Text>
          <Text style={styles.reportText}></Text>
          </View>


    </View>
  )
}

export default TakeTestModal