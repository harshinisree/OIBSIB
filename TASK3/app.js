const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = input.value.trim();

  if (todoText !== '') {
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    input.value = '';
  }
});

function createTodoItem(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');

  span.textContent = text;
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}



