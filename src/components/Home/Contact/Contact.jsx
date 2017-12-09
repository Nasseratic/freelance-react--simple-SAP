import React from 'react';
import './Contact.css';

export class Contact extends React.Component {

  render() {
    return (
      <div id="contact" className="contact">
        <h1 className="is-size-2 has-text-centered" > CONTACT US </h1>
        <br />
        <br />
        <div className="container hero-body">
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="e.g Alex Smith" />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
              </div>
              <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                  <input className="input" type="phone" placeholder="e.g. +966509699701" />
                </div>
              </div>
            </div>



            <div className="column">
            <div className="field">
                <label className="label">Company</label>
                <div className="control">
                  <input className="input" type="text" placeholder="e.g. lamaatech" />
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Textarea"></textarea>
                </div>
              </div>
              <a className="button submitButton">SUBMIT</a>
            </div>

          </div>

          <div className="columns">
            <div className="column">

              <div className="column">
                <div className="columns infoDiv">
                  <div className="column s-icon">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                    </span>
                  </div>
                  <div className="column is-11">
                    <p className="contactInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
                <div className="columns infoDiv">
                  <div className="column s-icon">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                    </span>
                  </div>
                  <div className="column is-11">
                    <p className="contactInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>

                <div className="columns infoDiv">
                  <div className="column s-icon">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
                    </span>
                  </div>
                  <div className="column is-11">
                    <p className="contactInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="column divFollow">
                    <div className="columns">
                      <h1 className="followus">Follow Us</h1>
                    </div>
                    <div className="columns" >
                      <div className="column">
                        <a href="/">
                          <i className="fa fa-instagram fa-4x socialIcon" aria-hidden="true"></i>
                        </a>
                      </div>
                      <div className="column">
                        <a href="/">
                          <i className="fa fa-twitter fa-4x socialIcon" aria-hidden="true"></i>
                        </a>
                      </div>
                      <div className="column">
                        <a href="/">
                          <span className="fa-stack fa-2x  socialIcon">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div> */}
          </div>
        </div>

      </div>

    );
  }
}

