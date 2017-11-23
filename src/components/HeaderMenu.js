
import React, {
  Component,
} from 'react';
import cx from 'classnames';
import Link from 'gatsby-link';

import Button from './Button';

import s from './HeaderMenu.module.scss';

class HeaderMenu extends Component {
  
  render() {
    const {
      className,
      ...others,
    } = this.props;

    return (
      <nav className={s.nav}>
        <ul>
          <li><Link to="/destination-nepal-bhutan-india-and-tibet">More</Link></li>
          <li><Button Component={Link} size="medium" type="primary" to="/destination-nepal-bhutan-india-and-tibet">Contact Us</Button></li>
          <li><Link to="/destination-nepal-bhutan-india-and-tibet">Trip Styles</Link></li>
          <li><Link to="/destination-nepal-bhutan-india-and-tibet">Activities</Link></li>
          <li><Link to="/destination-nepal-bhutan-india-and-tibet">Destinations</Link></li>
        </ul>
      </nav>
    );
  }
}

export default HeaderMenu;
