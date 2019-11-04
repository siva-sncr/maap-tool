import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import maapStore from './store';

class Maap extends Component {
    render() {
        return (
            <Router>
              <Provider store={maapStore}>
                      I am in config
              </Provider>
            </Router>
        );
    }
}
export default Maap;