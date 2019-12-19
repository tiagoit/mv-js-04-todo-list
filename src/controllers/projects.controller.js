import AppService from '../app.service';
import ProjectModel from '../models/project.model';
import ProjectsView from '../views/projects.view';
import TodoModel from '../models/todo.model';

class ProjectsController {
  constructor() {
    this.projects = [new ProjectModel('Default')];
    this.renderView();
  }

  addTodo(projectId, todo) {
    this.projects.find(project => project.id === projectId).todos.push(todo);
    this.renderView();
    console.log(this.projects);
  }

  renderView() {
    ProjectsView.render(this.projects);
    document.querySelector('#add-todo > button').addEventListener('click', ev => {
      const todo = new TodoModel(document.querySelector('#add-todo > input').value);
      this.addTodo(ev.target.dataset.id, todo);
    });
  }

  // removeTodo(todo) {
  //   const index = this.todos.indexOf(todo);
  //   if (index === -1) throw new Error('Todo not found!');
  //
  //   AppService.todos.splice(index, 1);
  // }
}

export default ProjectsController;
