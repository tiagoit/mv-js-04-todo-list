class Project {
  constructor(name, todos) {
    this.name = name;
    this.todos = todos;
  }

  newTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    if (index === -1) throw new Error('Todo not found!');

    this.todos.splice(index, 1);
  }

  set name(n) {
    const validator = RegExp(/^\w{3,}$/);
    if (!validator.test(n)) throw new Error('Invalid name, only alphanumeric, min 3.');

    this.name = n;
  }
}
