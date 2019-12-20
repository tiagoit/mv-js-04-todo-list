import DashboardController from './controllers/dashboard.controller';

class Framework {
  /**
   * Instantiate the Controller for the requested route.
   * @param {string} route
   */
  static activateRoute(route) {
    const handlers = {
      index: { controller: DashboardController },
    };

    const Controller = handlers[route].controller;
    return new Controller();
  }
}

export default Framework;
