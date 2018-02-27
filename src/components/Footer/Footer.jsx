import React from 'react';
import './Footer.css'
import logo from './logo.png';

export class Footer extends React.Component {
  render() {

    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="columns is-mobile">
              <div className="column is-one-fourth-fullhd">
               <a href="/"> <img src={logo} alt="logo" style={ { minWidth: '95px' , maxHeight: '85px' } } /> </a>
              </div>
              <div className="column has-text-weight-light">
                <a className="footerLink" href="/">
                    Home
                </a>
                <a className="footerLink" href="/about">
                    About
                </a>
                <a className="footerLink" href="/#products">
                    Products
                </a>
                <a className="footerLink" href="/#contact">
                    Contact Us
                </a>
                <a className="footerLink" href="/links">
                    Useful link and education
                </a>
              </div>
            </div>
          </div>
          <hr/>
          <div className=" is-size-5 has-text-white has-text-centered"> © <span className="has-text-weight-bold">2014-2018 Hashem D.O.O </span> ALL RIGHTS RESERVED</div>
        </footer>
      </div>
    );
  }
}