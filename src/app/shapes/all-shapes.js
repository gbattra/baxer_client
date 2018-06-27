import { badge } from './badge-shape'
import { playlist } from './playlist-shape'
import { profile } from './profile-shape'
import { route } from './route-shape'
import { track } from './track-shape'
import PropTypes from 'prop-types'


export const AllShapes = PropTypes.shape({
  badge: badge,
  playlist: playlist,
  profile: profile,
  route: route,
  track: track
})
