// Question.js
import React from 'react';

const Question = ({ number, question, options, onAnswerChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <p style={{ color: '#007bff', marginBottom: '10px', fontWeight: 'bold' }}>Question {number}: {question}</p>
      {options.map((option, index) => (
        <div key={index} style={{ marginBottom: '5px' }}>
          <input
            type="radio"
            id={`option-${number}-${index}`}
            name={`question${number}`}
            value={option}
            onChange={() => onAnswerChange(option)}
          />
          <label htmlFor={`option-${number}-${index}`} style={{ marginLeft: '5px', cursor: 'pointer' }}>{option}</label>
        </div>
      ))}
    </div>
  );
}

export default Question;
