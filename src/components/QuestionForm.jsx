import { useState } from "react"


  function QuestionForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        category: "",
        difficulty: ""
    });
    const categories = [
        {id: 10, name: "Entertainment: Books"},
        {id: 11, name: "Entertainment: Film"},
        {id: 17, name: "Science &amp; Nature"},
        {id:20, name: "Mythology"},
        {id: 22, name: "Geography"},
        {id:27, name: "Animals"}
    ];
    const difficulties = ["easy", "medium", "hard"];
    const [error, setError] = useState("");

    const fetchQuestion = async () => {
        try {
            const response = await fetch(`https://opentdb.com/api.php?amount=1&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`);
            const data = await response.json();
            if (data.results.length >0) {
                return data.results[0] 
            }
        } catch (error) {
            console.log("Error fetching question", error)
        }
    };
      
    const handleSubmit = async (event) => {
        event.preventDefault(); 

        if (!formData.firstName || !formData.category || !formData.difficulty) {
            setError("All fields are required to play!"); 
            return;
          } 
        const questionData = await fetchQuestion();
        if (questionData) {
          //
        }  else {
            setError("Error retrieving the question. Please try again.", error)
        } 
    }; 

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              value={formData.firstName}
              onChange={(e) => setFormData({firstName: e.target.value})}
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            Select the question category:
            <select
              value={formData.category}
              onChange={(e) => setFormData({category: e.target.value})}
              required
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Select the question difficulty:
            <select
              value={formData.difficultyifficulty}
              onChange={(e) => setFormData({difficulty: e.target.value})}
              required
            >
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }  

export default QuestionForm;