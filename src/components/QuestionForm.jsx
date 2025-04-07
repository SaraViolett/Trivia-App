import { useState } from "react";
import axios from "axios";

function QuestionForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    category: "",
    difficulty: "",
  });
  const categories = [
    { id: 9, name: "General Knowledge" },
    { id: 10, name: "Entertainment: Books" },
    { id: 11, name: "Entertainment: Film" },
    { id: 17, name: "Science & Nature" },
    { id: 20, name: "Mythology" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 27, name: "Animals" },
  ];
  const difficulties = ["easy", "medium", "hard"];
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [question, setQuestion] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [incorrectanswers, setIncorrectAnswers] = useState([]);
  const answerSelection = [...incorrectanswers, correctAnswer].sort();
  const [selectedValue, setSelectedValue] = useState();
  const [answeredQuestion, setAnsweredQuestion] = useState(false);
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Is this handle submit running?");

    if (!formData.firstName || !formData.category || !formData.difficulty) {
      console.log("data", formData);
      setError("All fields are required to play!", error);
    }

    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=1&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`
      );
      console.log(response.data.results);
      setQuestion(response.data.results[0].question);
      setCorrectAnswer(response.data.results[0].correct_answer);
      setIncorrectAnswers(response.data.results[0].incorrect_answers);
      setSubmitted(true);
      setError(null);
    } catch (error) {
      console.log("error", error);
      setError(`Error submitting form. Please try again: ${error.message}`);
    }

    console.log("handle submit finished running");
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    if (!selectedValue) {
      console.log("data", formData);
      setError("You must Select an answer!", error);
    }
    setAnsweredQuestion(true);
  };

  return (
    <div className="question-form">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="category">
            <label htmlFor="category">Select category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
            >
              <option value="">
                Select a category option
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="difficulty">
            <label>Select the question difficulty:</label>
            <select
              value={formData.difficulty}
              onChange={(e) =>
                setFormData({ ...formData, difficulty: e.target.value })
              }
              required
            >
              <option value="">Select a difficulty option</option>
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </div>
          <div className="submit">
            <button type="submit">Fetch Question</button>
          </div>
        </form>
      </div>
      {submitted && (
        <div>
          <h2>{question}</h2>
          {/* Radio selection form for answers */}
          <form onSubmit={handleQuestionSubmit}>
            {answerSelection.map((choice) => (
              <div key={choice}>
                <input
                  type="radio"
                  value={choice}
                  id={choice}
                  checked={selectedValue === choice}
                  onChange={(e) => setSelectedValue(e.target.value)}
                />
                <label htmlFor={choice}>{choice}</label>
              </div>
            ))}
            <div className="submit">
              <button type="submit">Submit Answer</button>
            </div>
          </form>
        </div>
      )}
      {answeredQuestion && selectedValue === correctAnswer && (
        <div>
          <h3>Nice work {formData.firstName}, you got it right!</h3>
        </div>
      )}
      {answeredQuestion && selectedValue !== correctAnswer && (
        <div>
          <h3>
            {formData.firstName}, you got it wrong! The correct answer is {" "}
            {correctAnswer}
          </h3>
        </div>
      )}
    </div>
  );
}

export default QuestionForm;
