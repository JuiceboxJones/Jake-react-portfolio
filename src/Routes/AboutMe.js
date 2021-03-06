import React from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';
import '../Components/terminal.css';
import './aboutMe.css';
import ModalContext from '../Context'

class AboutMe extends React.Component {
  static contextType = ModalContext;
  state = {
    renderMsg: false,
    clearLoad: false
  };

  //create loading effect
  //once loaded, display about me

  load = () => {
    this.setState({
      clearLoad: true
    });
    setTimeout(() => {
      this.setState({
        renderMsg: true
      });
    }, 5000);
  };

  render() {
    return (
      <div className="AboutMe-background">
        <div className="Terminal">
          <div className="windowBar">
          <span className='window-header'>root@kali:~</span>
          <div className='button-menu'>
          <button type='button' disabled aria-label='mock-button' className='exit'></button>
          <button type='button' disabled aria-label='mock-button' className='minimize'></button>
          <button type='button' disabled aria-label='mock-button' className='expand'></button>
          </div>
          <p/>
          <div className='menu-bar-container'>
          <span className='menu-bar'>File</span>
          <span className='menu-bar'>Edit</span>
          <span className='menu-bar'>View</span>
          <span className='menu-bar'>Search</span>
          <span className='menu-bar'>Terminal</span>
          <span className='menu-bar'>Help</span>
          </div>
          </div>
          <div className="AboutMe-content">
            <div className={this.state.clearLoad ? 'hidden' : 'visible'}>
              <Typist
                onTypingDone={this.load}
                avgTypingDelay={80}
                startDelay={1000}
                cursor={{
                  show: false,
                  blink: true,
                  element: '▮'
                }}
              >
                Loading...................
                {''}
              </Typist>
            </div>
            <div className={this.state.clearLoad ? 'visible' : 'hidden'}>
              <div className="aboutMe-heading">-About Me-</div>
              <p>
                I am a web developer with a passion to build and create. My
                creative personality has led me from custom metal fabrication to
                coding, where I can share my ideas with the world. I enjoy
                creating solutions for unique problems that challenge my
                abilities
              </p>
              <br />
              <p>
                When I’m not practicing keyboard shortcuts, you might find me
                flying race drones, snowboarding on Mount Hood, or walking my
                dog, Scarlett. Creativity plays a huge role in my life and I
                hope to bring some into yours!
              </p>
              <div className="aboutMe-heading">-Skills-</div>
              <br />
              {!this.context.aboutMeDone ? <Typist
                className="skills-message"
                onTypingDone={this.context.setAboutMeDone}
                avgTypingDelay={40}
                startDelay={4000}
                cursor={{
                  blink: true,
                  element: '▮'
                }}
              >
                <span className="skill-title">Front-End​</span>: HTML5, CSS3,
                JavaScript ES6, jQuery, React, React Hooks.
                <Typist.Delay ms={750} />
                <br />
                <br />
                <span className="skill-title">Back-End</span>​: PostgreSQL,
                Node, Express, JSON, JWT, Rest APIs, Authentication.
                <Typist.Delay ms={750} />
                <br />
                <br />
                <span className="skill-title">Tools/Methods​</span>: Git /
                GitHub, Heroku, Mocha & Chai testing, mobile development,
                responsive design.
                <br/>
                <Typist.Delay ms={750} />
                <br />
                <span> <Link to='/' className="nav-link" tabIndex='0'> /Home </Link></span>
                <br />
                <Typist.Delay ms={750} />
                <br />
                <span> <Link to='/projects' className="nav-link"> /Projects </Link></span>
                <br />
                <Typist.Delay ms={750} />
                <br />
                <span> <Link to='/contact' className="nav-link"> /Contact Me </Link></span>
                <br />
                {''}
              </Typist> : 
              <div className="skills-message">
              <span className="skill-title">Front-End​</span>: HTML5, CSS3,
                JavaScript ES6, jQuery, React, React Hooks.
                <br />
                <br />
                <span className="skill-title">Back-End</span>​: PostgreSQL,
                Node, Express, JSON, JWT, Rest APIs, Authentication.
                <br />
                <br />
                <span className="skill-title">Tools/Methods​</span>: Git /
                GitHub, Heroku, Mocha & Chai testing, mobile development,
                responsive design.
                <br/>
                <br />
                <span> <Link to='/' className="nav-link" tabIndex='0'> /Home </Link></span>
                <br />
                <br />
                <span> <Link to='/projects' className="nav-link"> /Projects </Link></span>
                <br />
                <br />
                <span> <Link to='/contact' className="nav-link"> /Contact Me </Link></span>
                <br />
                {''}
                <Typist
                className="skills-message"
                avgTypingDelay={40}
                startDelay={4000}
                cursor={{
                  blink: true,
                  element: '▮'
                }}
              />
              </div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
