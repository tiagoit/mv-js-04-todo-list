const uuidv1 = require('uuid/v1');

class ProjectModel {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
    this.id = uuidv1();
  }
}

export default ProjectModel;
