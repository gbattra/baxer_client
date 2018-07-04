import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import { AllDefaults } from '../../tests/defaults/all-defaults'
import {
  Grid
} from 'semantic-ui-react'
import PageHeader from '../../utils/components/page-header'


class UploadPageContainer extends React.Component {

  render() {
    return (
      <Grid>
        <PageHeader icon='upload' label='upload' />
      </Grid>
    )
  }
}

export default UploadPageContainer
