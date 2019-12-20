const uuidv1 = require('uuid/v1');

class TodoModel {
  constructor(title, description = '', dueDate = null, doneDate = null, priority = 1) {
    this.id = uuidv1();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.doneDate = doneDate;
    this.priority = priority;
  }
}

export default TodoModel;
