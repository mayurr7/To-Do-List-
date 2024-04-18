const todoList = [
{
    name : 'do your study',
    dueDate : '2024-4-5'
    
  }
];
     renderTodoList();


function renderTodoList(){
    let todoListHTML = '';
    


    for(let i = 0; i < todoList.length; i++){
        let todoObject = todoList[i];
        const {name , dueDate} = todoObject;
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        
        
        let html = 
        `<div>${name}</div>
        <div>${dueDate}</div>
        <button onclick ="
            todoList.splice(${i},1);
            renderTodoList();
        " class = "delete-js">Delete </button>
        `;
        todoListHTML += html;
    }
   // console.log(todoListHTML);

    document.querySelector('.js-div').innerHTML = todoListHTML;
}


function addTodo(){
    const inputElement = document.querySelector('.js-input-btn');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date');
    const dueDate = dateInputElement.value;
   

    todoList.push({
        // name : name,
        // dueDate : dueDate,
        name,
        dueDate
    });
    //console.log(todoList);

    inputElement.value ='';
   

    renderTodoList();
}

