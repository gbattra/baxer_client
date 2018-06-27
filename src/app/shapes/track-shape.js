import PropTypes from 'prop-types'


export const track = PropTypes.shape({
  id: PropTypes.int,
  title: PropTypes.string,
  author: PropTypes.string,
  runtime: PropTypes.int,
  trackArtUrl: PropTypes.string
})
