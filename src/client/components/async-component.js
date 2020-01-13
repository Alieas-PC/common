import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AsyncComponent = ({ waitFor, ...props }) => {
  const com = useState('Loading...');

  useEffect(() => {
    waitFor.then(({ default: Component }) => {
      useState(<Component {...props} />);
    });
  }, []);

  return com;
};

AsyncComponent.propTypes = {
  waitFor: PropTypes.any.isRequired
};

export default AsyncComponent;
