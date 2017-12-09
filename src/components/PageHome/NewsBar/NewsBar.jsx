import React from 'react';
import './NewsBar.css'
export class NewsBar extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { s: 0 };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(prevState => ({
        }));
    }
    componentDidMount () {
        setInterval( ()=>{
            if ( this.state.s <= 0 - this.s.offsetWidth+1) {
                this.setState( { s: this.w.offsetWidth-1 } ) ;
            }else {
                this.setState( { s: this.state.s-2 } ) ;
            }
        }, 40 );
      }
    render() {
        return (
            <div id="div" ref={ w => {this.w = w}}>
               <span id="news" > <p id="news-text">NEWS</p> </span> <p className="inline" id="par" ref={ s => {this.s = s}} style={{ left: this.state.s+'px' }}>some news here   some news here   some news here </p>
            </div>
        );
    }
}