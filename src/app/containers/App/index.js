import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import childRouteSelector from '../../redux/selectors/childRoute';

const App = ({ childRoute }) => (
  <div className="App">
    <div>
      <h1>React, Redux and router5.</h1>
      <a
        href="https://github.com/leanjscom/universal-create-react-app"
        target="_blank"
      >
        Bootstrapped using <strong>Universal Create React App</strong>
      </a>
    </div>


    <div>
      <h2>
        Purpose
      </h2>
      <div>
        Demonstrate router5 in an isomorphic React app, with Redux.
      </div>
    </div>

    <div style={{ border: '1px solid black', padding: 5 }}>
      { childRoute }
    </div>
  </div>
);

App.propTypes = { childRoute: PropTypes.node };


export default connect(childRouteSelector())(App);
