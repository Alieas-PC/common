import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ModuleLoader = ({ waitFor, ...props }) => {
  const [element, setElement] = useState(<div>Loading...</div>);

  useEffect(() => {
    waitFor.then(({ default: Component }) => {
      setElement(<Component {...props} />);
    });
  }, []);

  return element;
};

ModuleLoader.propTypes = {
  waitFor: PropTypes.any.isRequired
};

export default ModuleLoader;
