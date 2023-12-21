import {Component} from 'react'

import './index.css'

const imageUrl = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },

  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]

class CoinToss extends Component {
  state = {heads: 0, tails: 0, total: 0, actived: imageUrl[0].imageUrl}

  onclicked = () => {
    const {heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({actived: imageUrl[tossResult].imageUrl})

    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }

    this.setState({total: heads + tails})
  }

  render() {
    const {actived, heads, tails, total} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={actived} alt="toss result" className="img" />
          <button type="button" className="button" onClick={this.onclicked}>
            Toss Coin
          </button>
          <div className="paras">
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
