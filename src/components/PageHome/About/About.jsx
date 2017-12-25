import React from 'react';
import img from '../../../assets/about.png';
import './About.css';

export class About extends React.Component {
    
    render() {
        var Style = {
            color: 'white',
            WebkitTransition: 'all', // note the capital 'W' here
            msTransition: 'all', // 'ms' is the only lowercase vendor prefix
            padding : '50px'
        };
        return (
            <div className="container" style={Style} id="about">
                <div id="about-us" className="columns">
                    <div className="column is-5">
                        <img height="100%" width="100%" src={img} alt="Random Img"/>
                    </div>
                    <div className="column is-7 content">
                        <h2 className="title">About Us</h2>
                        {/* <h4 className="subtitle has-text-white has-bg-blue">Ex ipsum deserunt occaecat sit.</h4> */}
                        <p className="content"> Hashem d.o.o for import and export is one of the leading wholesale trade and distributer in Slovenian market and euro market , hashem d.o.o looking for add value to euro economic , helping producers in Europe to exporting their products ,by our strong distributions and dealer (commercial agents) in many countries around the world , and satisfy our customers outside euro by quality Europeans products , arrive in time, the company Hashem d.o.o founded in 2014 and company able to export all euro products from salt , grain fodders , fruits and vegetables , beans , wood cement and European sugar , we are dry bulk charter vessel broker... <a href="/about">read more..</a> </p> 
                    </div>
                </div>
            </div>

        );
    }
}

