import DashboardView from '../views/dashboard.view';
import ProjectsController from './projects.controller';

class DashboardController {
  constructor() {
    DashboardView.render();
    this.projectsController = new ProjectsController();
  }
}

export default DashboardController;
