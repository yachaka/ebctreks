
import React, { PureComponent } from 'react';
import cx from 'classnames';
import Img from 'gatsby-image';

import s from './BackgroundImageHero.module.scss';

const ImgStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
};

export default class BackgroundImageHero extends PureComponent {
  render() {
    const { className, children, sizes, ...others } = this.props;

    return (
      <div class={cx(s.hero, className)} {...others}>
        {children}
        <Img
          style={ImgStyle}
          sizes={sizes}
        />
      </div>
    );
  }
}
