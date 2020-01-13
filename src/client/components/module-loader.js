import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isClient } from '../utils';

class ModuleLoader extends Component {
  state = {
    element: <div>Loading...</div>
  };

  UNSAFE_componentWillMount() {
    const { waitFor, ...props } = this.props;

    if (isClient()) {
      waitFor.then(({ default: Module }) => {
        this.setState({
          element: <Module {...props} />
        });
      });
    } else {
      console.log('wait for', waitFor);
      this.setState(waitFor);
    }
  }

  render() {
    const { element } = this.state;

    return element;
  }
}

ModuleLoader.propTypes = {
  waitFor: PropTypes.any.isRequired
};

export default ModuleLoader;
