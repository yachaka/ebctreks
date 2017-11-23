
import React, {
  Component,
} from 'react';
import cx from 'classnames';
import Link from 'gatsby-link';
import { withRouter } from 'react-router-dom';

import Button from './Button';

import s from './HeaderMenu.module.scss';
import img from '../pages/shadow-header.png';

class HeaderMenu extends Component {
  
  static defaultProps = {
    fullWidth: false,
  };

  render() {
    const {
      className,
      location,
      ...others,
    } = this.props;

    const isHome = location.pathname === '/';

    return (
      <div className={isHome && s.whiteBckgds}>
        <div className="container"><div className="row"><div className="col-xs-12">
          <nav className={cx(s.nav, !isHome && s.borderBottom)} style={{ position: 'relative' }}>
            <img src={img} style={{ position: 'absolute', right: '-284px', top: '-34px' }} />
            <ul style={{ position: 'relative' }}>
              <li class="link-lookalike" style={{ color: 'white' }}>More</li>
              <li><Button Component={Link} size="medium" type="primary" style={{ color: 'white' }} to="/destination-nepal-bhutan-india-and-tibet">Contact Us</Button></li>
              <li><Link to="/destination-nepal-bhutan-india-and-tibet" style={{ color: 'white' }}>Trip Styles</Link></li>
              <li><Link to="/destination-nepal-bhutan-india-and-tibet" style={{ color: 'white' }}>Activities</Link></li>
              <li><Link to="/destination-nepal-bhutan-india-and-tibet" style={{ color: 'white' }}>Destinations</Link></li>
            </ul>
          </nav>
        </div></div></div>
      </div>
    );
  }
}

export default withRouter(HeaderMenu);
