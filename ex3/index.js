const todoTitle = document.querySelector('.todo-title')
const addTodoButton = document.querySelector('.add-todo')
const todoList = document.querySelector('.todo-list')

function removeTodo(event) {
  event.target.parentNode.remove()
}

function addTodo() {
  // todo
  const todo = document.createElement('div')
  todo.classList.add('todo')

  // text
  const text = document.createElement('h3')
  text.innerHTML = todoTitle.value

  // button
  const button = document.createElement('button')
  button.type = 'button'
  button.classList.add('remove-todo')
  button.innerHTML = 'ลบ'
  button.addEventListener('click', removeTodo)

  // text, button => todo
  todo.append(text, button)

  // todo => todo list
  todoList.prepend(todo)
}

addTodoButton.addEventListener('click', addTodo)
