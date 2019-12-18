function renderProjects() {
  const content = document.getElementById('content');
  const projects = document.createElement('project');
  projects.innerHTML = `

    `;
  content.appendChild(projects);
}

export default renderProjects;