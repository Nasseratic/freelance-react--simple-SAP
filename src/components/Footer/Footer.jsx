import React from 'react';
import './Footer.css'
import logo from './logo.png';

export class Footer extends React.Component {
  render() {

    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="columns is-tablet">
              <div className="column is-one-thirds-tablet is-two-thirds-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
               <a href="/"> <img src={logo} alt="logo" style={ { minWidth: '70px' , maxHeight: '60px' } } /> </a>
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