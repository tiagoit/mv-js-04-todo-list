const uuidv1 = require('uuid/v1');

class ProjectModel {
  constructor(name, todos = []) {
    this.id = uuidv1();
    this.name = name;
    this.todos = todos;
  }
}

export default ProjectModel;
