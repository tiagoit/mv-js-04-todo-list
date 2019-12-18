import AppService from '../app.service';

class ProjectController {
  static newTodo(projectId, todo) {
    AppService.projects.find(project => project.id===projectId).todos.push(todo);
    console.log(AppService.projects)
  }

  static removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    if (index === -1) throw new Error('Todo not found!');

    AppService.todos.splice(index, 1);
  }
}

export default ProjectController