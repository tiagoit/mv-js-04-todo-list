class Project {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
  }

  set name(n) {
    const validator = RegExp(/^\w{3,}$/);
    if (!validator.test(n)) throw new Error('Invalid name, only alphanumeric, min 3.');

    this._name = n;
  }

  get name() {
    return this._name;
  }
}

export default Project;
