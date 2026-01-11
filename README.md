# React Project: 
Todo App with Calendar integration

# Description
While I find it effective to list all my todos in one place, when planning for how to execute these I also find it helpful to be able to visualise my day, week or month in order to assist in prioritisation. This project was designed to improve on the basic todo apps by adding a calendar component which visually displays upcoming tasks.

# Usage
This app allows you to create, store and alternate between list, filtered and calendar displays of your todos.

# server
This app is designed to work in conjunction with a json-server to persist changes. This is configured as follows:
{
  "allTodos": [
    {
      "id": "1",
      "title": "dog grooming",
      "category": "home",
      "start": "2026-01-07T00:30:00Z",
      "end": "2026-01-07T01:30:00Z",
      "allDay": false,
      "completed": true
    }
  ]
}

# Static components

The top part of the page displays a Welcome message and Navigation menu.

The Navigation menu buttons allow you to select your desired view.

# Routed components

The Home Page display any tasks scheduled for today.

The Todo Dashboard displays all tasks and can be sorted by date scheduled and/or filtered by todo category.

The Home Page and Todo Dashboard render 'Task Card' components which contain information about each of the Todo objects and can be manipulated from here. This includes the checkbox to updated "completed", and the bin icon to permanently delete the task.

The Todo Calendar uses 
http://github.com/jquense/react-big-calendar and 
https://date-fns.org/ to manipulate the todo data and display the todos using start date and times for calendar displays. Optional views are: month, week, day. Additionally, events are colour coded by category.

The Add Todo Page allows user to enter new todos which will be posted to the server and update all other components.

Icons used have been drawn from: https://fontawesome.com/icons/packs/classic


