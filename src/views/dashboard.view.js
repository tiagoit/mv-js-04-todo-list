import ProjectsView from './projects.view';

class DashboardView {
  static render() {
    const html = `
      <div class="container">
        <div class="row mt-3">
          <app-projects></app-projects>
        </div>
      </div>`;

    document.getElementsByTagName('router-outlet')[0].innerHTML = html;
  }
}

export default DashboardView;
