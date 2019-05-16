import React, { Component } from 'react'

const ModalContext = React.createContext({
  path: '',
  isShowing:false,
  setPath: () => {},
  setIsShowing: () => {},
 
})

export default ModalContext

export class ModalProvider extends Component {
  state = {
    path: '',
    isShowing:false
  };
  setPath = path => {
    this.setState({ path })
  }
  setIsShowing = () => {
    this.setState({ isShowing: !this.state.isShowing })
  }

  render() {
    const value = {
      path: this.state.path,
      isShowing: this.state.isShowing,
      setPath: this.setPath,
      setIsShowing: this.setIsShowing
      
    }
    return (
      <ModalContext.Provider value={value}>
        {this.props.children}
      </ModalContext.Provider>
    )
  }
}