import 'bootstrap';
import './scss/style.scss';
import Framework from './framework';
import Project from './models/project.model';
import AppService from './app.service';
import ProjectController from './controllers/project.controller';

const app = () => {
  console.log({ Framework, Project })
  AppService.projects = [new Project('def')];
  // const projects = [new Project('def')];
  Framework.activateRoute('index', AppService.projects);

  document.getElementById('add-todo-btn').addEventListener('click', ev => {
    console.log('click');
    // ProjectController.addT
  });
};


app();
