import PropTypes from 'prop-types'
import { trackRank } from './track-rank-shape'
import { comment } from './comment-shape'


export const track = PropTypes.shape({
  id: PropTypes.int,
  title: PropTypes.string,
  author: PropTypes.string,
  runtime: PropTypes.int,
  trackArtUrl: PropTypes.string,
  rank: trackRank,
  comments: PropTypes.arrayOf(comment)
})
