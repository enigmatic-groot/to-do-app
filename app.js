//build function that will control everything
function onReady() {
  let id = 0;
  //Creates and houses the current state of to-do list
  let toDos = [];
  //This accesses the HTML form element
  const addToDoForm = document.getElementById('addToDoForm');
  //Build function that creates/adds list items.
  function createNewToDo() {
    //This accesses the HTML input element
    const newToDoText = document.getElementById('newToDoText');
    //Avoid submission of empty To-Do items. Prevent this by executing a return
    //if the value for newToDoText is falsy.
    if (!newToDoText.value) {
      return;
    }
    //Adds new item to the toDos array
    toDos.push ({
      title: newToDoText.value,
      complete: false,
      id : id
    });
    id++;
    //Clears the text in the form input field so user doesn't need to
    //Initialize before the forEach function.
    newToDoText.value = '';
    renderTheUI();
  }

  //callback function that compares the id of each item in the to-do list with the id parameter
  function destroyDelete (id) {
    toDos = toDos.filter(item => item.id !== id); //<-- Each Todo item in the todo list !== ID reference parameter.


    renderTheUI();
  }
  //Visual element of To-Do list
  function renderTheUI (){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';
    //Parts of the to do item
    toDos.forEach(function(toDo){
      //Create a new Li
      const newLi = document.createElement('li')
      //Create a new input
      const checkbox = document.createElement('input');
      //Create a new deleteButton
      const deleteButton =  document.createElement('button');
      //Set the inputs type to checkbox
      checkbox.type = 'checkbox';

      deleteButton.type = 'button';
      //Labels delete button with text.
      deleteButton.textContent = 'Delete';

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      //Append the deleteButton to each newLi
      newLi.appendChild(deleteButton);
    //deleteButton Uses specific ID to find and remove the To-Do from the array.
    deleteButton.addEventListener('click', event => {
     destroyDelete(toDo.id);//<---deleteButton specific ID input.
    });

    });
  }
  //Event Listener - catches 'submit', prevents page reload,
  // and invokes the function createNewToDo
//Use the submit event of the form element.
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}

window.onload = function() {
  onReady();
};
