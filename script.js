const addButton = document.getElementById('add-todo');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
    const task = todoInput.value.trim();

    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        todoInput.value = '';
    }
});

todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addButton.click();
    }
});