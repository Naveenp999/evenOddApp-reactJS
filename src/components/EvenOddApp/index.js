import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}
  Increment = () => {
    this.setState(prev => ({
      count: prev.count + Math.ceil(Math.random() * 100),
    }))
  }
  check = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Count {count}</h1>
          <p className="sub-heading">Count is {this.check()}</p>
          <button className="button" type="button" onClick={this.Increment}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
