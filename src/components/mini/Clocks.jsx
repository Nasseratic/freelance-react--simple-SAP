import React from 'react';
import { DateTime } from  'luxon' ;
// import './Home.css'
export class Clocks extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { New_York : 0 , London : 0 };
    }
    componentDidMount() {
        setInterval(
          () => {
            this.setState({
                New_York: DateTime.local().setZone('America/New_York').toLocaleString(DateTime.TIME_24_WITH_SECONDS),
                London: DateTime.local().setZone('Europe/London').toLocaleString(DateTime.TIME_24_WITH_SECONDS),
                Hongkong: DateTime.local().setZone('Hongkong').toLocaleString(DateTime.TIME_24_WITH_SECONDS),
                CET: DateTime.local().setZone('CET').toLocaleString(DateTime.TIME_24_WITH_SECONDS),
                });
          },
          1000
        );
      }
    
    render() {
        
        return (
    <nav className="level">
        <div className="level-item has-text-centered">
            <div>
            <p className="heading has-text-white">New York</p>
            <p className="title has-text-white has-text-weight-light">{this.state.New_York}</p>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
            <p className="heading has-text-white ">LONDON </p>
            <p className="title has-text-white has-text-weight-light">{this.state.London}</p>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
            <p className="heading has-text-white ">HONGKONG</p>
            <p className="title has-text-white has-text-weight-light">{this.state.Hongkong}</p>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
            <p className="heading has-text-white ">CET</p>
            <p className="title has-text-white has-text-weight-light ">{this.state.CET}</p>
            </div>
        </div>
    </nav>


        );
    }
}