import React from 'react';
import './Home.css';
import {Clocks} from '../mini/Clocks'
import {Extchange} from '../mini/Extchange'
import { About } from './About/About'
import { Products } from './Products/Products'
import { NewsBar } from './NewsBar/NewsBar'
import { Contact } from './Contact/Contact'


export class Home extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {};
        this.handleToggleClick = this.handleToggleClick.bind(this);
        
    }
    handleToggleClick() {
        this.setState(prevState => ({
        }));
      }
    render() {
        return (
            <div>
                <section className="hero is-fullheight  is-bold">
                <Clocks/>
                <Extchange/>
                <NewsBar/>
                    <div className="hero-body">                
                        <div className="container  has-text-centered">

                            <h1 className="title has-text-white is-size-1 is-uppercase">
                            Primary bold title
                            </h1>
                            <h2 className="subtitle has-text-grey-lighter is-size-3 is-uppercase">
                            Primary bold subtitle
                            </h2>

                        </div>
                        
                    </div>
                    <span className='icon-scroll'> </span>
                    
                </section>
                <About/>
                <Products/>
                
            </div>
        );
    }
}