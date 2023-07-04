// Define variables
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const deleteCompletedButton = document.getElementById('delete-completed');

// Add event listener to the form
todoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the value from the input field
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    // Create a new to-do item
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const todoLabel = document.createElement('label');
    todoLabel.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    // Append elements to the to-do item
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoLabel);
    todoItem.appendChild(deleteButton);

    // Append the to-do item to the list
    todoList.appendChild(todoItem);

    // Clear the input field
    todoInput.value = '';
  }
});

// Add event listener to delete buttons
todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    // Prompt for confirmation before deleting
    const confirmDelete = confirm('Are you sure you want to delete this task?');

    if (confirmDelete) {
      // Remove the parent li element
      const todoItem = event.target.parentNode;
      todoList.removeChild(todoItem);
    }
  }
});

// Add event listener to delete completed button
deleteCompletedButton.addEventListener('click', function() {
  const completedItems = todoList.querySelectorAll('li input[type="checkbox"]:checked');

  completedItems.forEach(function(item) {
    const todoItem = item.parentNode;
    todoList.removeChild(todoItem);
  });
});
