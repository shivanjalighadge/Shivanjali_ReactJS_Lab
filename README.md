# Expense Manager

## Overview
This project is a digital solution to manage shared expenses for individuals living together, such as friends or roommates. It allows users to keep track of various shared bills like cooking, electricity, bike maintenance, rent, etc. The application ensures that at the end of the sharing period, any excess amount spent by a person is calculated and settled accurately.

## Features
1. **JSON Server for Data Storage**: The application uses a JSON server to store and retrieve expense data.
2. **Auto-generated IDs**: Each expense entry is automatically assigned an ID to prevent manual errors.
3. **Graphical User Interface (GUI)**:
    - View and manage expenses.
    - Add new expense entries through a user-friendly form.
4. **Expense Summary**:
    - Displays total expenses.
    - Breakdown of amounts spent by each person.
    - Calculates and displays the settlement amount between the two individuals.
5. **React Router**: Separate views for the expense list and the form to add new items.

---

## Screenshots

![Expense List](https://github.com/anmoljamespilley/Anmol_ReactJS_Lab/blob/main/Screenshots/Home%20Page.png)
*Description: The main view displaying all recorded expenses.*

![Add Expense Form](https://github.com/anmoljamespilley/Anmol_ReactJS_Lab/blob/main/Screenshots/Form.png)
*Description: The form used to add new expenses.*

---

## Future Developments
- Filter data by month.
- Restrict date entries to the current month.
- Implement user login functionality.
- Prevent updates to data from previous months.

## Getting Started
### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/anmoljamespilley/Anmol_ReactJS_Lab.git
    cd Expense Tracker
    ```
2. Install the dependencies (client folder):
    ```bash
    npm install
    npm install axios
    npm install bootstrap react-bootstrap
    ```
3. Start the JSON server (server folder):
    ```bash
    npm install -g json-server
    json-server --watch db.json --port 3001
    ```
4. Start the React application (client folder):
    ```bash
    npm start
    ```
5. Optional, if the app shows error related to DOM, try installing it, then run the app again:
   ```bash
   npm install react-dom
   ```

## Usage
1. **Viewing Expenses**: Navigate to the homepage to see a list of all recorded expenses.
2. **Adding a New Expense**: Use the "Add New Item" form to input details of a new expense.
3. **Expense Summary**: View the total amount spent, individual contributions, and the settlement details on the summary page.

## Project Structure
- **Backend**: JSON server for data persistence.
- **Frontend**: React.js for the user interface, with React Router for navigation.

## Coding Standards and Practices
This project adheres to industry-standard coding practices, including:
- Consistent coding style with ESLint.
- Modular and reusable components in React.
- Separation of concerns between UI and business logic.
- Proper error handling and input validation.

## Rubrics
1. **Form Validation and Data Submission**: Ensures all inputs are validated before pushing to the server.
2. **Data Retrieval**: Efficiently fetches and displays data from the JSON server.
3. **Responsive Design and Coding Standards**: The application is responsive and adheres to coding standards, including the use of React Router for navigation.

## Contributors
- [Anmol James Pilley](https://github.com/anmoljamespilley)

---

**Note**: This project is a simple demonstration for managing shared expenses and may require additional features and security enhancements for production use.

---

## Acknowledgments
- Thanks to the open-source community for the tools and libraries that made this project possible.
