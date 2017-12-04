
import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'reset-css/reset.css';
import 'bootstrap-grid/dist/grid.min.css';
import s from './index.module.scss';

import HeaderMenu from '../components/HeaderMenu';
import Footer from '../components/Footer';

class Layout extends PureComponent {
  render() {
    const { data, location, match, children } = this.props;

    const isDestinationPage = location && (
      location.pathname === '/trekking-in-nepal'
      || location.pathname === '/trekking-in-tibet'
      || location.pathname === '/trekking-in-bhutan'
      || location.pathname === '/trekking-in-india'
    );
    const isHomePage = location && location.pathname === '/';

    const shouldBeWhite = isDestinationPage || isHomePage;
    const shouldAddPaddingTop = !isDestinationPage;

    return (
      <div class={shouldAddPaddingTop && s.topPadding}>
        <HeaderMenu
          logo={data.logo}
          shouldBeWhite={shouldBeWhite}
        />
        {children()}
        { location && location.pathname !== '/' &&
        <Footer /> }
      </div>
    );
  }
}

export default Layout

export const myQuery = graphql`
  query HeaderMenuQuery {
    logo:file(
      relativePath: { eq: "components/logo.jpg" }
    ) {
      childImageSharp {
        resolutions(width: 61, height: 60, quality: 40) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;