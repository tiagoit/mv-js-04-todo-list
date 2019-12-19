import TodoView from './todo.view';

class ProjectsView {
  static render(projects) {
    let html = `
      <input type="text" id="new-project-name">
      <div class="btn btn-primary" id="add-project">New Project</div>
    `;
    projects.forEach(project => {
      html += `
        <div class="card m-2">
          <div class="card-header"><h3>${project.name}</h3></div>
          <div class="card-body">
            <h4>Todos</h4>
            <div class="d-flex" id="add-todo">
                <input type="text" class="form-control mr-1">
                <button class="btn btn-success" data-id="${project.id}">Add</button>
            </div>
            <hr>
            <ul id="sortable" class="list-unstyled">`;

      project.todos.forEach((todo) => {
        html += TodoView.html(todo, project.id);
      });

      html += `
            </ul>
          </div>
        </div>`;
    });

    document.getElementsByTagName('app-projects')[0].innerHTML = html;
  }
}

export default ProjectsView;
