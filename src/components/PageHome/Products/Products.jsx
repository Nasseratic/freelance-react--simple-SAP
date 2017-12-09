import React from 'react';
import './Products.css';
import 'react-dom'
import img1 from '../../../assets/6-03.png';
import img2 from '../../../assets/6-04.png';
import img3 from '../../../assets/6-05.png';
import img4 from '../../../assets/6-06.png';
import img5 from '../../../assets/6-07.png';
import img6 from '../../../assets/6-08.png';
import img7 from '../../../assets/6-09.png';


function Product(props) {
    return (
        <div className="column" style={{ margin: '15px' }}>
            <div className="projectCard" style={{backgroundImage: "url(" + props.img + ")"}}>
                <div className="innerProject">
                </div>
                <h2 className="serviceTitle"> {props.name} </h2>
            </div>
        </div>
    );
}
export class Products extends React.Component {
    render() {

        return (

            <div className="container" id="products">
                <h1 className="is-size-2 has-text-centered" > PROJECTS </h1>
                <br/>
                <br/>
            <div className="columns is-desktop .is-variable is-1">
                <Product name="HELLO" img={img1}/>
            </div>
            <div className="columns is-desktop .is-variable is-1">
                <Product name="HELLO" img={img2}/>
                <Product name="HELLO" img={img3}/>
                <Product name="HELLO" img={img5}/>            
            </div>
            <div className="columns is-desktop .is-variable is-1">
                <Product name="HELLO" img={img6}/>
                <Product name="HELLO" img={img7}/>
                <Product name="HELLO" img={img4}/>            
            </div>
                <br/>
                <br/>
            </div>
        );
    }
}