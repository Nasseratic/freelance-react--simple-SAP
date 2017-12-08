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
            <div className="container" style={Style}>
                <div id="about-us" className="columns">
                    <div className="column is-5">
                        <img height="100%" width="100%" src={img} alt="Random Img"/>
                    </div>
                    <div className="column is-7 content">
                        <h2 className="title">About Us</h2>
                        <h4 className="subtitle has-text-white has-bg-blue">Ex ipsum deserunt occaecat sit.</h4>
                        <p className="content"> Excepteur eiusmod pariatur ex enim qui eiusmod. Amet eiusmod tempor deserunt deserunt exercitation. Id non adipisicing sint eiusmod ex tempor incididunt eu. Duis duis mollit non est non commodo qui tempor consequat mollit irure. Et deserunt exercitation dolore amet ad.

Commodo quis ipsum eiusmod qui sit nostrud velit proident et dolore tempor. Id id est aliqua enim sint ea nostrud adipisicing veniam ullamco est consectetur deserunt. Sunt eiusmod in veniam est ullamco magna magna enim dolore duis cillum voluptate reprehenderit ex. Esse dolore in ullamco pariatur sint. Aliqua pariatur ut excepteur qui. </p>
                    </div>
                </div>
            </div>

        );
    }
}

