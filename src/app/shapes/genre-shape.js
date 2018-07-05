import PropTypes from 'prop-types'


export const genre = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.number,
  image: PropTypes.shape({
    avatar: PropTypes.bool,
    src: PropTypes.string
  })
})
