import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isClient } from '../utils';

class ModuleLoader extends Component {
  state = {
    element: <div>Loading...</div>
  };

  UNSAFE_componentWillMount() {
    const { waitFor, ...props } = this.props;

    if (!isClient()) {
      const Module = waitFor;

      const element = <Module {...props} />;

      this.setState({ element });
    }
  }

  componentDidMount() {
    const { waitFor, ...props } = this.props;

    waitFor.then(({ default: Module }) => {
      this.setState({
        element: <Module {...props} />
      });
    });
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
