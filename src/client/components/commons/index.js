import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCommonState } from '../../action';
import Toast from '../toast';

class Commons extends PureComponent {
  render() {
    const { toastMsg } = this.props;

    return (
      <React.Fragment>
        <Toast
          text={toastMsg}
          open={!!toastMsg}
          onClose={() => {
            this.props.setCommonState({ toastMsg: null });
          }}
        />
      </React.Fragment>
    );
  }
}

Commons.propTypes = {
  setCommonState: PropTypes.func,
  toastMsg: PropTypes.any
};

Commons.defaultProps = {
  setCommonState: () => {},
  toastMsg: null
};

export default connect(
  state => ({
    toastMsg: state.common.toastMsg
  }),
  {
    setCommonState
  }
)(Commons);
