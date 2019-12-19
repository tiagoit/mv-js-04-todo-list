class TodoView {
  /**
   *
   * @param todo: Todo
   * @returns {string}
   */
  static html(todo, projectId) {
    return `
      <li>
        <div class="d-flex">
          <input type="checkbox" value="" />
          <a class="btn btn-light" data-toggle="collapse" href="#todo-${todo.id}" role="button">${todo.title}</a>
        </div>
        <div class="collapse" id="todo-${todo.id}">
          <div class="card card-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Description</span>
              </div>
              <textarea class="form-control description" aria-label="With textarea">${todo.description}</textarea>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Due Date</span>
              </div>
              <textarea class="form-control due-date" aria-label="With textarea">${todo.dueDate && todo.dueDate.toISOString().slice(0, 10)}</textarea>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Done date</span>
              </div>
              <textarea class="form-control done-date" aria-label="With textarea">${todo.doneDate}</textarea>
            </div>  
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Priority</span>
              </div>
              <textarea class="form-control priority" aria-label="With textarea">${todo.priority}</textarea>
            </div>
            <div class="d-flex" id="todo-actions">
              <button class="delete-todo btn btn-danger flex-grow-1 mr-1" data-id="${todo.id}" data-pid="${projectId}">Delete</button>
              <button class="edit-todo btn btn-success flex-grow-1 ml-1" data-id="${todo.id}" data-pid="${projectId}">Save</button>
            </div>
          </div>
        </div>
      </li>
    `;
  }
}

export default TodoView;
