import Dashboard from './views/dashboard.view';

class Framework {
  /**
   * Render the provided element on the #router-outlet.
   * @param {HTMLElement} el
   */
  static render(view) {
    document.getElementById('router-outlet').innerHTML = view;
  }

  /**
   * Select the route handler and call App#render.
   * @param {string} routeName
   */
  static activateRoute(routeName, resource) {
    const handlers = {
      index: Dashboard,
    };

    Framework.render(handlers[routeName].view(resource));
  }
}

export default Framework;
