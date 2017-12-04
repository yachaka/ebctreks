
import React, { PureComponent } from 'react';
import cx from 'classnames';
import Link from 'gatsby-link';

import s from './Footer.module.scss';
import Button from './Button';

export default class Footer extends PureComponent {
  render() {
    return (
      <div>
        <div class={s.cta}>
          <div class="container"><div class="row"><div class="col-xs-12">
            <p>Are you interested in going on a journey ?</p>
            <Button size="big" type="primary">
              Contact Us!
            </Button>
          </div></div></div>
        </div>

        <div class="container"><div class="row"><div class="col-xs-12">
          <footer class={s.footer}>
            <ul>
              <li><Link to="/contact">Q&A</Link></li>
              <li><Link to="/contact">Legal Documents</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

            <p class={s.notice}>
              E.B.C. Treks Expeditions is a registered trekking company is Nepal. We are a group of authorized and certified professional guides. <br />
              &copy; 2017 All Rights reserved
            </p>
          </footer>
        </div></div></div>
      </div>
    );
  }
}