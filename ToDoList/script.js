const inputtdl = document.querySelector('.textarea');
const buttontdl = document.querySelector('.buttoninput');
const listtdl = document.querySelector('.todolist');

// Load saved data from local storage
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('todoList');
  if (savedData) {
    listtdl.innerHTML = savedData;
  }
});

function clickButton(e) {
  e.preventDefault();
  addTodo();
  saveTodoList(); // Save updated data to local storage
}

// TodoList
function addTodo() {
  const allItem = document.createElement('div');
  allItem.classList.add('allItem');

  const item = document.createElement('p');
  item.classList.add('item');
  item.innerText = inputtdl.value;
  allItem.appendChild(item);

  if (inputtdl.value === '') return;

  const checkbutton = document.createElement("button");
  checkbutton.innerHTML = 'Edit';
  checkbutton.classList.add("edit-button");
  allItem.appendChild(checkbutton);

  const trashbutton = document.createElement("button");
  trashbutton.innerHTML = 'Delete';
  trashbutton.classList.add("del-button");
  allItem.appendChild(trashbutton);

  listtdl.appendChild(allItem);
  inputtdl.value = '';
}

// update and delete
function okdel(e) {
  const item = e.target;

  // Edit
  if (item.classList[0] === 'edit-button') {
    const todolist = item.parentElement;
    const editTaskElement = todolist.firstChild;

    const editPopup = document.createElement('div');
    editPopup.classList.add('edit-popup');

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = editTaskElement.textContent;
    editPopup.appendChild(editInput);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', () => {
      editTaskElement.textContent = editInput.value;
      todolist.removeChild(editPopup);
      saveTodoList(); // Save updated data to local storage
    });
    editPopup.appendChild(saveButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
      todolist.removeChild(editPopup);
    });
    editPopup.appendChild(cancelButton);

    todolist.appendChild(editPopup);
  }


  // Delete
  if (item.classList[0] === 'del-button') {
    const todolist = item.parentElement;
    todolist.remove();
    saveTodoList(); // Save updated data to local storage
  }
}

// Save data to local storage
function saveTodoList() {
  localStorage.setItem('todoList', listtdl.innerHTML);
}

buttontdl.addEventListener('click', clickButton);
listtdl.addEventListener('click', okdel);