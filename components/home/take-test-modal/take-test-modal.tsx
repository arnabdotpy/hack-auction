import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TakeTestModal = ({ setModalVisible, getStreak }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

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
  ];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer.isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleGoHome = async () => {
    setModalVisible(false);
    try {
      const value = await AsyncStorage.getItem('streak');
      if (value !== null) {
        await AsyncStorage.setItem('streak', String(Number(value) + 1));
        getStreak();
      } else {
        await AsyncStorage.setItem('streak', '1');
        getStreak();
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (quizCompleted) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>Thanks for taking the quiz!</Text>
        <TouchableOpacity style={styles.goHomeButton} onPress={handleGoHome}>
          <Text style={styles.goHomeButtonText}>Go Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, selectedAnswer === answer && styles.selectedButton]}
          onPress={() => handleAnswerSelect(answer)}
          disabled={selectedAnswer !== null}
        >
          <Text style={[styles.buttonText, selectedAnswer === answer && styles.selectedButtonText]}>{answer.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#EB5D47CC',
    color: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  selectedButtonText: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#EB5D47CC',
  },
  submitButtonText: {
    fontSize: 16,
    color: '#EB5D47CC',
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  goHomeButton: {
    backgroundColor: '#EB5D47CC',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  goHomeButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default TakeTestModal;
