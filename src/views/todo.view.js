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
          <div class="btn btn-light" data-toggle="collapse" href="#${id}" role="button">${todo.title}</div>
        </div>
        <div class="collapse" id="${id}">
          <div class="card card-body">
            Description: ${todo.description}
            Due date: ${todo.dueDate && todo.dueDate.toISOString().slice(0, 10)}
            Done date: ${todo.doneDate} 
            Priority: ${todo.priority}
          </div>
        </div>
      </li>
    `;
  }
}

export default TodoView;
