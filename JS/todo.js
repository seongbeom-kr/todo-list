const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deleteTodo);
  span.innerText = newTodo;
  button.innerText = "❌";
  todoList.appendChild(li);
}
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;

  todoInput.value = "";
  paintTodo(newTodo);
}
todoForm.addEventListener("submit", handleTodoSubmit);
