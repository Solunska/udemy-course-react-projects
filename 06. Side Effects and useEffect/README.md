# Travelling Journal: Practice Project

## Overview
This practice project is a travelling journal app built using React. The project demonstrates the use of various React hooks such as useEffect, useCallback, and the management of side effects. The application allows users to manage a collection of places they would like to visit or have visited, with functionalities to add and remove places.

## Project Structure
- **App Component:** Root component managing the state and structure of the app.
- **DeleteConfirmation Component:** Provides a confirmation modal for deleting places.
- **Modal Component:** Renders a modal dialog using portals.
- **Places Component:** Displays lists of places categorized as "Available Places" and "I'd like to visit...".
- **ProgressBar Component:** Visual countdown timer for deletion confirmation.

## Key Features and Concepts
- **useEffect Hook:** For managing side effects such as setting up timers, fetching data, and interacting with the DOM.
- **useCallback Hook:** For optimizing performance by memoizing functions that are passed as props or used as dependencies in other hooks.
- **Dependencies Management:** Ensuring that useEffect and useCallback hooks update correctly based on their dependencies.