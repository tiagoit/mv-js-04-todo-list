// import Todo from '../components/todo.model';

class TodoView {
  /**
   *
   * @param todo: Todo
   * @returns {string}
   */
  static view(todo) {
    return `
      <li class="ui-state-default">
        <div class="checkbox">
          <input type="checkbox" value="" />
          <a class="btn btn-light" data-toggle="collapse" href="#collapseExample0" role="button" aria-expanded="false" aria-controls="collapseExample0">
          ${todo.name} ${todo.dueDate.toISOString().slice(0, 10)}
          </a>
          <div class="collapse" id="collapseExample0">
          <div class="card card-body">${todo.description}</div>
          </div>
        </div>
      </li>
    `;
  }
}

export default TodoView;
