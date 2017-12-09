import React from 'react';
import './Header.css'

export class Header extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { toggleNav : false };
        this.handleToggleClick = this.handleToggleClick.bind(this);
        
    }
    handleToggleClick() {
        this.setState(prevState => ({
            toggleNav: !prevState.toggleNav
        }));
      }
    render() {
        return (
        
            <nav className="navbar" >
            <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
              </a>
              <div className="navbar-burger burger" onClick={this.handleToggleClick} >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          
            <div id="navbarExampleTransparentExample" className={ this.state.toggleNav ? 'navbar-menu is-active' : 'navbar-menu' } >
              
              <div className="navbar-end">
                <a className="navbar-item" href="#home">
                    Home
                </a>
                <a className="navbar-item" href="#about">
                    About
                </a>
                <a className="navbar-item" href="#products">
                    Products
                </a>
                <a className="navbar-item" href="#contact">
                    Contact Us
                </a>
              </div>
            </div>
            </div>
          </nav>
        
        );
    }
}