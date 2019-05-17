import React, { Component } from 'react';
import ModalContext from '../Context'

export default class Counter extends Component {
  static contextType = ModalContext;
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      message: ''
    }
  }
  
  componentDidMount() {
    this.inter = setInterval(() => {
      if (this.state.count >= 100) {
        clearInterval(this.inter);
        this.setState({
          message: 'Done'
        }, () => {
          this.context.setInstallDone()
        }); 
      } else {
        this.setState((prevState) => ({count: prevState.count + 1})); 
      }
    }, 30);
  }
  
  componentWillUnmount() {
    clearInterval(this.inter);
  }
  
  render() {
    return (
      <div>
          {this.state.message ? this.state.message : this.state.count + '%'}
      </div>
    )
  }
}