import AppService from '../app.service';

class ProjectController {
  static newTodo(todo) {
    AppService.todos.push(todo);
  }

  static removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    if (index === -1) throw new Error('Todo not found!');

    AppService.todos.splice(index, 1);
  }
}
