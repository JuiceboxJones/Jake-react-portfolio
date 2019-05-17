import React from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';
import '../Components/terminal.css'
import './HomePage.css'

class HomePage extends React.Component {

  state = {
    renderMsg: false,
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }

  render() {
    return (
      <div className='Homepage-background'>
        <div className="Terminal">
        <div className='windowBar'>
          <span className='window-header'>root@kali:~</span>
          <div className='button-menu'>
          <button type='button' disabled className='exit'></button>
          <button type='button' disabled className='minimize'></button>
          <button type='button' disabled className='expand'></button>
          </div>
          <p/>
          <span className='menu-bar'>File</span>
          <span className='menu-bar'>Edit</span>
          <span className='menu-bar'>View</span>
          <span className='menu-bar'>Search</span>
          <span className='menu-bar'>Terminal</span>
          <span className='menu-bar'>Help</span>
        </div>
        <div className='entryCommand'>
        <span className='root'>root@kali:~# </span><Typist 
        onTypingDone={this.onHeaderTyped}
        avgTypingDelay={90} 
        startDelay={1000} 
        cursor={{
          blink:true,
          hideWhenDone: true,
          hideWhenDoneDelay: 100, 
          element: '▮'}}>
          {' '} sudo apt-get install jake.tar.gz
          <br/>
          </Typist>
        </div>
          <div className="HomePage-content">
              {this.state.renderMsg ? <Typist
                className="HomePage-message"
                avgTypingDelay={65}
                startDelay={2000}
                cursor={{ 
                  blink: true,
                  element: '▮'}}
              > <br/>
                Hello friend.
                <br />
                <Typist.Delay ms={1250} />
                My name is Jake Derhalli.
                <Typist.Delay ms={1250} />
                <br />
                I'm a full-stack web developer and clever solutions provider.
                <Typist.Delay ms={1250} />
                <br />
                To continue, select one of<Typist.Delay ms={500} /> the optoins
                <Typist.Backspace count={6} delay={1000} />
                <Typist.Delay ms={750} />
                ptions below.
                <br/>
                <Typist.Delay ms={1250} />
                <br />
                <span> <Link to='/aboutme' className="nav-link" tabIndex='0'> /About Me </Link></span>
                <br />
                <Typist.Delay ms={1250} />
                <br />
                <span> <Link to='/projects' className="nav-link"> /Projects </Link></span>
                <br />
                <Typist.Delay ms={1250} />
                <br />
                <span> <Link to='/contact' className="nav-link"> /Contact Me </Link></span>
                <br />
                {''}
              </Typist> : ''}
          </div>
        </div>
      </div>
    );
  }

}

export default HomePage;
 
