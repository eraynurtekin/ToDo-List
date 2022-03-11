//Elementleri Seçme
const form = document.querySelector("#todo-form")
const todoInput= document.querySelector("#todo")
const todoList = document.querySelector(".list-group")
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelector("#filter")
const clearButton = document.querySelector("#clear-todos")

eventListeners();

function eventListeners(){ //Tüm event Listenerlar

    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos)
    clearButton.addEventListener("click",clearAllTodos)
}

function clearAllTodos(e){
    
    //Arayüzden Todoları temizleme
    if(confirm("Tümünü Silmek istediğinize emin misiniz?")){
        // todoList.innerHTML = ""; // Yavaş Yöntem.
        //Daha hızlı olan yöntem :

        while(todoList.firstElementChild != null){
        todoList.removeChild(todoList.firstElementChild)
    }

        localStorage.removeItem("todos")

    }
    

}


function filterTodos(e){

        const filtervalue = e.target.value.toLowerCase();
        const listItems = document.querySelectorAll(".list-group-item")

        listItems.forEach(function(listItem){
            const text = listItem.textContent.toLowerCase();
            if(text.indexOf(filtervalue) ===-1){
                //Bulamadı
                listItem.setAttribute("style","display : none !important")
            } 
            else{
                listItem.setAttribute("style","display : block")
            }

        })

}


function deleteTodo(e){

    if(e.target.className ==="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo başarıyla Silindi...")
    }
    

}

function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){

        if(todo === deletetodo){
        todos.splice(index,1)} //Arraydan değeri silebiliriz.
    });

    localStorage.setItem("todos",JSON.stringify(todos))

}

function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}


function addTodo(e){
    const newTodo = todoInput.value.trim();
    const todos = getTodosFromStorage();

     let sameTodo = false;
    todos.forEach(function(todo){
        if(todo === newTodo){
             sameTodo =true;
             
            return sameTodo;
            
        }
        
    })


    if(newTodo === ""){
        

        showAlert("danger","Lütfen bir ToDo Giriniz...");

    }
    else if(sameTodo ===true){
        showAlert("warning","Lütfen Başka Bir Todo Giriniz...")
    }
    else{
        addTodoToUI(newTodo)
        addTodoToStorage(newTodo)

        showAlert("success","Todo başarıyla eklendi!")
       
    }
    todoInput.value="";
    e.preventDefault();
}
function getTodosFromStorage(){ //Storagedan Todoları Almış olucak
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else
    {
        todos = JSON.parse(localStorage.getItem("todos"))
        
    }

        return todos;
} 

function addTodoToStorage(newTodo){
   let todos = getTodosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));

}

function showAlert(type,message){

    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`
    
    alert.textContent = message;
    
    firstCardBody.appendChild(alert);

    //setTimeout --> Belli bir saniye verdikten sonra işlemimizi gerçekleştiririz

    setTimeout(function(){

        alert.remove();

    },2000);

}


function addTodoToUI(newTodo){ //String değerini list item olarak arayüze ekleyecek
    //List Item Oluşturma
    const listItem = document.createElement("li")
     //Link oluşturma
    const link = document.createElement("a");
    link.href="#";
    link.className="delete-item"
    link.innerHTML= "<i class = 'fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between"
    //Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo))
    listItem.appendChild(link);
    console.log(listItem)


    //Todo List'e List Item 'ı ekleme
    todoList.appendChild(listItem)

    todoInput.value = "";
}