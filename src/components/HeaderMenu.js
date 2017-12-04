
import React, {
  Component,
} from 'react';
import cx from 'classnames';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { withRouter } from 'react-router-dom';

import Button from './Button';

import s from './HeaderMenu.module.scss';
import shadowImg from '!!base64-image!./shadow-header.png';

class HeaderMenu extends Component {
  static defaultProps = {
    shouldBeWhite: false,
  };

  render() {
    const {
      className,
      location,
      logo,
      shouldBeWhite,
      ...others,
    } = this.props;

    return (
      <div class={s.wrapper}>
        <div className="container"><div className="row"><div className="col-xs-12">
          <nav
            className={cx(
              s.nav,
              shouldBeWhite && s.shouldBeWhite,
            )}
          >
            { shouldBeWhite &&
            <img class={s.shadow} src={shadowImg} /> }

            <ul>
              <li>More</li>
              <li><Button Component={Link} size="medium" type="primary" to="/destinations-nepal-bhutan-india-and-tibet">Contact Us</Button></li>
              <li><Link to="/destinations-nepal-bhutan-india-and-tibet">Trip Styles</Link></li>
              <li><Link to="/destinations-nepal-bhutan-india-and-tibet">Activities</Link></li>
              <li><Link to="/destinations-nepal-bhutan-india-and-tibet">Destinations</Link></li>
            </ul>
          </nav>
        </div></div></div>
      </div>
    );
  }
}

export default withRouter(HeaderMenu);