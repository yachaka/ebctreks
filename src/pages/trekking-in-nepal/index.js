
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
          id={s.hero}
          sizes={data.trekkingImg.childImageSharp.sizes}
        >
          <div class="container">
            <h1>Explore Nepal</h1>
          </div>
        </BackgroundImageHero>

        <div class="container">
          <h3 id={s.presentationTitle}>
            A word about Nepal
          </h3>
          <p id={s.presentation}>
            Nepal is the home country of the most of us. We originate from Kathmandu ; but we've seen every piece of dirt available on this mother earth. From the sky to the forests, nature is imperial ; and Nepal is also the home of the highest summit of the world, the Everest.
          </p>

          <h3 id={s.tripsTitle}>Popular Trips</h3>

          <div id={s.trips}>
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class={s.trip}>
                  <Img
                    class={s.img}
                    sizes={data.everestImg.childImageSharp.sizes}
                  />
                  <div class={s.infos}>
                    <h5>Everest Base Camp Trek</h5>
                    <h6>7 days, 6 nights • Hard</h6>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class={s.trip}>
                  <Img
                    class={s.img}
                    sizes={data.annapurnaImg.childImageSharp.sizes}
                  />
                  <div class={s.infos}>
                    <h5>Annapurna I Trek</h5>
                    <h6>15 days, 14 nights • Medium</h6>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class={s.trip}>
                  <Img
                    class={s.img}
                    sizes={data.everestImg.childImageSharp.sizes}
                  />
                  <div class={s.infos}>
                    <h5>Everest Base Camp Trek</h5>
                    <h6>7 days, 6 nights • Hard</h6>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class={s.trip}>
                  <Img
                    class={s.img}
                    sizes={data.annapurnaImg.childImageSharp.sizes}
                  />
                  <div class={s.infos}>
                    <h5>Annapurna I Trek</h5>
                    <h6>15 days, 14 nights • Medium</h6>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class={s.trip}>
                  <Img
                    class={s.img}
                    sizes={data.everestImg.childImageSharp.sizes}
                  />
                  <div class={s.infos}>
                    <h5>Everest Base Camp Trek</h5>
                    <h6>7 days, 6 nights • Hard</h6>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class={s.trip}>
                  <Img
                    class={s.img}
                    sizes={data.annapurnaImg.childImageSharp.sizes}
                  />
                  <div class={s.infos}>
                    <h5>Annapurna I Trek</h5>
                    <h6>15 days, 14 nights • Medium</h6>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export const query = graphql`
  query NepalQuery {
    trekkingImg:file(relativePath: { eq: "pages/trekking-in-nepal/illustration-nepal.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1440, quality: 40) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    everestImg:file(relativePath: { eq: "pages/trekking-in-nepal/trips/everest.jpg" }) {
      ...TripImgAttention
    }
    annapurnaImg:file(relativePath: { eq: "pages/trekking-in-nepal/trips/annapurna.jpg" }) {
      ...TripImgNorth
    }
  }

  fragment TripImgAttention on File {
    childImageSharp {
      sizes(maxWidth: 555, maxHeight: 245, quality: 40, cropFocus: ATTENTION) {
        ...GatsbyImageSharpSizes
      }
    }
  }

  fragment TripImgNorth on File {
    childImageSharp {
      sizes(maxWidth: 555, maxHeight: 245, quality: 40, cropFocus: NORTH) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;