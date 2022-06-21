//função que usei para animar a setinha, aprendi a fazer isso durante umas aulas de HTML/CSS da
// GAMA Academy umas 2 semanas atrás.
function displayAbout() {
    var arrow = document.getElementById('animation');
    arrow.classList.toggle('rotate');
    var display = document.getElementById('about');
    display.classList.toggle('active');
}

// Esse é o JS dos inputs de nome-local-localNasm-description, porém, não sei se o problema
// é a formatação HTML que eu usei ou alguma config que está faltando nas funções
// (o que é BEM mais provável de ter acontecido)
class todo {
    constructor(title, local, data, description) {
        this.title = title;
        this.local = local;
        this.data = data;
        this.description = description;
    }
}

function RemoveElements(){
    let todosDiv = document.querySelectorAll('.itemTodo');
    todosDiv.forEach(todo  => {
        todo.remove();
    })

    index = 0;
}

function CreateButton(newDiv, title){
    let newButton = document.createElement("button_send");

    newButton.innerHTML = "bora!";
    newButton.addEventListener("click", function() {
        let parent = this.parentNode;
        todo.splice(parent.id, 1);
        parent.remove();
    })

    newDiv.appendChild(newButton);        
}

function ClearInputs() {
    let todosInput = document.querySelectorAll('input');

    todosInput.forEach(todo  => {
        todo.value = '';
    });

    let select = document.getElementById('data');
    select.selectedIndex = '0';

    let textarea = document.getElementById('description');
    textarea.value = '';

}

function AddTodoScreen(todos) {
    let actualDiv = document.getElementById("todo");

    RemoveElements();

    for(let todo of todos) {
        let newDiv = document.createElement("div");
        newDiv.className = "itemTodo";
        newDiv.id = index;
        AddStyle(newDiv.style, todo["data"]);        

        for(attribute in todo) {
            let newP = document.createElement("p");
            newP.innerHTML = attribute + ': ' + todo[attribute];
            newP.style.margin = '0';

            newDiv.appendChild(newP);
        }
        
        CreateButton(newDiv), todo[title];

        actualDiv.appendChild(newDiv);
        ClearInputs();
        index++;
    }    
}

function AddTodo() {
    let title = document.getElementById('title').value;
    let local = document.getElementById('local').value;
    let data = document.getElementById('data');    
    let localNasmValue = data.options[data.selectedIndex].value;
    let description = document.getElementById('description').value;    

    let todo = new todo(title, local, localNasm, description);

    todos.push(todo);

    AddTodoScreen(todos);
}