// Page2.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';

const Page2 = ({ timeLeft, setTimeLeft }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 0) {
          clearInterval(timer);
          window.location.href = '/page3';
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerChange = (questionNumber, answer) => {
    setAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionNumber - 1] = answer;
      return updatedAnswers;
    });
  };

  return (
    <div>
      <h2>Main Question Page</h2>
      <p style={{ color: '#6c757d' }}>Timer: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
      <Question
        number={1}
        question="What is 1 + 1?"
        options={['2', '3', '4']}
        onAnswerChange={answer => handleAnswerChange(1, answer)}
      />
      <Question
        number={2}
        question="What is the capital of France?"
        options={['London', 'Paris', 'Berlin']}
        onAnswerChange={answer => handleAnswerChange(2, answer)}
      />
      <Question
        number={3}
        question="Who wrote the novel 'To Kill a Mockingbird'?"
        options={['Stephen King', 'Harper Lee', 'J.K. Rowling']}
        onAnswerChange={answer => handleAnswerChange(3, answer)}
      />
      <Question
        number={4}
        question="What is the chemical symbol for water?"
        options={['H2O', 'CO2', 'NaCl']}
        onAnswerChange={answer => handleAnswerChange(4, answer)}
      />
      <Question
        number={5}
        question="Which planet is known as the Red Planet?"
        options={['Mars', 'Venus', 'Jupiter']}
        onAnswerChange={answer => handleAnswerChange(5, answer)}
      />
      <Link to="/page3">
        <button style={submitButtonStyle}>Submit</button>
      </Link>
    </div>
  );
}

const submitButtonStyle = {
  padding: '15px 30px',
  fontSize: '18px',
  cursor: 'pointer',
  backgroundColor: '#28a745',
  color: '#fff',
  border: '2px solid #28a745',
  borderRadius: '25px',
  transition: 'background-color 0.3s, color 0.3s',
  textDecoration: 'none',
  display: 'inline-block'
};

export default Page2;
