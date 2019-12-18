import TodoView from './todo.view';

class ProjectView {
  static view(project) {
    let response = `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="project-header"><h3> ${project.name} </h3></div>
            <div class="card-body">
              <div class="todolist not-done">
              <h4>Todos</h4>
              <div class="row">
                  <div class="col-9"><input id="new-todo-desc" type="text" class="form-control add-todo" placeholder="Add todo"></div>
                  <div class="col-3"><button id="add-todo-btn" class="btn btn-success" data-id="${project.id}">Add</button></div>
              </div>
              <hr>
              <ul id="sortable" class="list-unstyled">`;

    project.todos.forEach((todo) => {
      response += TodoView.view(todo);
    });

    response += `
              </ul>
            </div>
          </div>
        </div>
      </div>`;
    return response;
  }
}

export default ProjectView;
