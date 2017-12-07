function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDo = document.getElementById('deleteToDo');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');


    checkbox.type = "checkbox";
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    toDoList.appendChild(newLi);
    newToDoText.value = '';

  });




  var checked = document.querySelectorAll('input:checked');

if (checked.length === 0) {
    // there are no checked checkboxes
    alert('no checkboxes checked');
} else {
    // there are some checked checkboxes
    alert(checked.length + ' checkboxes checked');
}


    deleteToDo.addEventListener('click', removal => {
    removal.preventDefault();

    let selected = document.querySelectorAll('#toDoList li input:checked');
      for(var i = 0; i < selected.length; i++){
       selected[i].parentNode.parentNode.removeChild(selected[i].parentNode);
      }
    });
}






window.onload = function(){
  alert("The window has loaded!");
  onReady();

}
