import React from 'react';
import './Product.css';

export class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = { product: null };
    }
    componentDidMount() {
        this.sendreq('../../products.json').then(res => {
            this.setState({ product: res[this.props.match.params.name] });
        })
    }
    
    render() {
        if (this.state.product) {
            return (
                <div>
                    <section className="hero is-medium  is-bold" style={{ backgroundImage: "url(" + this.state.product['background'] + ")" }}>
                        <div className="hero-body">
                            <div className="container has-text-centered" >
                                <h1 className="title has-text-white is-size-1 is-uppercase">
                                    {this.props.match.params.name}
                                </h1>
                                <h2 className="subtitle has-text-grey-lighter is-size-4">
                                    Irure excepteur ex enim occaecategory  consectetur fugiat nulla voluptate.Do est ex laboris laborum laboris sit aliquip.
                                </h2>
                            </div>
                        </div>
                    </section>
                    <CategoryNav navs={this.state.product.categoryIdegories} />
                    <Category data={this.state.product.categories} index={this.props.match.params.categoryId} />
                </div>
            );
        } else {
            return <div className="notfound"> <br /> <br /> <h1 className="is-size-2 has-text-centered"> 404 PAGE NOT FOUND </h1></div>
        }
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
}


function CategoryNav(params) {
    let navs = params.navs.map((e, index) => {
        return (<div className="column is-3">
            <a href={'./' + index} className="button is-outlined full is-uppercase is-large is-size-4 is-darkblue"> {e.name} </a>
        </div>)
    });
    return (
        <div className="container">
            <br />
            <div className="columns">
                {navs}
            </div>
        </div>
    );
}

function Category(params) {
    const category = params.data[params.index];
    if (category) {
        return (
            <div>
                <section className="section">
                    <div className="container">
                        <Content content={category.content} name={category.name} />
                    </div>
                </section>
                <section className="section">
                    <Gallery len={category.imgs.length} imgs={category.imgs} />
                </section>
            </div>
        );
    } else {
        return '';
    }

}


function Content(params) {
    const content = params.content;
    const name = params.name;
    if (content) {
        return (
            <div>
                <h1 className="has-text-dark is-size-3">{name}</h1>
                <p> {content}</p>
            </div>
        );
    } else {
        return '';
    }
}

function Gallery(params) {
    if (params.len < 2) {
        return (<h1 className="has-text-black has-text-centered"> NO Galary </h1>);
    } else {
        let arrToRender = [];
        params.imgs.forEach(element => {
            arrToRender.push(<div className="column is-one-third" > <img src={element} /> </div>);
        });
        return (
            <div>
                <h1 className="has-text-black has-text-centered is-size-3 "> Gallery</h1>
                <div className="columns is-multiline">{arrToRender}</div>
            </div>
        );
    }
}

