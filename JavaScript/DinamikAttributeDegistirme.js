const todoInput = document.getElementById("todo");


let element;

element = todoInput;
element = todoInput.classList.length;

// todoInput.className = "form-control newClass";

todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");
todoInput.classList.remove("form-control")

element = todoInput;
element = todoInput.placeholder;
todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Lütfen Giriş Yapınız")
todoInput.removeAttribute("name")
todoInput.setAttribute("id","todos")
todoInput.removeAttribute("id")
element = todoInput
// element = todoInput.hasAttribute("name");

console.log(element);