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

This project is hosted on https://todo-list-assignment-qs.vercel.app/

