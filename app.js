function onReady() {
  let toDos = [];
  function createNewToDo() {
    if (!newToDoText.value) {return; }
  toDos.push({
    title: newToDoText.value,
    complete: false
  });
  newToDoText.value = '';

  renderTheUI(toDos);
}

function renderTheUI() {
  const toDoList = document.getElementById('toDoList');
  toDoList.textContent = '';
  toDos.forEach(function(toDo) {

    const newLi = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    const title = document.createElement('span');

    newLi.textContent = toDo.title;

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
  });
}

addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();

});

 renderTheUI(toDos);
}
//The HTML form, so that we can create a new to-do when the user submits the form.
  const addToDoForm = document.getElementById('addToDoForm')
//The text input, so that we can get the text for the title of each to-do.
  const newToDoText = document.getElementById('newToDoText')
//The todo list itself so we can re-render it when we add or remove todo items.
const toDoList = document.getElementById('toDoList')




window.onload = function() {
onReady();

};
