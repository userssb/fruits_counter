import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mcount: 0,
    bcount: 0,
  }

  mincrement = () => {
    this.setState(prevstate => ({mcount: prevstate.mcount + 1}))
  }

  bincrement = () => {
    this.setState(prevstate => ({bcount: prevstate.bcount + 1}))
  }

  render() {
    const {mcount, bcount} = this.state

    return (
      <div className="bg-cont">
        <div className="fruits-cont">
          <h1 className="count-text">
            Bob ate <span className="count">{mcount}</span> mangoes
            <span className="count"> {bcount}</span> bananas
          </h1>
          <div className="card-cont">
            <div className="man-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button className="button" onClick={this.mincrement}>
                Eat Mango
              </button>
            </div>
            <div className="ban-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button className="button" onClick={this.bincrement}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
