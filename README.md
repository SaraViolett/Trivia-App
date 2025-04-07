# Coding Temple Module 7 Knowledge Check Assignment
## Open Trivia Database Quiz App

In this assignment we were tasked with creating a simple quiz application using React by pullling questions and answers from the Open Trivia Database API (https://opentdb.com/)

### App Requirements:
1. **Home Page**: Welcome Message and instructions
2. **Question Filter form**: 
    - A text box and label for the user's first name
    - A dropdown and label for the question category - the user must have at least 4 choices that the API supports
    - A dropdown and label for the question difficulty - use all three choices the API supports
    - A submit button
    - An error message, stopping the form submit, if any of these inputs aren't filled out or selected.  They are all required.
3. **Question Form**: When the user submits the form to get the question, another form should appear with the following:
    - The question - the type will always be multiple choice
    - The answers as a radio button group with labels
    - A submit button
    - A conditional render that will show a message if the API call encounters an error
    - An error message, stopping the form submit, if an answer isn't chosen.
8. **Results Section**: When the user submits their answer, another section should appear with the following:
    - A message containing the user's name, telling them whether they answered the question wrong or right
    - A message telling them the correct answer if they answered incorrectly
    - A button that will allow them to start over and get another question