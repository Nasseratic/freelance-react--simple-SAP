import React from 'react';
import './NewsBar.css'
import firebase from 'firebase';
export class NewsBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { s: 0, text: ' ' };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(prevState => ({
        }));
    }
    componentDidMount() {
        var config = {
            apiKey: "AIzaSyDPuwC9d-YJ5XtRpOCQGtbLRjzGSJrwcp8",
            authDomain: "simple-api-1545.firebaseapp.com",
            databaseURL: "https://simple-api-1545.firebaseio.com",
            // storageBucket: "<BUCKET>.appspot.com",
            // messagingSenderId: "<SENDER_ID>",
        };
        firebase.initializeApp(config);
        var database = firebase.database();
        firebase.database().ref('news').once('value').then((res) => {
            this.state.text = res.val();
        });
        setInterval(() => {
            if (this.state.s <= 0 - this.s.offsetWidth + 1) {
                this.setState({ s: this.w.offsetWidth - 1 });
            } else {
                this.setState({ s: this.state.s - 2 });
            }
        }, 40);
    }
    render() {
        return (
            <div id="div" ref={w => { this.w = w }}>
                <span id="news" > <p id="news-text">NEWS</p> </span> <p className="inline" id="par" ref={s => { this.s = s }} style={{ left: this.state.s + 'px' }}> {this.state.text}</p>
            </div>
        );
    }
}