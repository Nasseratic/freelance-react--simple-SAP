import React from 'react';
import './Contact.css';
import firebase from 'firebase';

export class Contact extends React.Component {
  constructor(props) {
    super();
    this.state= { contact : {} }
  }

  componentDidMount(){
    var config = {
      apiKey: "AIzaSyDPuwC9d-YJ5XtRpOCQGtbLRjzGSJrwcp8",
      authDomain: "simple-api-1545.firebaseapp.com",
      databaseURL: "https://simple-api-1545.firebaseio.com",
      };
      try {
          firebase.initializeApp(config)
      } catch (err) {
          // we skip the "already exists" message which is
          // not an actual error when we're hot-reloading
          if (!/already exists/.test(err.message)) {
          console.error('Firebase initialization error', err.stack)
          }
      }
      
      var database = firebase.database();
      firebase.database().ref('contact').once('value').then((res) => {
          this.setState({contact : res.val()});
      });
  }
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
                <label className="label">PHONE</label>
                <div className="control">
                  <input className="input is-size-5" value={ this.state.contact.phone || ".........."} type="text" placeholder="" />
                </div>
              </div>
              <div className="field">
                <label className="label">FAX</label>
                <div className="control">
                  <input className="input is-size-5" value={ this.state.contact.fax ||".........."} type="text" />
                </div>
              </div>
              <div className="field">
                <label className="label">EMAIL</label>
                <div className="control">
                  <input className="input is-size-5" value={ this.state.contact.email || ".........." } type="email" placeholder="" />
                </div>
              </div>
              
              <div className="field">
                <label className="label">ADDRESS</label>
                <div className="control">
                  <input className="input is-size-5" value={ this.state.contact.address ||".........."} type="text" placeholder="" />
                </div>
              </div>
              {/* <div className="field">
                <label className="label">Phone*</label>
                <div className="control">
                  <input className="input" type="phone" placeholder="" />
                </div>
              </div>
              <div className="field">
                <label className="label">Fax</label>
                <div className="control">
                  <input className="input" type="phone" placeholder="" />
                </div>
              </div>
              <div className="field">
                <label className="label">Interested in*</label>
                <div className="control">
                  <div class="select" style={{width:'100%'}}>
                    <select className="input">
                      <option>Salt</option>
                      <option>Dry bulk charter vessel broker</option>
                      <option>Fruits and vegetables</option>
                      <option>Fodders</option>
                      <option>Beans</option>
                      <option>Wood Cement sugar</option>
                      <option>Innovation idea projects</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Company*</label>
                <div className="control">
                  <input className="input" type="text" placeholder="" />
                </div>
              </div>
              <div className="field">
                <label className="label">Country*</label>
                <div className="control">
                  <input className="input" type="text" placeholder="" />
                </div>
              </div>
              <div className="field">
                <label className="label">City/town*</label>
                <div className="control">
                  <input className="input" type="text" placeholder="" />
                </div>
              </div>
              <div className="field">
                <label className="label">Zip Code*</label>
                <div className="control">
                  <input className="input" type="text" placeholder="" />
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea" placeholder=""></textarea>
                </div>
              </div> */}
              {/* <a className="button submitButton is-medium">SUBMIT <i className="fa fa-send"></i> </a> */}
            </div>
            <div className="column card">
            <div style={{ background:"url('http://alqatbiglobal.com/wp-content/uploads/2018/01/contact.jpg')", backgroundSize: 'cover', height:"100%" , width:"100%" }}>
            </div>
            </div>
          </div>
          
          {/* <div className="columns">
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
            <div className="column divFollow">
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
                  </div>
          </div> */}
        </div>

      </div>

    );
  }
}

