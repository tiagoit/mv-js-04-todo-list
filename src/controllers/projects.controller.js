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
    this.projects.find(p => p.id === projectId).todos.push(todo);
    this.renderView();
  }

  markAsDone(projectID, todo) {
    const project = this.projects.find(p => p.id === projectId);
    const todo = project.todos.find(t => t.id === todoId);
    todo.doneDate = new Date();
  }

  removeTodo(projectId, todoId) {
    const project = this.projects.find(p => p.id === projectId);
    project.todos = project.todos.filter(t => t.id !== todoId);
    this.renderView();
  }

  editTodo(projectId, todoId, description, dueDate, priority) {
    const project = this.projects.find(p => p.id === projectId);
    const todo = project.todos.find(t => t.id === todoId);
    todo.description = description;
    // TODO: Date object
    todo.dueDate = new Date(dueDate) || undefined;
    todo.priority = priority;
    this.renderView();
  }

  renderView() {
    ProjectsView.render(this.projects);

    document.querySelector('#add-todo > button')
      .addEventListener('click', ev => {
        const todo = new TodoModel(document.querySelector('#add-todo > input').value);
        this.addTodo(ev.target.dataset.id, todo);
      });

    document.querySelectorAll('#todo-actions > button.delete-todo').forEach(el => {
      el.addEventListener('click', ev => {
        this.removeTodo(ev.target.dataset.pid, ev.target.dataset.id);
      });
    });

    document.querySelectorAll('#todo-actions > button.edit-todo').forEach(el => {
      el.addEventListener('click', ev => {
        const form = document.getElementById(`todo-${ev.target.dataset.id}`);
        const description = form.querySelector('.description').value;
        const dueDate = form.querySelector('.due-date').value;
        const priority = form.querySelector('.priority').value;
        this.editTodo(ev.target.dataset.pid, ev.target.dataset.id, 
          description, dueDate, priority);
      });
    });

    document.querySelectorAll('input.isDone').forEach( el => {
      el.addEventListener('click', markAsDone(projectID, todo))
    })
  }
}

export default ProjectsController;
