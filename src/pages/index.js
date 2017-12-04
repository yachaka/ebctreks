
import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';

import s from './index.module.scss';
import inlineShadow from '!!base64-image!./shadow.png';

const bckgdImgStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
};

class IndexPage extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <div class="container">
        <Img
          style={bckgdImgStyle}
          sizes={data.trekImage.childImageSharp.sizes}
        />

        <h1 className={s.motto}>
          <img src={inlineShadow} />
          <span className={s.text}>
            Explore Tibet <br />
            <span className={s.gold}>
              like never before.
            </span>
          </span>
        </h1>

      </div>
    );
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    trekImage:file(
      relativePath: { eq: "pages/glorious-himalaya-trek-orig.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 1440, maxHeight: 900, quality: 35) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
  
