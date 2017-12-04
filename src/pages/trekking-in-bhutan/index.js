
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
          sizes={data.bhutan.childImageSharp.sizes}
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
  query BhutanQuery {
    bhutan:file(
      relativePath: { eq: "pages/trekking-in-bhutan/illustration-bhutan.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 1440, quality: 40) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;