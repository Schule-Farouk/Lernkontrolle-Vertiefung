import React, { useState } from 'react';
import './Aufgabe3.css';

function Aufgabe3() {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  });
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 5) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setAnswers({
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: ''
    });
    setStep(1);
    setSubmitted(false);
  };

  return (
    <div className="aufgabe-container">
      <h2>Umfrage</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <p>Frage 1: Was ist deine Lieblingsfarbe?</p>
            <label>
              <input
                type="radio"
                name="question1"
                value="rot"
                onChange={handleChange}
                checked={answers.question1 === 'rot'}
                required
              />
              Rot
            </label>
            <label>
              <input
                type="radio"
                name="question1"
                value="blau"
                onChange={handleChange}
                checked={answers.question1 === 'blau'}
                required
              />
              Blau
            </label>
            <label>
              <input
                type="radio"
                name="question1"
                value="grün"
                onChange={handleChange}
                checked={answers.question1 === 'grün'}
                required
              />
              Grün
            </label>
          </div>
        )}
        {step === 2 && (
          <div>
            <p>Frage 2: Was ist dein Lieblingstier?</p>
            <label>
              <input
                type="radio"
                name="question2"
                value="Hund"
                onChange={handleChange}
                checked={answers.question2 === 'Hund'}
                required
              />
              Hund
            </label>
            <label>
              <input
                type="radio"
                name="question2"
                value="Katze"
                onChange={handleChange}
                checked={answers.question2 === 'Katze'}
                required
              />
              Katze
            </label>
            <label>
              <input
                type="radio"
                name="question2"
                value="Vogel"
                onChange={handleChange}
                checked={answers.question2 === 'Vogel'}
                required
              />
              Vogel
            </label>
          </div>
        )}
        {step === 3 && (
          <div>
            <p>Frage 3: Welche Jahreszeit magst du am liebsten?</p>
            <label>
              <input
                type="radio"
                name="question3"
                value="Frühling"
                onChange={handleChange}
                checked={answers.question3 === 'Frühling'}
                required
              />
              Frühling
            </label>
            <label>
              <input
                type="radio"
                name="question3"
                value="Sommer"
                onChange={handleChange}
                checked={answers.question3 === 'Sommer'}
                required
              />
              Sommer
            </label>
            <label>
              <input
                type="radio"
                name="question3"
                value="Herbst"
                onChange={handleChange}
                checked={answers.question3 === 'Herbst'}
                required
              />
              Herbst
            </label>
            <label>
              <input
                type="radio"
                name="question3"
                value="Winter"
                onChange={handleChange}
                checked={answers.question3 === 'Winter'}
                required
              />
              Winter
            </label>
          </div>
        )}
        {step === 4 && (
          <div>
            <p>Frage 4: Welches ist dein Lieblingsessen?</p>
            <label>
              <input
                type="radio"
                name="question4"
                value="Pizza"
                onChange={handleChange}
                checked={answers.question4 === 'Pizza'}
                required
              />
              Pizza
            </label>
            <label>
              <input
                type="radio"
                name="question4"
                value="Sushi"
                onChange={handleChange}
                checked={answers.question4 === 'Sushi'}
                required
              />
              Sushi
            </label>
            <label>
              <input
                type="radio"
                name="question4"
                value="Burger"
                onChange={handleChange}
                checked={answers.question4 === 'Burger'}
                required
              />
              Burger
            </label>
          </div>
        )}
        {step === 5 && (
          <div>
            <p>Frage 5: Welches ist dein Lieblingsfilmgenre?</p>
            <label>
              <input
                type="radio"
                name="question5"
                value="Komödie"
                onChange={handleChange}
                checked={answers.question5 === 'Komödie'}
                required
              />
              Komödie
            </label>
            <label>
              <input
                type="radio"
                name="question5"
                value="Drama"
                onChange={handleChange}
                checked={answers.question5 === 'Drama'}
                required
              />
              Drama
            </label>
            <label>
              <input
                type="radio"
                name="question5"
                value="Action"
                onChange={handleChange}
                checked={answers.question5 === 'Action'}
                required
              />
              Action
            </label>
          </div>
        )}
        {step < 5 ? (
          <button type="submit">Weiter</button>
        ) : (
          <button type="submit">Fertig</button>
        )}
        {submitted && (
          <div className="answers">
            <h3>Ihre Antworten:</h3>
            <ul>
              {Object.entries(answers).map(([question, answer]) => (
                <li key={question}>
                  <strong>Frage {question.charAt(question.length - 1)}:</strong> {answer}
                </li>
              ))}
            </ul>
            <button onClick={handleReset}>Neu starten</button>
          </div>
        )}
      </form>
      
    </div>
    
  );
}

export default Aufgabe3;
