import React from 'react';
import './Header.css'
import logo from './logo.png';
import { Link  } from 'react-router-dom';

export class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = { toggleNav : false };
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }
    handleToggleClick() {
        this.setState(prevState => ({
            toggleNav: !prevState.toggleNav
        }));
      }
      handleClose() {
        this.setState(prevState => ({
            toggleNav: false
        }));
      }
    render() {
        return (
            <div>
            <div style={{height: '100%',width:'100%',opacity:0,position:'fixed', zIndex:9998}} hidden={!this.state.toggleNav} onClick={this.handleClose}>
            </div>
            <nav className="navbar" >
            <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src={logo} alt="Bulma: a modern CSS framework based on Flexbox" style={ { minWidth: '90px' ,minHeight: '50px' } } />
              </a>
              <div className="navbar-burger burger" onClick={this.handleToggleClick} >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div id="navbarExampleTransparentExample" className={ this.state.toggleNav ? 'navbar-menu is-active' : 'navbar-menu' } >

              <div className="navbar-end" onClick={this.handleClose}>
                <Link className="navbar-item"to="/">
                    Home
                </Link>
                <Link className="navbar-item" to="/about">
                    About
                </Link>
                <a className="navbar-item" href="/#products">
                    Products
                </a>
                <a className="navbar-item" href="/#contact">
                    Contact Us
                </a>
                <Link className="navbar-item" to="/links">
                Useful link and education
                </Link>
              </div>
            </div>
            </div>
          </nav>
          </div>
        );
    }
}
