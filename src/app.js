import 'bootstrap';
import './scss/style.scss';
import Framework from './framework';
import Project from './models/project.model';
import AppService from './app.service';
import ProjectController from './controllers/project.controller';
import Todo from './models/todo.model';

const app = () => {
  console.log({ Framework, Project })
  AppService.projects = [new Project('def')];
  // const projects = [new Project('def')];
  Framework.activateRoute('index', AppService.projects);

  document.getElementById('add-todo-btn').addEventListener('click', ev => {
    ProjectController.newTodo(ev.target.dataset.id, new Todo("First todo","first todo", new Date(), new Date(), 1) )

  });
};


app();
