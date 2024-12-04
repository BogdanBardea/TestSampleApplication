const addButton = document.getElementById('add-todo');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to create a new task
const createTask = (taskText) => {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
};

// Add default task
window.onload = () => {
    createTask('Example task: Learn JavaScript');
    createTask('Example task: Learn JavaScript1');
};

// Add new task on button click
addButton.addEventListener('click', () => {
    const task = todoInput.value.trim();

    if (task) {
        createTask(task);
        todoInput.value = '';
    }
});

// Add new task on pressing Enter
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addButton.click();
    }
});