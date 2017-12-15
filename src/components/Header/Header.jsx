import React from 'react';
import './Header.css'
import logo from './logo.png';
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
              
              <div className="navbar-end">
                <a className="navbar-item" href="/">
                    Home
                </a>
                <a className="navbar-item" href="/about">
                    About
                </a>
                <a className="navbar-item" href="/#products">
                    Products
                </a>
                <a className="navbar-item" href="/#contact">
                    Contact Us
                </a>
                <a className="navbar-item">
                Useful links
                </a>
              </div>
            </div>
            </div>
          </nav>
        
        );
    }
}