import AppService from './app.service';
import DashboardController from './controllers/dashboard.controller';

class Framework {
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
