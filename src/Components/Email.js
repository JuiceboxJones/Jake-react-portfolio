import React, { Component } from 'react';
import './email.css'
import { restElement } from '@babel/types';
//email and message instead of feedback
export default class EmailForm extends Component {
  state = {
    senderEmail: '',
    emailContent: '',
    emailSubject: '',
    formSubmitted: false
  };


  handleContentChange = (e) => {
    this.setState({
      emailContent: e.target.value
    });
  }
  handleEmailChange = (e) => {
    this.setState({
      senderEmail: e.target.value,
    });
  }
  handleSubjectChange = (e) => {
    this.setState({
      emailSubject: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const {
      REACT_APP_EMAILJS_TEMPLATEID: template,
    } = process.env;

    this.sendEmail(
      template,
      this.state.senderEmail,
      this.state.emailSubject + ' - ' + this.state.emailContent
    );

    this.setState({
      formSubmitted: true
    });

  }

  sendEmail(templateId, senderEmail, emailContent) {
    window.emailjs
    .send("gmail", 
    templateId, 
    {"from_name": senderEmail,
    "message_html": emailContent})
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send email. Error: ', err));
  }

  render() {
    console.log(this.state.emailContent)
    return (
      <div className='email-main-container'>
        <div className='email-form-container'>
          <form className="email-form" onSubmit={this.handleSubmit}>
            <div className='email-header'>
              <h3>Compose Email</h3>
            </div>
            <input type='email' className='email-address' name='email-address' onChange={this.handleEmailChange} placeholder='example@example.com' required />
            <input type='text' className='email-subject' name='email-subject' onChange={this.handleSubjectChange} placeholder='Subject' required />
            <textarea  className="email-body" name="email-body" onChange={this.handleContentChange} required />
            <div className="btn-group">
              <input type="submit" value={this.state.formSubmitted ? "Sent" : "Send"} className="btn-submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
