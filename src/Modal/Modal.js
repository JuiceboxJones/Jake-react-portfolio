import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './modal.css'

function Modal({ isShowing, hide, path }){
  const linkPath = path.path;
  return(
  isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
        jakethedeveloper.com says
        </div>
        <p>
          Are you sure you want to leave this page?
        </p>
          <Link to={linkPath}><button 
          type="button" 
          className="modal-confirm-button" 
          data-dismiss="modal" 
          aria-label="Confirm"
          onClick={e => hide()} 
          >
            OK
          </button></Link>
          <button 
          type="button" 
          className="modal-close-button" 
          data-dismiss="modal" 
          aria-label="Close" 
          onClick={e => hide()}>
            Cancel
          </button>
      </div>
    </div>
  </React.Fragment>, document.body
) : null)
}

export default Modal;