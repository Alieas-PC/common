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
      const Module = waitFor;

      const element = <Module {...props} />;

      console.log('setState');

      this.setState({ element });
    }
  }

  render() {
    const { element } = this.state;

    console.log('render', element);

    return element;
  }
}

ModuleLoader.propTypes = {
  waitFor: PropTypes.any.isRequired
};

export default ModuleLoader;
