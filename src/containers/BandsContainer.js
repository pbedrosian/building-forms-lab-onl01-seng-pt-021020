import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
import { connect } from 'react-redux';


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mSTP = ({ bands }) => ({ bands })

const mDTP = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mSTP, mDTP)(BandsContainer)
