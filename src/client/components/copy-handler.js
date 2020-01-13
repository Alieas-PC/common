import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ClipboardJS from 'clipboard';

const CopyHanlder = () => {
  useEffect(() => {
    new ClipboardJS('.copy').on('success', () => {
      console.log('copied');
    });
  }, []);

  return null;
};

CopyHanlder.propTypes = {};

export default CopyHanlder;
