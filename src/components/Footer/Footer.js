import React from 'react';
import './Footer.css'
export class Footer extends React.Component {
    render() {
        
        return (

    <footer className="footer">
      <div className="container">
        <div className="columns is-tablet">
          <div className="column is-one-thirds-tablet is-two-thirds-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
              <h1 className="has-text-white is-size-4"> LOGO </h1>
          </div>
          <div className="column has-text-weight-light">
            <a className="footerLink" href="/">HOME</a>
            <a className="footerLink" href="#about">ABOUT</a>
            <a className="footerLink" href="#PRODUCTS">PRODUCTS</a>
          </div>
        </div>
      </div>
    </footer>

        );
    }
}