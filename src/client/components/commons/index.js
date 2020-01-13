import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCommonState } from '../../action';
import Toast from '../toast';
import CopyHandler from '../copy-handler';

class Commons extends PureComponent {
  render() {
    const { toastMsg, includes } = this.props;

    return (
      <React.Fragment>
        {includes.includes(Commons.Types.Toast) && (
          <Toast
            text={toastMsg}
            open={!!toastMsg}
            onClose={() => {
              this.props.setCommonState({ toastMsg: null });
            }}
          />
        )}
        {includes.includes(Commons.Types.Copy) && <CopyHandler />}
      </React.Fragment>
    );
  }
}

Commons.propTypes = {
  setCommonState: PropTypes.func,
  toastMsg: PropTypes.any,
  includes: PropTypes.array
};

Commons.defaultProps = {
  setCommonState: () => {},
  toastMsg: null,
  includes: []
};

Commons.Types = {
  Toast: 'Toast',
  Copy: 'Copy'
};

export default connect(
  state => ({
    toastMsg: state.common.toastMsg
  }),
  {
    setCommonState
  }
)(Commons);
