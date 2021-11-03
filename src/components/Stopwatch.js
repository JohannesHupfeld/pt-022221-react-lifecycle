import React, { Component } from 'react'

export default class Stopwatch extends Component {
  state = {
    timer: 0
  }

  componentDidMount(){
    this.ticker = setInterval(() => {
      this.setState(prevState => ({
        timer: prevState.timer + 1
      }))
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.ticker)
  }

  render() {
    return (
      <span>
        {this.state.timer}
      </span>
    )
  }
}
