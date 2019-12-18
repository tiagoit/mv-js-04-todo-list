class Todo {
  constructor(title, description, dueDate, doneDate, priority) {
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
    if (![1, 2, 3, 4, 5].includes(p)) throw new Error('Invalid Argument');

    this.p = p;
  }
}

export default Todo;
