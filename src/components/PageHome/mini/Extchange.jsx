import React from 'react';
import './commen.css'


export class Extchange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

        this.sendreq('https://cors-anywhere.herokuapp.com/https://free.currencyconverterapi.com/api/v5/convert?q=USD_EUR&compact=y').then((res) => {
            this.setState({ EUR_USD: (1 / res.USD_EUR.val).toFixed(4) });
        });
        // this.sendreq('https://cors-anywhere.herokuapp.com/https://free.currencyconverterapi.com/api/v5/convert?q=EUR_EGP&compact=y').then( (res) =>{
        //     this.setState(   { EUR_EGP  : res.EUR_EGP.val });
        // });
        // this.sendreq('https://cors-anywhere.herokuapp.com/https://free.currencyconverterapi.com/api/v5/convert?q=EUR_EGP&compact=y').then( (res) =>{
        //     this.setState(   { EUR_EGP  : res.EUR_EGP.val });
        // });
    }
    sendreq(url) {
        return new Promise(function (resolve, reject) {

            var httpVar = new XMLHttpRequest();
            httpVar.open('GET', url, true);
            httpVar.onreadystatechange = function () {
                console.log(httpVar.readyState);
                if (httpVar.readyState === 4 && httpVar.status === 200) {
                    return resolve(JSON.parse(httpVar.responseText));
                }
                else if (httpVar.readyState === 4 && httpVar.status !== 200) {
                    return reject("ERROR");
                }
            };
            httpVar.send();

        });
    }
    render() {

        return (
            <div className="columns is-centered">
                <div className="c-card column is-3 has-text-centered">
                    <span className="has-text-white is-size-5" >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" style={{
                            width: 35,
                            height: 20,
                            display: 'inline'
                        }} alt="" />
                        {this.state.EUR_USD}
                        <span className="car"> EUR/USD</span>
                    </span>
                </div>
                {/* <div className="c-card column is-3 has-text-centered"> 
                    <span className="has-text-white is-size-5" >
                        {this.state.USD_EGP} 
                        <span className="car">USD</span> 
                    </span>
                </div> */}
            </div>

        );
    }
}