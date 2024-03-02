import React, { useState } from 'react';

const PersonalityTest = () => {
  // Define questions and their options
  const questions = [
    {
      question: 'What do you enjoy doing in your free time?',
      options: ['Reading', 'Socializing with friends', 'A mix of both'],
    },
    {
      question: 'What is your approach to problem-solving?',
      options: ['Logical', 'Creative', 'Practical'],
    },
    {
      question: 'How do you handle stress?',
      options: ['Calmly', 'Seek Support', 'Distract Myself'],
    },
    // Add more questions as needed
  ];

  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [personalityType, setPersonalityType] = useState(null);

  const handleAnswerSelect = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate personality type
      const introvertCount = Object.values(answers).filter(
        (ans) => ans === 'Reading'
      ).length;
      const extrovertCount = Object.values(answers).filter(
        (ans) => ans === 'Socializing with friends'
      ).length;
      const ambivertCount = Object.values(answers).filter(
        (ans) => ans === 'A mix of both'
      ).length;

      if (introvertCount > extrovertCount && introvertCount > ambivertCount) {
        setPersonalityType('Introvert');
      } else if (
        extrovertCount > introvertCount &&
        extrovertCount > ambivertCount
      ) {
        setPersonalityType('Extrovert');
      } else {
        setPersonalityType('Ambivert');
      }
    }
  };

  return (
    <div>
      <h1>Personality Test</h1>
      {currentQuestion < questions.length ? (
        <>
          <h2>{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerSelect(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <p>Thank you for completing the personality test!</p>
        </div>
      )}
      {personalityType && (
        <p>Your personality type: {personalityType}</p>
      )}
    </div>
  );
};

export default PersonalityTest;
