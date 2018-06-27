import { badge } from './badge-shape'
import PropTypes from 'prop-types'


export const profile = PropTypes.shape({
  id: PropTypes.int,
  color: PropTypes.string,
  profileImageUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  dateJoined: PropTypes.string,
  location: PropTypes.string,
  badges: PropTypes.arrayOf(badge)
})
