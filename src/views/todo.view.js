// import Todo from '../components/todo.model';
const uuidv1 = require('uuid/v1');

class TodoView {
  /**
   *
   * @param todo: Todo
   * @returns {string}
   */
  static html(todo) {
    const id = uuidv1().slice(0, 8);
    return `
      <li>
        <div class="d-flex">
          <input type="checkbox" value="" />
          <a class="btn btn-light" data-toggle="collapse" href="#${id}" role="button">${todo.title}</a>
        </div>
        <div class="collapse" id="${id}">
          <div class="card card-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Description</span>
              </div>
              <textarea class="form-control" aria-label="With textarea">${todo.description}</textarea>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Due Date</span>
              </div>
              <textarea class="form-control" aria-label="With textarea">${todo.dueDate && todo.dueDate.toISOString().slice(0, 10)}</textarea>
            </div>  
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Done date</span>
              </div>
              <textarea class="form-control" aria-label="With textarea">${todo.doneDate}</textarea>
            </div>  
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Priority</span>
              </div>
              <textarea class="form-control" aria-label="With textarea">${todo.priority}</textarea>
            </div>
            <button class="btn btn-success w-100">Save</button>
          </div>
        </div>
      </li>
    `;
  }
}

export default TodoView;
