// Page3.js
import React from 'react';

const Page3 = ({ timeLeft }) => {
  const correctAnswers = ['2', 'Paris', 'Harper Lee', 'H2O', 'Mars']; // Correct answers
  const chosenAnswers = ['2', 'Paris', 'Harper Lee', 'H2O', 'Jupiter']; // Chosen answers
  const timeTaken = 300 - timeLeft; // Time taken in seconds
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;

  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div>
      <h2>Congratulations!</h2>
      <p>You have successfully completed the contest.</p>
      <p>Time taken: {formattedTime}</p>
      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Correct Answers:</p>
        <ul>
          {correctAnswers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </div>
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Chosen Answers:</p>
        <ul>
          {chosenAnswers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Page3;
