import React from 'react';
import './Footer.css'
export class Footer extends React.Component {
  render() {

    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="columns is-tablet">
              <div className="column is-one-thirds-tablet is-two-thirds-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                <h1 className="has-text-white is-size-4"> LOGO </h1>
              </div>
              <div className="column has-text-weight-light">
                <a className="footerLink" href="/">HOME</a>
                <a className="footerLink" href="#about">ABOUT</a>
                <a className="footerLink" href="#products">PRODUCTS</a>
              </div>
            </div>
          </div>
        </footer>
        <div className="powerd-by"> POWERD BY <a href="https://lamaatech.com">LAMAATECH</a></div>
      </div>
    );
  }
}