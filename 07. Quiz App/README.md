# Quiz App: Practice Project
This practice project is a quiz application built using React. The application demonstrates the use of various React hooks, state management, and component structuring to create a dynamic and interactive quiz experience.

## Project Structure
- **App Component:** Root component that brings together the header and quiz components.
- **Header Component:** Displays the quiz logo and title.
- **Quiz Component:** Manages the quiz flow and state.
- **Question Component:** Displays a question and its answers, manages answer selection and timing.
- **Answers Component:** Displays a list of possible answers, handles answer selection.
- **QuestionTimer Component:** Manages and displays the countdown timer for each question.
- **Summary Component:** Displays the quiz summary and results.

## Key Features and Concepts
- **useRef Hook:** For managing mutable references that persist across renders.
- **useEffect Hook:** For managing side effects such as timers and intervals.
- **useState Hook:** For managing state within functional components.
- **useCallback Hook:** For optimizing performance by memoizing functions.
- **Dependencies Management:** Ensuring that useEffect and useCallback hooks update correctly based on their dependencies.
- **Reusable Components:** Creating reusable UI components like headers, answer lists, timers, and summary displays.