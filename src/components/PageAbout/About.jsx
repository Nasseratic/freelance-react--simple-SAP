import React from 'react';
import './About.css';
import img1 from '../../assets/about/Untitled-1-02.png'
import img2 from '../../assets/about/Untitled-1-03.png'
import img3 from '../../assets/about/Untitled-1-04.png'
import img4 from '../../assets/about/Untitled-1-05.png'
import img5 from '../../assets/about/Untitled-1-06.png'

export class About extends React.Component {
    
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
                <section className="hero hero-about is-fullheight  is-bold">
                    <div className="hero-body">                
                        <div className="container has-text-centered" style={ { marginTop : '-150px' }}>

                            <h1 className="title has-text-white is-size-1 is-uppercase">
                            About The company
                            </h1>
                            <h2 className="subtitle has-text-grey-lighter is-size-4">
                                Irure excepteur ex enim occaecat consectetur fugiat nulla voluptate.Do est ex laboris laborum laboris sit aliquip.
                            </h2>

                        </div>
                        
                    </div>
                    <span className='icon-scroll'> </span>
                    
                </section>
                <section className="section">
                    <div className="container">
                        <h3 className="is-size-5 has-text-centered has-text-weight-bold" style={{ letterSpacing : '5px' }}> 
                            Some thing Important ....... 
                        </h3>
                        <br/>
                        <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <img src={img1}/>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <img src={img2}/>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <h3 className="is-size-5 has-text-centered has-text-weight-bold" style={{ letterSpacing : '5px' }}> 
                            Quality six Sigma
                        </h3>
                        <br/>
                        <div className="columns">
                            <div className="column is-8 is-offset-2" >
                            <img src={img3}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                        <div className="column is-8 is-offset-2" >
                            <img src={img4} />
                        </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                            <img src={img5}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}