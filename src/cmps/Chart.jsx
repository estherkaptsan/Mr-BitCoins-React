import React, { Component } from 'react'
import { bitcoinService } from '../services/bitcoin.service';
import { Sparklines,SparklinesBars } from 'react-sparklines';


export class Chart extends Component {
  state = {
    data: null,
  }

  async componentDidMount() {
    this.setMarketPrice()
  }

  setMarketPrice = async () => {
    try {
      const marketPrices = await bitcoinService.getMarketPrice()
      const marketPrice = marketPrices.values.map(value => value.y)
      this.setState({ data: marketPrice })
    } catch (err) {
      console.error('error from getting market price:', err)
      return null
    }
  }

  setConfirmedTransactions = async () => {
    try {
      const confirmedTransactions = await bitcoinService.getConfirmedTransactions()
      const blockSize = confirmedTransactions.values.map(value => value.y)
      this.setState({ data: blockSize })
    } catch (err) {
      console.error('error from getting market price:', err)
      return null
    }
  }

  handleRouteChange = ({ target }) => {
    const dataType = target.value
    if (dataType === 'marketPrice') this.setMarketPrice()
    else if (dataType === 'blockSize') this.setConfirmedTransactions()
  }

  render() {
    const { routeList, data, currRoute } = this.state
    if (!data) return (<div>Loading...</div>)
    return (
      <>
        <div className='chart'>
          <select onChange={this.handleRouteChange}>
            <option value="marketPrice">Market Price</option>
            <option value="blockSize">Block Size</option>
          </select>
        </div>
        <Sparklines data={data.slice(0, 49)} >
          <SparklinesBars />
        </Sparklines>
      </>
    )
  }
}

export default Chart
