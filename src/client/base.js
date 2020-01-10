import React from 'react';
import { connect as reduxConnect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm, formValueSelector } from 'redux-form';
import * as utils from './utils';
import { i18n, withTranslation } from './components/i18n';
import createModelAccess from './model';

const proxyHook = (WrapperComponent, staticProps) =>
  class BASE_HOC extends WrapperComponent {
    constructor(props) {
      super(props);
      // inject utilities from util/index.js to instances
      this.$utils = utils;
      // models access
      this.model = createModelAccess(this);
    }

    setTitle = title => {
      if (utils.isClient()) {
        document.title = title;
      }
    };

    listenLangChange = key => {
      this.setTitle(this.t(key));
    };

    componentDidMount() {
      // proxy the cdm function of containers then we can modify dom title
      const { title, i18nTitleKey } = staticProps;

      if (i18nTitleKey) {
        this.setTitle(this.t(i18nTitleKey));

        i18n.on('languageChanged', () => this.listenLangChange(i18nTitleKey));
      } else if (title) {
        document.title = title;
      }

      if (super.componentDidMount) {
        super.componentDidMount();
      }
    }

    componentWillUnmount() {
      i18n.off('languageChanged', this.listenLangChange);

      if (super.componentWillUnmount) {
        super.componentWillUnmount();
      }
    }
  };

/**
 * wrap components with this magic HOC function
 * for some more useful functionalities
 */
function connect(Component, staticProps = {}) {
  const { fetchInitData, mapState, mapDispatch, form, formProps } = staticProps;

  const oriCom = Component;

  Component = proxyHook(Component, staticProps);

  // supply this.props.location... etc.
  let WrapperComponent = withTranslation()(
    withRouter(reduxConnect(mapState || (() => ({})), mapDispatch)(Component))
  );

  // if form prop of the container exists, we wrap the container with reduxForm for using `redux-form` functionalities.
  if (form) {
    WrapperComponent = reduxForm({
      form,
      ...formProps
    })(WrapperComponent);

    const selector = formValueSelector(form);

    /* eslint-disable no-param-reassign */
    oriCom.getFormValues = function getFormValues(state, names = []) {
      if (!names.length) {
        return {};
      } else if (names.length === 1) {
        const first = names[0];

        return { [first]: selector(state, first) };
      }
      return selector(state, ...names);
    };
  }

  WrapperComponent.fetchInitData = fetchInitData;

  return WrapperComponent;
}

export default connect;
