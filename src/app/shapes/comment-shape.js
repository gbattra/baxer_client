import PropTypes from 'prop-types'
import { profile } from './profile-shape'


export const comment = PropTypes.shape({
  id: PropTypes.int,
  author: profile,
  body: PropTypes.string,
  datePosted: PropTypes.string
})
