class TodoView {
  /**
   *
   * @param todo: Todo
   * @returns {string}
   */
  static html(todo, projectId) {
    const checked = todo.doneDate ? 'checked' : '';
    return `
      <li>
        <div class="d-flex">
          <input type="checkbox" class="is-done" ${checked} data-id="${todo.id}" data-pid="${projectId}"/>
          <a class="btn btn-light w-100 text-left ml-2" data-toggle="collapse" href="#todo-${todo.id}" role="button">${todo.title}</a>
        </div>
        <div class="collapse" id="todo-${todo.id}">
          <div class="my-3">
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
              <textarea class="form-control due-date" aria-label="With textarea">${todo.dueDate || ''}</textarea>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Priority</span>
              </div>
              <textarea class="form-control priority" aria-label="With textarea">${todo.priority}</textarea>
            </div>
            <div class="d-flex todo-actions">
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
