import { track } from './track-shape'
import PropTypes from 'prop-types'


export const playlist = PropTypes.shape({
  id: PropTypes.int,
  name: PropTypes.string,
  trackCount: PropTypes.int,
  runtime: PropTypes.int,
  playlistArtUrl: PropTypes.string,
  color: PropTypes.string,
  isSelected: PropTypes.bool,
  tracks: PropTypes.arrayOf(track)
})
