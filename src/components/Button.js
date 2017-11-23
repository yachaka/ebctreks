
import React, { Component } from 'react';
import cx from 'classnames';

import s from './Button.module.scss';

class Button extends Component {
  static defaultProps = {
    Component: 'a',
  };

  render() {
    const {
      className,
      children,
      Component,

      type,
      size,
      ...others,
    } = this.props;

    return (
      <Component
        className={cx(s.button, s[type], s[size], className)}
        {...others}
      >
        {this.props.children}
      </Component>
    );
  }
}

export default Button;
