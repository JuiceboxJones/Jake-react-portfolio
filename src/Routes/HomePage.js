import React from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';
import '../Components/terminal.css'
import './HomePage.css'
import Counter from './Counter';
import ModalContext from '../Context'

class HomePage extends React.Component {
  static contextType = ModalContext;
  state = {
    renderMsg: false,
    count: 0
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
        <div className='entryCommand'>
        <span className='root'>root@kali:~# </span>{!this.context.installDone ?<Typist 
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
          </Typist> : ' sudo apt-get install jake.tar.gz'}
        </div>
        <div className={!this.context.installDone ? 'installing' : 'hidden'}>
        {this.state.renderMsg ? 'Reading package lists...' : '' } {this.state.renderMsg ? <Counter/> : '' }
        </div>
        <div className={this.context.installDone ? 'installing' : 'hidden'}>Reading package lists...Done</div>
          <div className="HomePage-content">
            <div className="HomePage-message">
            {this.context.installDone ? <>
                <br/>
                Hello friend.
                <br />
                My name is Jake Derhalli.
                <br />
                I'm a full-stack web developer from Portland, Oregon.
                <br />
                To continue, select one of the options below.
                <br />
                <br />
                <span> <Link to='/aboutme' className="nav-link" tabIndex='0'> /About Me </Link></span>{' '}
                <br />
                <br />               
                {' '}<span> <Link to='/projects' className="nav-link"> /Projects </Link></span>{' '}                
                <br />
                <br />
                {' '}<span> <Link to='/contact' className="nav-link"> /Contact Me </Link></span>
                <br />
                {''}
               </> : ''}
              </div>
              {this.context.installDone ? <Typist
                className="HomePage-message"
                avgTypingDelay={65}
                startDelay={2000}
                cursor={{ 
                  blink: true,
                  element: '▮'}}
              /> : ''}
          </div>
        </div>
      </div>
    );
  }

}

export default HomePage;
 
