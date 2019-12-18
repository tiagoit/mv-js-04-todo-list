import ProjectView from './project.view';

class Dashboard {
  static view(projects) {
    let response = `
      <div class="projects container">
        <div class="header">
        <button id="add-new-project" type="button" class="btn btn-primary">New Project</button>
        </div>
        <div class="row">`;

    projects.forEach((project) => {
      response += ProjectView.view(project);
    });

    response += '</div>';
    return response;
  }
}

export default Dashboard;
