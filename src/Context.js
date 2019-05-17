import React, { Component } from 'react'

const ModalContext = React.createContext({
  path: '',
  isShowing:false,
  installDone:false,
  aboutMeDone:false,
  setPath: () => {},
  setIsShowing: () => {},
  setInstallDone: () => {},
  setAboutMeDone: () => {}
 
})

export default ModalContext

export class ModalProvider extends Component {
  state = {
    path: '',
    isShowing:false,
    installDone:false,
    aboutMeDone:false
  };
  setPath = path => {
    this.setState({ path })
  }
  setIsShowing = () => {
    this.setState({ isShowing: !this.state.isShowing })
  }
  setInstallDone = () => {
    this.setState({ installDone: true})
  }
  setAboutMeDone = () => {
    this.setState({ aboutMeDone: true})
  }
 

  render() {
    const value = {
      path: this.state.path,
      isShowing: this.state.isShowing,
      installDone: this.state.installDone,
      aboutMeDone: this.state.aboutMeDone,
      setPath: this.setPath,
      setIsShowing: this.setIsShowing,
      setInstallDone: this.setInstallDone,
      setAboutMeDone: this.setAboutMeDone
      
    }
    return (
      <ModalContext.Provider value={value}>
        {this.props.children}
      </ModalContext.Provider>
    )
  }
}