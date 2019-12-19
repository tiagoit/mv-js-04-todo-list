const uuidv1 = require('uuid/v1');

class TodoModel {
  constructor(title, description = '', dueDate = '', doneDate = '', priority = 1) {
    this.id = uuidv1();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.doneDate = doneDate;
    this.priority = priority;
  }

  complete() {
    this.doneDate = new Date();
  }

  isCompleted() {
    return !!this.doneDate;
  }

  set priority(p) {
    if (![1, 2, 3, 4, 5].includes(parseInt(p, 10))) throw new Error('Invalid Argument');

    this.private_p = p;
  }

  get priority() {
    return this.private_p;
  }
}

export default TodoModel;
