import PropTypes from 'prop-types'


export const badge = PropTypes.shape({
  color: PropTypes.string,
  image: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.string
})
