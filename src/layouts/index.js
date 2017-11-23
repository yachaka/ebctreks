import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'reset-css/reset.css';
import 'bootstrap-grid/dist/grid.min.css';
import s from './index.module.scss';

import HeaderMenu from '../components/HeaderMenu';

const TemplateWrapper = ({ match, children }) => (
  <div>
    <HeaderMenu fullWidth />
    <div class="container">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
