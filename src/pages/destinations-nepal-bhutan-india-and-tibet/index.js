
import React, { PureComponent } from 'react';
import cx from 'classnames';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import s from './index.module.scss';

export default class DestinationsPage extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <div id={s.destinations} class="container">
        <div class="row"><div class="col-xs-12">
          <h1>Destinations</h1>
          <h3>Discover below where I can take you to an awesome journey.</h3>
        </div></div>

        <Link to="/trekking-in-bhutan"  class={cx(s.card, s.textRight)}>
          <div class={cx('row')}><div class="col-xs-12">
            <div class={s.heading}><h4>Bhutan</h4></div>
          </div></div>
          <div class="row">
            <div class="col-xs-4">
              <Img class={s.imgs} sizes={data.bhutanImg.childImageSharp.sizes} />
            </div>
            <div class="col-xs-8">
              <p class={s.presentation}>
                Bhutan is the home of the peaceful one. I've already been to many trip im Bhutan ; is it a beautiful journey that will make you experience amazing feelings. Meet me there.
              </p>
            </div>
          </div>
        </Link>

        <hr />

        <div class={s.testimonial}>
          <h5>They traveled with us</h5>

          <div class="row"><div class="col-xs-12">
            <div class={s.author}>
              <div class={s.pic}>
              </div>
              <p class={s.name}>
                Ilyes Hermellin
              </p>
            </div>
            <blockquote class={s.story}>
              "I traveled with Thile to Bhutan in April 2016.<br />
              It definitely was one of the best experience I've ever had! Thile took care of everthing and I felt like a king. The views were incredible, and the journey was almost a spiritual one. Don't hesitate ;)
            </blockquote>
          </div>
        </div></div>

        <hr />

        <Link to="/trekking-in-tibet" class={cx(s.card, s.textLeft)}>
          <div class={cx('row')}><div class="col-xs-12">
            <div class={s.heading}><h4>Tibet</h4></div>
          </div></div>
          <div class="row">
            <div class="col-xs-8">
              <p class={s.presentation}>
                Bhutan is the home of the peaceful one. I've already been to many trip im Bhutan ; is it a beautiful journey that will make you experience amazing feelings. Meet me there.
              </p>
            </div>
            <div class="col-xs-4">
              <Img class={s.imgs} sizes={data.tibetImg.childImageSharp.sizes} />
            </div>
          </div>
        </Link>

        <Link to="/trekking-in-nepal" class={cx(s.card, s.textRight)}>
          <div class={cx('row')}><div class="col-xs-12">
            <div class={s.heading}><h4>Nepal</h4></div>
          </div></div>
          <div class="row">
            <div class="col-xs-4">
              <Img class={s.imgs} sizes={data.nepalImg.childImageSharp.sizes} />
            </div>
            <div class="col-xs-8">
              <p class={s.presentation}>
                Bhutan is the home of the peaceful one. I've already been to many trip im Bhutan ; is it a beautiful journey that will make you experience amazing feelings. Meet me there.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/trekking-in-india"  class={cx(s.card, s.textLeft)}>
          <div class={cx('row')}><div class="col-xs-12">
            <div class={s.heading}><h4>India</h4></div>
          </div></div>
          <div class="row">
            <div class="col-xs-8">
              <p class={s.presentation}>
                Bhutan is the home of the peaceful one. I've already been to many trip im Bhutan ; is it a beautiful journey that will make you experience amazing feelings. Meet me there.
              </p>
            </div>
            <div class="col-xs-4">
              <Img class={s.imgs} sizes={data.indiaImg.childImageSharp.sizes} />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export const query = graphql`
  query DestinationsQuery {
    nepalImg:file(relativePath: { eq: "pages/trekking-in-nepal/illustration-nepal.jpg" }) {
      ...Img
    }
    tibetImg:file(relativePath: { eq: "pages/trekking-in-tibet/illustration-tibet.jpg" }) {
      ...Img
    }
    indiaImg:file(relativePath: { eq: "pages/trekking-in-india/illustration-india.jpg" }) {
      ...Img
    }
    bhutanImg:file(relativePath: { eq: "pages/trekking-in-bhutan/illustration-bhutan.jpg" }) {
      ...Img
    }
  }

  fragment Img on File {
    childImageSharp {
      sizes(maxWidth: 360, maxHeight: 300, quality: 40) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;