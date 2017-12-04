
import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';

import s from './index.module.scss';
import BackgroundImageHero from '../../components/BackgroundImageHero';

export default class NepalPage extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <div id={s.destination}>
        <BackgroundImageHero
          sizes={data.tibet.childImageSharp.sizes}
        >
          <div class="container">
            <h1>Explore Nepal</h1>
          </div>
        </BackgroundImageHero>
      </div>
    );
  }
}

export const query = graphql`
  query TibetQuery {
    tibet:file(
      relativePath: { eq: "pages/trekking-in-tibet/illustration-tibet.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 1440, quality: 40) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;