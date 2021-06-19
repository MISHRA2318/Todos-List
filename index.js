const form= document.getElementById("form");
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');


const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addTodos(todo) );
}


form.addEventListener("submit",(e)=>{
     e.preventDefault();

     addTodos();
})

//adding , removing and deleting of todos list.
function addTodos(todo){
 let todoText = input.value 
 
 if(todo){
     todoText = todo.text;
 }
 
 if(todoText){
     const todoEL = document.createElement('li');

    //  if(todo && todo.completed){
    //      todoEL.classList.add('completed');
    //  }

     todoEL.innerText=todoText;

     todoEL.addEventListener('click',()=> {
         todoEL.classList.toggle('completed');
         updateLS();
    });

     //for right click of a mouse we use contextmenu

     todoEL.addEventListener('contextmenu',(e)=>{
         e.preventDefault();


         todoEL.remove();
         updateLS();

     });


     todosUl.appendChild(todoEL);

     input.value='';

     updateLS();
 }
}

function updateLS(){
    todosEL = document.querySelectorAll('li');

    const todos = [];

    todosEL.forEach(todoEL => {
        todos.push({
            text: todoEL.innerText,
            completed: todoEL.classList.contains('completed') 
        })
    })

    localStorage.setItem('todos',JSON.stringify(todos))
}