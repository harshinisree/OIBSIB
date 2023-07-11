// Get references to the necessary DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

// Define an array to store tasks
let tasks = [];

// Function to add a new task
function addTask(event) {
  event.preventDefault(); // Prevent form submission

  const taskName = taskInput.value.trim();
  if (taskName === '') {
    return; // Don't add empty tasks
  }

  const task = {
    name: taskName,
    addedAt: new Date(),
    completed: false,
  };

  tasks.push(task); // Add the task to the array

  taskInput.value = ''; // Clear the input field

  renderTasks(); // Update the task lists
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks(); // Update the task lists
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove the task from the array
  renderTasks(); // Update the task lists
}

// Function to render the task lists
function renderTasks() {
  // Clear the task lists
  pendingTasksList.innerHTML = '';
  completedTasksList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="task-name">${task.name}</span>
      <span class="task-actions">
        <button onclick="toggleTaskCompletion(${index})">${task.completed ? 'Incomplete' : 'Complete'}</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </span>
    `;

    if (task.completed) {
      listItem.classList.add('completed');
      completedTasksList.appendChild(listItem);
    } else {
      pendingTasksList.appendChild(listItem);
    }
  });
}

// Add event listener to the form submit event
taskForm.addEventListener('submit', addTask);

// Initial rendering of the task lists
renderTasks();
