import AppService from './app.service';
import DashboardController from './controllers/dashboard.controller';

class Framework {
  /**
   * Render the provided element on the #router-outlet.
   * @param {HTMLElement} el
   */
  // static render(tagName, view) {
  //   document.getElementsByTagName(tagName).innerHTML = view.html;
  //   if (view.callback) view.callback();
  // }

  /**
   * Select the route handler and call App#render.
   * @param {string} routeName
   */
  static activateRoute(routeName) {
    const handlers = {
      index: { controller: DashboardController },
    };

    const route = handlers[routeName];
    AppService.activeController = new DashboardController();
  }
}

export default Framework;
