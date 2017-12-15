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



export class Products extends React.Component {
    render() {

        return (

            <div className="container" id="products">
                <h1 className="is-size-2 has-text-centered" > PRODUCTS </h1>
                <br/>
                <br/>
            <div className="columns is-desktop .is-variable is-1">
                <Product name="SALT" img={img1} href='/product/SALT/0'/>
            </div>
            <div className="columns is-desktop .is-variable is-1">
                <Product name="Dry bulk charter vessel broker" img={img2} href="/product/Dry bulk/0"/>
                <Product name="fruits and vegetables" img={img3} href="/product/Fruits and vegitables/0"/>
                <Product name="Fodders" img={img5} href="/product/Fodders/0"/>            
            </div>
            <div className="columns is-desktop .is-variable is-1">
                <Product name="Beans" img={img6} href="/product/Beans/0"/>
                <Product name="Wood Cement sugar" img={img7} href="/product/Wood/0"/>
                <Product name="Innovation idea projects" img={img4} href="/product/Innovation/0"/>            
            </div>
                <br/>
                <br/>
            </div>
        );
    }
}

function Product(props) {
    return (
        <div className="column" style={{ margin: '15px' }}>
            <a href={props.href}>
                <div className="projectCard" style={{backgroundImage: "url(" + props.img + ")"}}>
                    <div className="innerProject">
                    </div>
                    <h2 className="serviceTitle is-uppercase"> {props.name} </h2>
                </div>
            </a>
        </div>
    );
}