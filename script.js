"use strict";
//Function happens when the window loads
window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const tasksDiv = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //stores the input value of (#new-task-input) in task
    const task = input.value;

    //When the value of (#new-task-input) is false(null)
    if (!task) {
      alert("Please fill out the task");
      return;
    }

    // Creating a (taskDiv) variable for the div that will contain the contents div and the actions div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Creating a (contentDiv) variable for the div that will contain input field
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    // Inserting the Content Div into the Task Div
    taskDiv.appendChild(contentDiv);

    // Creating a (inputTask) variable for the input field that hold the input.value
    const inputTask = document.createElement("input");
    inputTask.classList.add("text");
    inputTask.type = "text";
    inputTask.value = task;
    inputTask.setAttribute("readonly", "readonly");

    // Inserting the InputTask variable into the Content Div
    contentDiv.appendChild(inputTask);

    // Creating a (actionDiv) variable for the div that will contain all the actionable buttons(edit, delete)
    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("actions");

    // Creating a (editButton) variable for the edit button
    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "Edit";

    // Creating a (deleteButton) variable for the delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";

    // Inserting the editButton into the actionsDiv
    actionsDiv.appendChild(editButton);

    // Inserting the deleteButton into the actionsDiv
    actionsDiv.appendChild(deleteButton);

    //Inserting the actionsDiv into the taskDiv
    taskDiv.appendChild(actionsDiv);

    //Finally inserting the taskDiv into the tasksDiv
    // (take note of the difference {taskDiv} and {task[s]Div})
    tasksDiv.appendChild(taskDiv);

    // To reset the input value after submission
    input.value = "";

    //An if-else statement to change the readonly attribute of the input field when editing it
    editButton.addEventListener("click", () => {
      if (editButton.textContent.toLowerCase() == "edit") {
        inputTask.removeAttribute("readonly");
        inputTask.focus();
        editButton.textContent = "Save";
      } else {
        inputTask.setAttribute("readonly", "readonly");
        editButton.textContent = "Edit";
      }
    });

    // an onclick function to delete
    deleteButton.addEventListener("click", () => {
      tasksDiv.removeChild(taskDiv);
    });
  });
});
