import React, {Component} from 'react';
import './contact.css';
import EmailForm from '../Components/Email';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
  state={
    showContact: false
  }

  showContact = () => {
    this.setState({
      showContact: !this.state.showContact
    })
  }

render(){
  return (
    <div className="contact-container">
      <div className="mobile-contact" >
      <div className='contact-nav'>
      <Link to='/' className=''>Home</Link>
      <Link to='/aboutme' className=''>About</Link>
      <Link to='/projects' className=''>Projects</Link>
      </div>
      <div className='contact-links'>
      <img className='gh-m-img' src={require('../resources/github-mobile.png')} alt='github'/>
      <img className='li-m-img' src={require('../resources/linkedin-mobile.jpg')} alt='linkedin'/>
      <img className='gm-m-img' onClick={this.showContact} src={require('../resources/gmail-mobile.png')} alt='gmail'/>
      {this.state.showContact ? <EmailForm/> : ''}
      </div>
      </div>
      <div className="full-contact">
        <div className="snapshot-container">
          <div className="linkedin-window">
            <Link to="https://www.linkedin.com/in/jake-derhalli/">
              <img
                src={require('../resources/linkedin.PNG')}
                alt="linkedin-link"
              />
            </Link>
          </div>
          <div className="github-window">
            <Link to="https://github.com/JuiceboxJones">
              <img src={require('../resources/github.PNG')} alt="github-link" />{' '}
            </Link>
          </div>
        </div>
        <div className="gmail-window">
          <div className="app-icons">
            <div className="tar-icon">
              <Link to="/" className="icon-link">
                <img
                  className="icon"
                  name="tar-icon"
                  src={require('../resources/tar.png')}
                  alt="home"
                />
              </Link>
              <label htmlFor="tar-icon">jake.tar.gz</label>
            </div>
            <div className="firefox-icon">
              <Link to="/projects" className="icon-link">
                <img
                  className="icon"
                  name="firefox-icon"
                  src={require('../resources/firefox3.png')}
                  alt="projects"
                />
              </Link>
              <label htmlFor="firefox-icon">Projects</label>
            </div>
          </div>
          <EmailForm />
        </div>
      </div>
    </div>
    );
  }
}
