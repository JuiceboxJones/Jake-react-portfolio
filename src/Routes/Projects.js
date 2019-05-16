import React, { Component } from 'react';
import Typist from 'react-typist';
import './projects.css';
import ProjectContent from '../Components/ProjectContent';
import Modal from '../Modal/Modal';
import ModalContext from '../Context';


class Projects extends Component {
static contextType = ModalContext
  state = {
    urlTyped: false
  }

  
  doneTyping=()=>{
    setTimeout(() => {
      this.setState({
        urlTyped:true
      })
    }, 1000);
  }

  hide=()=>{
    this.context.setIsShowing(!this.context.IsShowing)
  }

  render() {
    console.log(this.context.path)
    return (
      <div className="project-page">
      <div className='mobile-projects'>
      <ProjectContent/>
      </div>
        <div className="project-page-container">
          <div className={!this.state.urlTyped ? "browser-window-loading" : "browser-window-loaded"}>
            <div className="browser-bar">
              <div className="search-pos">
                <div className="search-bar">
                  <Typist
                    onTypingDone={this.doneTyping}
                    avgTypingDelay={90}
                    startDelay={1000}
                    cursor={{
                      blink: true,
                      hideWhenDone: true,
                      hideWhenDoneDelay: 100,
                      element: '|'
                    }}
                  >
                    http://www.jake-derhalli.com/projects
                  </Typist>
                </div>
              </div>
            </div>
            <div className='display-projects-container'>
            <div className='display-projects'>
            <br/>
            <ProjectContent class={!this.state.urlTyped ? 'hidden' : 'project-container'}/>
            </div>
            </div>
          </div>
            <Modal isShowing={this.context.isShowing} path={this.context.path} hide={this.hide}/>
        </div>
      </div>
    );
  }
}

export default Projects;
