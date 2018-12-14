import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LazyLoading from '../../common/components/LazyLoading'
import { actions as exampleActions } from '../../redux/modules/example'
import { exampleSelector } from '../../redux/selectors/exampleSelector'
import { IdeaCreator } from '../../common/components/Example'
import { ErrorBoundary } from '../../common/components/Utilities'

require('../../../style/index.css')

const mapStateToProps = (state) => ({
  example: exampleSelector(state),
})

const mapDispatchToProps = {
  ...exampleActions,
}

@connect(mapStateToProps, mapDispatchToProps)
class IdeaCreatorView extends Component {
  static propTypes = {
    example: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { getAwesomeCode } = this.props

    getAwesomeCode()
  }

  render() {
    return (
      <ErrorBoundary>
        <IdeaCreator {...this.props} />
      </ErrorBoundary>
    )
  }
}

export default IdeaCreatorView
