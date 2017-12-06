function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li')

    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    toDoList.appendChild(newLi);

    newToDoText.value = '';
    function destroyFirst(){
        var list = dom.byId("list"),
            items = list.getElementsByTagName("li");

        if(items.length){
            domConstruct.destroy(items[0]);
        }
    }
    function destroyAll(){
        domConstruct.empty("list");
    }

    // Connect buttons to destroy elements
    on(dom.byId("destroyFirst"), "click", destroyFirst);
    on(dom.byId("destroyAll"), "click", destroyAll);




   });
}



window.onload = function() {
onReady();

};
