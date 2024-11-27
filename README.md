# Kanban Board Application
A simple and interactive Kanban board application to track the status of tasks. The application allows organizing tasks based on their priority, status, and user assignments. It supports features like dynamically displaying task priorities, filtering tasks by various properties, and using SVG icons for visual representation.

## Features
Task Grouping: Group tasks by status, priority, or user.
Dynamic Priority: Tasks are color-coded dynamically based on their priority (Urgent, High, Medium, Low, No Priority).
Customizable Sorting: Tasks can be sorted by priority or title.
SVG Icons: Each task status (To-Do, In-Progress, Done, etc.) has an associated SVG icon for a visually intuitive interface.
User Avatar: Display user avatars beside each task to show task assignments.
Tech Stack
React: A JavaScript library for building user interfaces.
CSS: Styling and layout using regular CSS and Flexbox.
SVG: Scalable Vector Graphics for task status icons.

## Usage
Components:
KanbanBoard: The main container for all columns (To-Do, In-Progress, Done, etc.). It groups and sorts tickets based on the selected criteria (priority, status, user).

Card: Displays individual task details, including the title, description, priority, and user information. It also includes a priority badge with dynamic color coding based on task priority.

## Props for KanbanBoard:
tickets: Array of ticket objects. Each ticket has properties like id, title, description, priority, status, and userId.
users: Array of user objects. Each user has an id, name, and avatar.
groupBy: Determines how tasks are grouped (options: "status", "user", or "priority").
sortBy: Determines how tasks within a group are sorted (options: "priority", "title").

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
