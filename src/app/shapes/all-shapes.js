import { badge } from './badge-shape'
import { playlist } from './playlist-shape'
import { profile } from './profile-shape'
import { route } from './route-shape'
import { track } from './track-shape'
import { feedListItem } from './feed-list-item'
import { trackRank } from './track-rank-shape'
import { comment } from './comment-shape'
import PropTypes from 'prop-types'


export const AllShapes = {
  badge: badge,
  comment: comment,
  feedListItem: feedListItem,
  playlist: playlist,
  profile: profile,
  trackRank: trackRank,
  route: route,
  track: track
}
