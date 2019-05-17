import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalContext from '../Context';

class ProjectContent extends Component {
  static contextType = ModalContext


  setPath=(path)=>{
    this.context.setPath({
      path
    })
    this.context.setIsShowing(!this.context.IsShowing)
  }

  render() {
    return (
      <>
      <div className={this.props.class}>
        <div className="project-nav-container">
        <button type='button' className='project-nav' onClick={e => this.setPath('/')}>Home</button>
        <button type='button' className='project-nav' onClick={e => this.setPath('/aboutme')}>About</button>
        <button type='button' className='project-nav' onClick={e => this.setPath('/contact')}>Contact Me</button>
        </div>
        
        <div className='main-content'>
        <br />

        <div className="Squad">
          <h3>Squad Armory</h3>
          <img
            className="project-img"
            src={require('../resources/DashSnap.PNG')}
            alt="Squad Armory screenshot"
          />
          <p>
            React Hooks | CSS3 | PostgreSQL | Node | Express | Nodemailer |
            Socket.io
          </p>
          <p>Online multiplayer matchmaking app with live party chat.</p>
          <a href="https://squad-armory.now.sh/" target="_blank">
            <button type="button" className="project-btn">
              Live
            </button>
          </a>
          <a
            href="https://github.com/JuiceboxJones/The-Armory-Client"
            target="_blank"
          >
            <button type="button" className="project-btn">
              Code
            </button>
          </a>
        </div>

        <div className="Viva">
          <h3>Viva Mexico</h3>
          <img
            className="project-img"
            src={require('../resources/Viva.PNG')}
            alt="Viva Mexico screenshot"
          />
          <p>React | CSS3 | PostgreSQL | Node | Express</p>
          <p>
            Language learning with spaced repetition with a database built
            around a linked list.
          </p>
          <a href="https://viva-mexico.now.sh" target="_blank">
            <button type="button" className="project-btn">
              Live
            </button>
          </a>
          <a href="https://github.com/thinkful-ei-armadillo/spaced-repetition-client-bob-jake"
            target="_blank"
          >
            <button type="button" className="project-btn">
              Code
            </button>
          </a>
        </div>

        <br />

        <div className="Spndr">
          <h3>SPNDR Finance Management</h3>
          <img
            className="project-img"
            src={require('../resources/Spndr.PNG')}
            alt="SPNDR screenshot"
          />
          <p>React | CSS3 | HTML5 | PostgreSQL | Node | Express</p>
          <p>
            An application designed to give you an estimate on how much
            disposable income you will have at the end of each month.{' '}
          </p>
          <a href="https://spndr.herokuapp.com" target="_blank">
            <button type="button" className="project-btn">
              Live
            </button>
          </a>
          <a href="https://github.com/JuiceboxJones/spndr-client"
            target="_blank"
          >
            <button type="button" className="project-btn">
              Code
            </button>
          </a>
        </div>

        <br />

        <div className="Bookmarks">
          <h3>Bookmarks App</h3>
          <img
            className="project-img"
            src={require('../resources/Bookmarks app.png')}
            alt="Bookmark app screenshot"
          />
          <p>HTML | CSS | JS | jQuery | AJAX</p>
          <p>An app that allows you to keep track of your favorite sites.</p>
          <a href="https://thinkful-ei-armadillo.github.io/Jake-Andre-Bookmarks/"
            target="_blank"
          >
            <button type="button" className="project-btn">
              Live
            </button>
          </a>
          <a href="https://github.com/thinkful-ei-armadillo/Jake-Andre-Bookmarks"
            target="_blank"
          >
            <button type="button" className="project-btn">
              Code
            </button>
          </a>
        </div>
        <br/>
        </div>
      </div>
      </>
    );
  }
}

export default ProjectContent;
