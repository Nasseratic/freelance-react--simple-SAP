import React from 'react';
import './Product.css';
import { Link  } from 'react-router-dom';

export class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = { product: null };
    }
    componentDidMount() {
        this.sendreq('../../products.json').then(res => {
            this.setState({ product: res[this.props.match.params.name] });
            console.log(res[this.props.match.params.name]);
        })
    }

    render() {
        if (this.state.product) {
            console.log(this.state.product['background']);
            return (
                <div>
                    <section className="hero is-medium is-bold is-bg-center-cover" style={{ backgroundImage: "url('" + this.state.product['background'] + "')" }}>
                        <div className="hero-body">
                            <div className="container has-text-centered" >
                                <h1 className="title has-text-white is-size-1 is-uppercase">
                                    {this.props.match.params.name}
                                </h1>
                            </div>
                        </div>
                    </section>
                    <section className="hero is-small  is-bold">
                        <div className="hero-body">

                            <CategoryNav navs={this.state.product.categories} index={this.props.match.params.categoryId} />
                            <Category data={this.state.product.categories} index={this.props.match.params.categoryId} />
                        </div>
                    </section>
                </div>
            );
        } else {
            return <div className="notfound"> <br /> <br /> <h1 className="is-size-2 has-text-centered"> LODING... </h1></div>
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
        return (<div className="column is-4">
           <Link to={'./' + index} className={index == params.index ? 'button is-outlined full is-uppercase is-medium is-size-6 is-darkblue-active' : 'button is-outlined full is-uppercase is-medium is-size-6 is-darkblue'}> {e.name} </Link>
        </div>)
    });
    return (
        <div className="container">
            <br />
            <div className="columns is-multiline">
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
                        <ProductContent name={category.name} fimg={category.fimg}/>
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


// function Content(params) {
//     const content = params.content;
//     const name = params.name;
//     if (content) {
//         return (
//             <div>
//                 <h1 className="has-text-dark is-size-3">{name}</h1>
//                 <ProductContent content={params.content} />
//             </div>
//         );
//     } else {
//         return '';
//     }
// }

function Gallery(params) {
    if (params.len < 1) {
        return (<h1 className="has-text-black has-text-centered"> NO Galary </h1>);
    } else {
        let arrToRender = [];
        params.imgs.forEach(element => {
            console.log(element);
            arrToRender.push(<div className="card column is-one-third" > <div className="is-bg-center-cover" style={{ backgroundImage: "url('" + element + "')", height: '200px' }}> </div> </div>);
        });
        return (
            <div>
                <h1 className="has-text-black has-text-centered is-size-3 "> Gallery</h1>
                <br />
                <div className="columns is-multiline">{arrToRender}</div>
            </div>
        );
    }
}





function ProductContent(params) {
    console.log('====================================');
    console.log(params.name);
    console.log('====================================');
    let nameTag = <h1 className="has-text-dark is-size-3">{params.name}</h1>;
    let contentTag = '';

        
        return (
        <div> 
            {nameTag} <br />  
            <img src={params.fimg} onError={ (ev)=> ev.target.src = 'http://bumanmedia.com/assets/empty-list-img-da718555288a0d1fcfd5f0b73c5109b0211ee330526fe233849dd2e19a2c0073.png'} style={{ maxHeight: 300, float: 'right' }} />
            {contents[params.name]}
            <h2> <strong>CONTACT US FOR MORE DETAILS AND BEST OFFER</strong> </h2>
        </div>

        );

}

let contents = {};

contents['Innovation']=(
    <body>
      
    <h2 className=" has-bg-blue is-size-4">Innovation idea project</h2>
         
         <ul>
             <li> 1: solar energy </li>
             
             <li>2:- wind energy</li>
             
             <li>3:- waves energy</li>
             
         </ul>
         
         <p>
             Sea waves energy going to be huge important industrial development this innovation is happening in many countries around the globe , money starting focus in this area , it is not source of energy , it is source of income , long term economic developments, give long time supply of electricity ,
             <br/>
             
   When you talk about about fuel poverty, when you talk about low cost, go for exactable supply cheapest way for supply electricity.
             
             <br/>
             
   World going to be green , and with renew energy source , clean source from natural , making clean environment , for reduce high temperatures of earth now, we try to help too .
             <br/>
   
   Contact us for business corporations 
   best offer supply you electricity by our business partners in this in euro and Japan.
         </p>
         
     </body>
);
contents['Cement'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4">1: cement </h2>
        <h2 className=" has-bg-blue is-size-4">Ordinary Portland Cement 1 </h2>
        <h3 className="has-text-dark is-size-5"> CEM I (32.5R) </h3>
        <h3 className="has-text-dark is-size-5">ORDINARY PORTLAND CEMENT CEM I ( 32.5R)CEM I ( 32.5R)</h3>
        <br />

        <h3 className="has-text-dark is-size-5">Standards</h3>
        <p>European Standards: (2004/1- EN197)CEM I (32.5R)</p>
        <br />

        <h3 className="has-text-dark is-size-5">uses</h3>
        <p>It is used in all reinforced concrete constructions such as reinforced buildings, water tanks, roads and bridges. It is also used for all construction works which are  subject to high stresses but  not exposed directly to sulfate salts
</p>
        <h2 className=" has-bg-blue is-size-4">Portland Ferric Cement</h2>
        <h3 className="has-text-dark is-size-5">CEM II (42.5R )</h3>
        <h3 className="has-text-dark is-size-5">CEMENT PRODUCT CEM I ( 42.5R) CEM I ( 42.5R)</h3>
        <br />
        <h3 className="has-text-dark is-size-5">Standards</h3>
        <p>European Standards: (2004/1- EN197)          CEM I (42.5R)</p>
        <br />

        <h3 className="has-text-dark is-size-5">Uses</h3>
        <p>It is used in all reinforced concrete constructions such as reinforced buildings, water tanks, roads and bridges. It is also used for all construction works which are subject to high stresses but  not exposed directly to sulfate salts.
</p>

        <h2 className=" has-bg-blue is-size-4">Sulfur resistance cement</h2>
        <h3 className="has-text-dark is-size-5">CEM II/B-S (32.5N)</h3>
        <br />
        <h3 className="has-text-dark is-size-5">SULFATE-RESISTANT CEMENT CEM II / B-S ( 32.5N)    CEM II /B-S( 32.5N )</h3>
        <h3 className="has-text-dark is-size-5">Standards</h3>
        <p>European Standards: (2004/1- EN197)          CEM II / B-S (32.5N)</p>
        <h3 className="has-text-dark is-size-5">Uses</h3>
        <pre>
            For non-constructive  purposes
            <br/>
      For plastering as well as for finishing purposes
            <br/>
      For manufacturing of cement bricks.
            <br/>
      For manufacturing of cement tiles

      </pre>

        <br />
        <p>
            Cement is available for export in any of the following forms according to client's desire:
            <br/>
            
1. Bags weighing 50 kg each (±1kg)
            <br/>
            
2. Bulk Cement
            <br/>
            
Producers of cement  with following certification
ISO 2008 . 9001
            <br/>
ISO 2004 . 140001
            <br/>
 	 Certificate (CE – MAEK)
            <br/>
 O.P.C 42.5R
            <br/>
 O.P.C 42.5N
            <br/>
 O.P.C 32.5r
            <br/>
2:- we offer GYPSUM FOR CONSTRUCTION
TECHNICAL SPECIFICATIONS  
            <br/>
            <br/>contact us for analysis and back details
</p>


    </body>
);

contents['Sugar'] = (

    <body>

        <h2 className=" has-bg-blue is-size-4">Sugar </h2>

        <p>
            The European Union (EU) is the world's biggest producer of beet sugar and the principal importer of raw cane sugar for refining. While the EU countries have a common market organisation for sugar, the EU has agreements with other countries worldwide on sugar import and export.
          <br />

            The EU is the world’s leading producer of beet sugar, with around 50% of the total. However, beet sugar represents only 20% of the world’s sugar production; the other 80% is produced from sugar cane.
          <br />

            Most of the EU's sugar beet is grown in the northern half of Europe, where the climate is more suited to growing beet. The most competitive producing areas are in northern France, Germany, the United Kingdom and Poland. The EU also has an important refining industry that processes imported raw cane sugar.
<br />


            We offer best quality of European origin sugar in bags 50k.g , or jumbo bags
        </p>

    </body>

);

contents['Wood'] = (
    <body>
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../wood/wood (9).jpg" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2> <strong> We offering following kinds of wood : </strong> </h2>
        <h2 className=" has-bg-blue is-size-4">1:-Logs wood </h2>
        </div>

        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../wood/wood (12).jpg" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2 className=" has-bg-blue is-size-4"> 2:-Timber for constraction wood art  </h2>

        <ul>
            <li> Spruce fresh cutting Anti stain made in euro see in attached Pictures</li>

            <li>We delivery 800 cbm only Bulk </li>

            <li>Quality l-ll-lll or  mixed.</li>

            <li>We can delivery also other kind of wood </li>

            <li>softwood as Pine</li>

            <li>Hardwood as beech/Ash & Oak </li>

            <li>KD or AD </li>

            <li>Depending of the order. </li>
        </ul>
        </div>

        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../wood/wood (10).jpg" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2 className=" has-bg-blue is-size-4">3:- we offer all kinds of plywood for furniture and we offer all euro veneers</h2>
        </div>
        
        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../wood/wood (6).jpg" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2 className=" has-bg-blue is-size-4">4:- Flooring </h2>
        <h3 className="has-text-dark is-size-5">1:- LAMINATE FLOORS</h3>
        <p>
            Laminate floors have a natural timber touch, high durability and are easy-care. The product portfolio gives the chance for individual
          <br />
            furnishing ideas – from the 1-strip flooring and 2-strip flooring up to the 3-strip flooring. Laminate floors are easy to lay. It can
          <br />
            be easily dissembled and layed somewhere else again. Laminate floorings are suitable for private rooms as well as for industry.

      </p>
        </div>
        
        
        <h3 className="has-text-dark is-size-5">SURFACE TEXTURES FLOORS</h3>
        <ul>
            <li> Chrome Pore</li>
            <li>  4-side beveled </li>
        </ul>

        <h3 className="has-text-dark is-size-5"> CONTENT </h3>
        <ul>
            <li>Chalet: Advanced & Basic: </li>
            <li> 1 package = 4 pieces = 1,387 m² 1 package = 8 pieces = 2,131 m²</li>
            <li>   1 palette = 56 packages = 77,697 m² 1 palette = 56 packages = 119,32 m²
  </li>
        </ul>



        <h3 className="has-text-dark is-size-5">2:- VINYL FLOORS </h3>
        <p>
            Vinyl floors are modern, practically, easy-care and comfortable. Frischeis offers a wide range of vinyl floors – from warm tones up
to stylish stone decor so our customers can place emphasis as they like. Vinyl floors are furthermore very hard-wearing so they
can be used for private rooms as well as for industry.

      </p>
        <h3 className="has-text-dark is-size-5">SURFACE TEXTURES FLOORS</h3>
        <p> mat laquered</p>
        <h3 className="has-text-dark is-size-5">content </h3>
        <ul>
            <li>Timber look: stone look: </li>
            <li> 1 package = 6 pieces = 1,52 m² 1 package = 6 pieces = 1,02 m² </li>
            <li> 1 palette = 56 packages = 85,03 m² 1 palette = 84 packages = 85,47 m²</li>
        </ul>

        <h3 className="has-text-dark is-size-5">PRODUCT SPECIFICATION</h3>
        <pre>Top-layer: 0,55 or 0,3 vinyl
           Core-layer: HDF </pre>


        <h3 className="has-text-dark is-size-5">3:- PARQUET</h3>
        <h3 className="has-text-dark is-size-5"> STRIP FLOORING </h3>
        <h3 className="has-text-dark is-size-5">SURFACE</h3>
        <ul>
            <li> lacquered </li>
            <li>  matt lacquered </li>
            <li>  white lacquered</li>
            <li> oiled</li>
        </ul>

        <h3 className="has-text-dark is-size-5">PRODUCT SPECIFICATION</h3>
        <ul>
            <li>3-ply construction:</li>
            <li> 1) Top-layer: 3,5 mm hardwood </li>
            <li> 2) Core-layer: spruce-chopsticks</li>
            <li>3) Reverse side: softwood</li>
        </ul>

        <h3 className="has-text-dark is-size-5">CONTENT</h3>
        <ul><li>
            1 package = 6 pieces = 2,5344 m²

          </li>
            <li>
                1 palette = 35 packages = 80,70 m²

          </li>
            <li>
                Or 1 palette = 48 packages = 111,744 m²

          </li>
        </ul>


    </body>
);
contents['Kidney white beans'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4"> Kidney white beans </h2>

        <lu>
            <li> White kidney beans are a protein-rich starchy vegetable, full of vitamins, minerals and an excellent source of dietary fiber.</li>
            <li>  Adding them to your diet offers a variety of health benefits such as promoting digestive health and preventing heart disease.</li>
            <li>  White kidney beans are large and squared at the edges, unlike smaller white beans, such as navy beans.</li>
        </lu>


        <h2>Specifications:</h2>
        <p>180/200 or 200/220 beans for each 100 gram </p>

        <h2>packing</h2>
        <p>In bags 25 k.g . Container 20 fet , 23 ton of kidney white beans</p>
    </body>
);

contents['Coffe Beans'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4"> coffe Beans</h2>
        <lu>
            <li> Types of coffee beans.</li>
            <li> The two main types of coffee beans are Coffee Arabica and Coffee Robusta. People also use a blend of both beans.</li>
            <li> Both types of coffee beans taste differently depending on where and how they are grown.</li>
            <li>  What is the difference in Coffee Robusta versus Coffee Arabica? Do types of coffee beans used make a difference? </li>
        </lu>
        <br />
        <lu>
            <li>The types of coffee beans used to make the morning coffee everyday are probably of little concern to the average person. </li>
            <li>  However, the true coffee lover knows the various types of coffee beans if for no other reason than to be able to pick out their favorites from among the many available varieties. </li>
            <li>  The two most common types of coffee beans used in making coffee are the Arabic bean and the Robusta bean.</li>
            <li> These two beans are used more than any other variety of beans, either in their pure form or in coffee blends.</li>
        </lu>

    </body>
);

contents['Cocoa beans'] = (
    <body>
        <lu>
            <li>The three main varieties of cocoa plant are Forastero, Criollo, and Trinitario.</li>

            <li> The first is the most widely used, comprising 80-90% of the world production of cocoa. </li>
            <li> Cocoa beans of the Criollo variety are rarer and considered a delicacy
   we offer the three varieties of cocoa beans.</li>
        </lu>

        <h3>Contact us for more details and for best offer </h3>
    </body>
);
contents['Corn sillage'] = (
    <p>
        <strong>Corn silage</strong>  is a popular forage for ruminant animals because it is high in energy and digestibility and is easily adapted to mechanization from the stand-crop to time of feeding. <strong>Corn silage</strong> should have a light, pleasant smell with only a slight vinegar odor. It should be slightly brown to dark green.
        Contact us for best offer
    </p>
);
contents['Dry bulk vesel'] = (
    <body>
        <p>
            We offer various services related with import and exports of goods to different destinations around the world, our services includes Customs Clearing & Forwarding,  handling of Project Cargoes and Heavy Lifts, Chartering Broker, Freight Forwarding, and Bunkering.

    </p>

        <h2 className=" has-bg-blue is-size-4"> Chartering </h2>
        <p>
            Chartering is handled via our world wide relation network with the aim of getting the most out of every cargo and seeing that you also will have a through update and our best services during the exclusive charter period.
        <br />

            We specialize in chartering vessels for the following goods:
        Urea, Minerals (clay – feldspar – salt- silica sand), Cement (clinker – cement), Steel production (Steel bars – steel billets), Vegetables (potatoes – citrus-onions)
        <br />

            We specialize in the following geographic areas: all Mediterranean, Aegean sea, Marmarah sea, and Black sea, Red sea, West Africa, Continental and Baltic sea , Adriatic sea , and north sea

     <h2 className=" has-bg-blue is-size-4"> Ship brokers (specialist)  </h2>
            Brokerage/charting of tonnage from 1000 Mt Dwt up to panamax DWT for exclusive charters.
        The company has a team of dedicated brokers, who are constantly in touch with the market and are capable of advising the clients about the changing market scenario.
        We have been successful in establishing a very close working relationship with a number of ship owners and charters and offer them the highest level of personalized service

    <h2 className=" has-bg-blue is-size-4">Types of Goods We ship  </h2>

            <ul>
                <li>
                    Fertilizers (ammonium nitrate – ammonium sulphate – sulphate of potash – urea – sulphur)

              </li>

                <li>
                    Minerals (clay – feldspar – salt- silica sand)

              </li>

                <li>
                    Cement (clinker – cement)

              </li>

                <li>
                    Steel production (Steel bars – steeb billets- hot briquelled iron - scrap)
              </li>

                <li>
                    Timber

              </li>

                <li>
                    Coke

              </li>

                <li>
                    Vegetables (potatoes – citrus-onions)

              </li>

                <li>
                    Grain wheat – corn – rice

              </li>

                <li>
                    Project  and heavy lift cargoes

              </li>
            </ul>

            <h2> Project Cargo Handling </h2>

            <ul>
                <li>
                    We handle all types of project cargoes
              </li>

                <li>
                    We have specialized personnel for Cargo Handling Services
              </li>

                <li>
                    we also have access to the range of material handling equipment
              </li>

                <li>
                    We offer project cargo handling services
              </li>

                <li>
                    We can arrange all kinds of material transportation aid for sea and overland operations at ease.
              </li>
            </ul>
        </p>



    </body>
);

contents['Corn GLUTEN'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4"><lu> CORN GLUTEN MEAL </lu> </h2>

        <li> Corn gluten meal is a yellow powder or granular created as a by-product during a milling process corn.</li>
        <li> It is a high-protein concentrate typically supplied at 60% protein.</li>
        <li> It is a valuable source of methionine.</li>
        <li> It is primarily used as a supplement in farm animal feeds, dog food, and fish food.</li>
        <li> Corn gluten meal also has a level of xanthophylls, which offers the poultry feed formulators an efficient yellow pigmenting ingredient. </li>
        <li> Corn gluten meal also is excellent cattle feed providing a high level of rumen bypass protein.</li>

        <lu> Specification </lu>
        <li> Protein 60% min.</li>
        <li> Ash 3% max.</li>
        <li> Moisture 12%max.</li>
        <li> Fat 5%max.</li>
        <li> Fibre 2% max.</li>

        <li> 1.Made from native high quality corn.</li>
        <li>  2.Golden Appearance.</li>
        <li>  3.NON-GMO</li>
        <li> 4.Aflatoxin:Non</li>

    </body>
);
contents['Wheat Bran'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4"> Wheat Bran</h2>

        <ul>
            <li> Fibre: 11.00% max. </li>
            <li>  Moisture: 15.00% max. </li>
            <li>  Protein: 14.00% min. </li>
            <li>  Diameter of Granule: 4.07-14.70 mm </li>
        </ul>
        <lu> Packing: </lu>
        <li> Granulated Wheat Bran Packing: Polypropylene Bags 40 kg, 1,000 t Bulk Bags.</li>
        <li> Bulka / Jumbo Bags of 0.5 t - 1 t.</li>
        <li> Bulk-Loose in PP Lined Container.</li>

        <li> Minimum quantity of sales: 120 tons in 5x40'fcl. </li>
  

</body>
);
contents['Sugar beet pulp pellets'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4"> High quality Sugar beet pulp pellets </h2>

        <table className="table is-bordered">
            <tbody>
                <tr>
                    <td>Moisture</td>
                    <td>Max, 14% </td>
                </tr>
                <tr>
                    <td>Protein</td>
                    <td> NMax, 10% </td>
                </tr>
                <tr>
                    <td>Free from </td>
                    <td>Y0%</td>
                </tr>
                <tr>
                    <td>Pellets size</td>
                    <td> 8mm +</td>
                </tr>
                <tr>
                    <td>Broken pellet</td>
                    <td> Max, 10%</td>
                </tr>
                <tr>
                    <td>Type</td>
                    <td> Animal feed </td>
                </tr>
                <tr>
                    <td>Sugar content</td>
                    <td>  8% Max</td>
                </tr>
                <tr>
                    <td>Minimum order</td>
                    <td> 200 Metric Ton</td>
                </tr>
                <tr>
                    <td> Ash</td>
                    <td>  7% max</td>
                </tr>
                <tr>
                    <td>Packing details</td>
                    <td>new 25 pp bag, or in bulk As per customer Demand</td>
                </tr>
                <tr>
                    <td>Payment Termst</td>
                    <td> T/T</td>
                </tr>
                <tr>
                    <td>Supply ability</td>
                    <td> 5000 Metric Ton per month</td>
                </tr>
            </tbody>
        </table>
    </body>
);



contents['Yellow corn mazia and wheat'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4"> Yellow Corn </h2>
        <p> Corn (maize) - one of the most popular foods in the world, and is the second best-selling grain culture after wheat. , the most commonly grown type of corn is sugar yellow corn.
    <br />

            Yellow corn is characterized by high starch content (up to 70%) and fat (4-6%), small fiber content (2-4%).
</p>

        <h3> Specifications </h3>
        <table className="table is-bordered">
            <tbody>
                <tr>
                    <td>Grade</td>
                    <td>Feed</td>
                </tr>
                <tr>
                    <td>Test Weight (kg/hl)</td>
                    <td> > 680</td>
                </tr>
                <tr>
                    <td>Moisture, %</td>
                    <td> ≤ 14.0%</td>
                </tr>
                <tr>
                    <td>Damaged Kernels, %</td>
                    <td> ≤ 6.0%</td>
                </tr>
                <tr>
                    <td>Broken Kernels, %</td>
                    <td> ≤ 6.0%</td>
                </tr>
                <tr>
                    <td>GMO</td>
                    <td>NON</td>
                </tr>
                <tr>
                    <td>Grain Impurities, %</td>
                    <td> ≤ 6.0%</td>
                </tr>
                <tr>
                    <td>Waste Impurities, %</td>
                    <td> ≤ 3.0%</td>
                </tr>
                <tr>
                    <td>Protein, %</td>
                    <td> > 9.0%</td>
                </tr>
            </tbody>
        </table>

        <lu> Delivery terms: DAP, FOB, CFR <strong>(GAFTA)</strong> , incoterms 2010. </lu>
        <li> Free from musty, moldy, and foreign smells.</li>
        <li> As per customer's requirement other non-class-generating quality parameters</li> <li>can be analyzed in accordance with internationally recognized and approved methods.</li>
        <li>  Minimum Order Quantity: 1000 metric tons;</li>
        <li> Origin: euro</li>
        <li> Shipment: in bulk;</li>
        <li> Delivery terms: DAP, FOB, CFR (GAFTA);</li>
        <lu> Shipping documents: </lu>
        <li> •	Commercial invoice;;</li>
        <li> •	Ocean/CP bill of lading, railway bill;</li>
        <li> •	Certificate of origin;</li>
        <li> •	Certificate of quality issued by independent surveyor;</li>
        <lu> Payment options: </lu>
        <li>•	Advance payment; </li>
        <li> •	Irrevocable Letter of Credit at sight issued by a Top World Bank and available with Seller's bank only if order is 1000 MT min and only</li>

        <h2 className=" has-bg-blue is-size-4"> Wheat </h2>
        We offer high purity wheat , originally euro , moisture less than 13% , non GMO
    </body>
);

contents['Alfalfa hay'] =(
    <div>
        We offer high quality European alfalfa hay , moisture less than 13 % and protein percent min 18% , with
best offer .
    </div>
);


contents['Sunflower meal pellets'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4"> Sunflower Meal</h2>
        <p>Sunflower meal is a valuable excellent protein-rich livestock feed.
        It is included in food intake for cattle, poultry and fish.
    </p>

        <table className="table is-bordered">
            <tbody>
                <tr>
                    <td>Country Of Origin</td>
                    <td>euro</td>
                </tr>
                <tr>
                    <td>Moisture And Volatile Matter, %</td>
                    <td> 7-10% </td>
                </tr>
                <tr>
                    <td>Mass share of a crude protein in recalculation on bone-dry substance, %</td>
                    <td> ≥ 36%</td>
                </tr>
                <tr>
                    <td>Mass share of ashes, non-soluble in hydrochloric acid, in recalculation on bone-dry substance, %</td>
                    <td> ≤ 1%</td>
                </tr>
                <tr>
                    <td>Mass share of crude cellulose in the unoiled product in recalculation on bone-dry substance, %</td>
                    <td> 23%</td>
                </tr>
                <tr>
                    <td>Mass share of a residual amount of a dissolvent (petrol), %</td>
                    <td> 0.1% </td>
                </tr>
                <tr>
                    <td>Color</td>
                    <td> Grey</td>
                </tr>
            </tbody>
        </table>
        <p>
            <lu>  
        Packaging: in bulk;</lu>

            <li> Delivery terms: FCA, CPT, DAP, FOB, CFR;</li>
            <li> Shipment: in 20' containers in big-bags, rail wagons, vessel;</li>
            <li> Production capacity: 15000-20000 MT monthly;</li>
            <li> Shipping documents:</li>
            <li> •	Commercial invoice;</li>
            <li> •	Ocean/CP bill of lading, railway bill;</li>
            <li> •	Packing list;</li>
            <li> •	Certificate of origin;</li>
            <li> •	Certificate of quality issued by the manufacturer;</li>
            <li> Payment options:</li>
            <li> •	Advance payment;</li>
            <li> •	Irrevocable Letter of Credit at sight issued by a Top World Bank and available with Seller's bank only if order is 1000 MT Min only on sea shipping.</li>

        </p>
    </body>
);

contents['Soybeans meal pellets'] = (
    <body>
        From our merchandisers, who can help you decide which contracts are right for you, to our wide range of products and services, we’re ready to help you manage risk, feed your livestock and protect your assets.
        <br/>
The reason is simple—we know that when it comes to feeding and fueling the world, we’re in this business together. And in order for us to succeed, you must succeed.
<br/>
Take a moment to browse around and learn how company name  can be a vital contributor to your success. Or, contact us today
And helping fodder factories by supply them the raw material of grain and fodder with best price and best quality to reduce the cost of product to the lowest.
<br/>
 We are suppliers of high quality animal fee meal at the most affordable and competitive prices in   the market.
        <h2 className=" has-bg-blue is-size-4"> Soybeans meals in bags 25 k.g</h2>
        <table className="table is-bordered">
            <tbody>
                <tr>
                    <td>Product Name</td>
                    <td>Natural Soybean Meal </td>
                </tr>
                <tr>
                    <td>MRaw Material</td>
                    <td> Non-GMO Soybean </td>
                </tr>
                <tr>
                    <td>Appearance</td>
                    <td>Yellow or light brown</td>
                </tr>
                <tr>
                    <td>Grade</td>
                    <td> Feed Grade</td>
                </tr>
                <tr>
                    <td>Moisture</td>
                    <td> Max 12%</td>
                </tr>
                <tr>
                    <td>Crude Protein</td>
                    <td> ≥ 46% </td>
                </tr>
                <tr>
                    <td>Crude Fat</td>
                    <td> more than 1.5%</td>
                </tr>
            </tbody>
        </table>
    </body>
);
contents['Graps'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4"> Grapes.   </h2>


        <p>
            May till Sept
    </p>

        <h2 className=" has-bg-blue is-size-4"> Varities:  </h2>
        <h2 className=" has-bg-blue is-size-4"> <lu> 1-Seedless  </lu></h2>

        <li> white early superior </li>
        <li>  white Superior - Flame - Crimson - Red globe </li>


        <h2 className=" has-bg-blue is-size-4">2-Seeded</h2>
        <p>
            Victoria
    </p>

        <h2 className=" has-bg-blue is-size-4">Packing:</h2>
        <pre>
            2400 Crts X 5Kgn.w X 10 punnets
        3600 Crts X 4.5Kg n.w X 9bags
    </pre>
    </body>
);

contents['Apple'] = (
    <body>

        <h2 className=" has-bg-blue is-size-4"> Fresh euro apples   </h2>

        <p> We making future contract with euro farmers of quality  fresh apples and and some spot contract ,
          and making contract with European sorting and packing station ,
          for supply our buyers best quality euro apples in time with best prices . </p>
        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../Fresh apples/fresh-apple (24).jpg" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2 className=" has-bg-blue is-size-4"> <lu> 1:- red delicious apples </lu> </h2>

        <li>  NAME Red </li>
        <li>  SURNAME Stark, Stark Delicious or Delicious </li>
        <li>  HARVEST SEASON from 1/9 to 20/9 </li>
        <li>  PLACE OF BIRTH EURO </li>
        <li> Cold storage season: October to June of next year </li>
        </div>

        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../Fresh apples/fresh-apple (17).jpg" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2 className=" has-bg-blue is-size-4"> <lu> 2:- golden delicious apples </lu> </h2>

        <li> NAME Golden </li>
        <li> SURNAME Delicious </li>
        <li> HARVEST SEASON from 15/9 to 31/10 </li>
        <li> PLACE OF BIRTH EURO</li>
        <li> Cold storage season: October to June of next year </li>
        </div>


        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../Fresh apples/fresh-apple (12).jpg" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2 className=" has-bg-blue is-size-4"> <lu> 3:- royal gala apples </lu> </h2>

        <li> NAME Gala</li>
        <li> SURNAME  Royal</li>
        <li> HARVEST SEASON from 10/8 to 10/9</li>
        <li> PLACE OF BIRTH EURO</li>
        <li> Cold storage season: October to June of next year</li>
        </div>


        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../Fresh apples/fresh-apple (10).jpg" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2 className=" has-bg-blue is-size-4"> <lu> 4:-  Gala Must </lu></h2>

        <li> NAME Gala </li>
        <li> SURNAME Must </li>
        <li> HARVEST SEASON from 10/8 to 10/9 </li>
        <li> PLACE OF BIRTH EURO </li>
        <li> Cold storage season: October to June of next year </li>
        </div>

<div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../Fresh apples/fresh-apple (18).jpg" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2 className=" has-bg-blue is-size-4"> <lu> 4:- granny smith apples </lu></h2>

        <li>  NAME granny </li>
        <li>  SURNAME  smith </li>
        <li>  HARVEST SEASON from 10/8 to 10/9 </li>
        <li>  PLACE OF BIRTH EURO </li>
        <li>  Cold storage season: October to June of next year  </li>
        </div>

        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../Fresh apples/fresh-apple (19).jpg" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2 className=" has-bg-blue is-size-4"><lu> 5:- idaret fresh apples </lu></h2>

        <li>HARVEST SEASON from September and October </li>
        <li> PLACE OF BIRTH EURO </li>
        <li> Cold storage season: October to June of next year </li>


        <lu> PACKING </lu>
        <li> CARTON BOX 18-20 K.G </li>
        <li> PLASTIC BOX 13-18 K.G </li>
        <li> WOODEN BOX 13 K.G </li>
        </div>

    </body>
);
contents['Strawberry'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4"> Strawberry.  </h2>
        <h2 className=" has-bg-blue is-size-4">Sizes:</h2>15-22 mm / 22- 26 mm / 26 – 35        
 35mm-45mm        
        <p>
            Novamber till of february
</p>

        <h2 className=" has-bg-blue is-size-4">Varities: </h2>
        <p>
            All varieties are available:
            festival – Florida- Camaroza
</p>

        <h2 className=" has-bg-blue is-size-4">Packing:</h2>
        <p>
        2kg/ 8 punnets<br/>
        2.5kg/ 10 punnets
</p>
Punnet:250 gm n.w

    </body>
);

contents['Mango'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4"> Varieties available:-  </h2>



        <lu> All kinds available </lu>
        <li> • Estimated counts of measurements Mango fruits per
        carton boxes)</li>
        <li>  • Counts: 8/9/10/11/12/13/14/15/16/17/18 fruit per box</li>
        <li>  • Size: 250: 500</li>


        <h2 className=" has-bg-blue is-size-4"> <lu>Packing available:- </lu> </h2>


        <li> • 5 kg standard open top cartons </li>
        <li> • 171 carton box/pallet/3420 boxes/container </li>
        <li> • Pallet net. Weight 855 kg </li>


        <h2 className=" has-bg-blue is-size-4"><lu> Container Capacity:</lu> </h2>

        <li>• Tons per container: 17 Tons.</li>
        <li>• Pallets per container: 20 Pallets</li>
        <li>• Cartons per container: 3400 cartons</li>
        <li>• Cartons per pallet: 170 Cartons</li>

    </body>
);

contents['Fresh pomegranate'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4"> Varieties available:-   </h2>



        <lu>  All kinds available </lu>
        <li> • Estimated counts of measurements pomegranate fruits per
    carton boxes) </li>
        <li>• Counts: 8/9/10/11/12/13/14/15/16/17/18 fruit per box</li>
        <li>• Size: 250: 500</li>



        <h2 className=" has-bg-blue is-size-4"> <lu> Packing available:- </lu> </h2>


        <li> • 5 kg standard open top cartons </li>
        <li> • 171 carton box/pallet/3420 boxes/container </li>
        <li> • Pallet net. Weight 855 kg </li>



        <h2 className=" has-bg-blue is-size-4"> <lu> Container Capacity: </lu></h2>

        <li> • Tons per container: 17 Tons. </li>
        <li> • Pallets per container: 20 Pallets </li>
        <li> • Cartons per container: 3400 cartons </li>
        <li> • Cartons per pallet: 170 Cartons </li>

    </body>
);

contents['GARLIC AND ONION'] = (
    <body>
        <h2 className=" has-bg-blue is-size-4"> <lu> 1:- Garlic specifications: - </lu>  </h2>

        <li>    Origin: Egypt and euro </li>
        <li> Variety: (Fresh & Dry) </li>
        <li> Pure normal white garlic </li>
        <li> Green garlic </li>
        <li> Red Garlic </li>
        <li> Sizes: 3-4 cm, 4 cm, 5 cm, 5.5 cm, 6 cm, 6.5 cm and up </li>

        <lu>  Packing: </lu>
        <li> 5 kg mesh bag- plastic </li>
        <li> ( (Upon customer request )</li>
        <li> Container 40 ft / 25 ton.</li>


        <h2 className=" has-bg-blue is-size-4"> 2:- Onion Offer  </h2>
        <lu> Fresh Onion specifications: - </lu>
        <li>  Origin: - Egypt and euro </li>

        <h3 className="has-text-dark is-size-5"> <lu>Varieties: - </lu> </h3>
        <li> • Red Onion</li>
        <li> • White Onion</li>
        <li> • Spring onion</li>

        <h3 className="has-text-dark is-size-5"> <lu> Sizes: - </lu> </h3>
        <li> 40 /60 – 50 – 70 / 60 - 80 - up to 100 mm by cross diameter </li>

        <lu>  <h3 className="has-text-dark is-size-5">Optimum Relative Humidity:-</h3></lu>
        <li> 75 – 80% to get the best color </li>

        <h3 className="has-text-dark is-size-5"><lu> Optimum Temperature:- </lu> </h3>
        <li> For Container: 6 – 8 </li>

        <h3 className="has-text-dark is-size-5"> <lu>Packing:- </lu> </h3>
        <li> 10 kg, 25 kg Mesh Bags. </li>
        <h3 className="has-text-dark is-size-5"><lu> Quality:- </lu> </h3>
        <li>Fresh Onions , Grade A </li>

        <lu> Specifications: </lu>
        <li> seven layers of peel, drought rate ranging from 60 to up 80%, the head dry and close. </li>

        <lu>  Container Capacity 40 feet HQ:- </lu>
        <li> • Tons per container: 26 Tons.</li>
        <li> • Pallets per container: 20 Pallets</li>
        <li> • Bags per container: 1040 Bags /25 KG - 2600 Bags/10 KG
        Onion Offer</li>
        <li> • Bags per pallet:
        52 Bags / 25 kg, 130 Bags/10 Kg  </li>

        <li> Pallet net Weight: 1300 KG </li>
        <li> Delivery time:- 5-7 days from date of receive advanced payment </li>




    </body>
);
// ###################################################
contents['Citrus'] = (
    <body>
        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../Citrus/orang-03.png" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2 className=" has-bg-blue is-size-4"> <lu> 1:-Fresh oranges</lu></h2>
        <li> Origin:- Egypt – Italy - Spain </li>

        <p> Our business partners Biggest exporter and producer for CITRUS with high quality and quality certificates ( ISO9001 - GLOBAL G.A.B - BRC - HACCP - IFS )
    <br />
            Our packing station one of new and biggest with new technology we would like to present our "new orange" crops </p>
        </div>
        <table className="table is-bordered">
            <tbody>
                <tr>
                    <td>Navel Orange</td>
                    <td>( November till end of Feb)
                Size : ( 42 / 48 / 56 / 64 / 72 / 80 / 88 / 100 / 113 / 125 )
            </td>
                </tr>
                <tr>
                    <td>Valencia Orange</td>
                    <td>( February till end of May)
                Size : ( 48 / 56 / 64 / 72 / 80 / 88 / 100 / 113 / 125 )
            </td>
                </tr>
                <tr>
                    <td>Baladi Orange</td>
                    <td>( November till end of May)
                Size : ( 56 / 64 / 72 / 80 / 88 / 100 / 113 / 125 / 138 )
            </td>
                </tr>
                <tr>
                    <td>Lemon & Grapefruit</td>
                    <td>( November till end of March)
                Lemon Size : ( 72 / 80 / 88 / 100 / 113 / 125 / 138 / 150 / 163 / 175)
                Grapefruit Size : ( Small - Medium - Large )
            </td>
                </tr>

            </tbody>
        </table>

        <lu> Packing : Standard Cartons : </lu>
        <li> Net weight 15 KG, Gross weight 16Kg</li>
        <li> Net weight 7.5KG, Gross weight 8 Kg (Arabic Country)</li>
        <li> Also Bins Packing for orange for juice/net weight 550Kg</li>
        <li>   Gross weight 575Kg for one Bins </li>


        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../Citrus/orang-01.png" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2 className=" has-bg-blue is-size-4">  2:- Mandarin Offer </h2>
        <lu> specification Mandarin -; </lu>
        <li> Origin:- Egypt – Italy - spain </li>

        <lu> -Variety: </lu>
        <li>  Mandarin: with seed </li>
        <li> Clementine (morket): seedless </li>
        <li> Size -: 113 –100 –88 –80 </li>

        <lu> Packing  -:  </lu>
        <li> 8 kg \ open top carton </li>
        <li> Container 40 ft reefer:18- 22 MT </li>
        <li> No of Pallet : 20 Pallets </li>
        <li> Delivery term: - FOB, CNF, CIF, DDP </li>
        </div>

        
        
        <h2 className=" has-bg-blue is-size-4"> <lu> 3:- Fresh lemon & Lime specifications:</lu> </h2>

        <li> Origin:- Egypt – Italy - spain </li>

        <h3 className="has-text-dark is-size-5"> Varieties:-  </h3>
        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../Citrus/lemon-03.png" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h3 className="has-text-dark is-size-5"> <lu> 1:- Adalia Lemon : </lu> </h3>

        <li> Season: (October till end of March) </li>
        <li> Sizes: 80, 88, 100, 105, 113, 125, 138, 165. </li>
        <li> Shape: round shape, seeds, fat skin, juicy </li>

        <br />
        </div>
        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../Citrus/lemon-01.png" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h3 className="has-text-dark is-size-5"> <lu> 2:-Verna Lemon : </lu> </h3>
        <li>Season: (February till end of May)</li>
        <li>Sizes: 80, 88, 100 , 105 , 113 , 125 , 138 , 165.</li>
        <li>Shape: long, thin skin, seeds, more juicy</li>

        <br />

        </div>
        
        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../Citrus/lemon-02.png" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h3 className="has-text-dark is-size-5"> <lu> 3:-Baladi (banzaher & limes) </lu></h3>
        <li> Season: (around year) </li>
        <li>  Size: (150,160, 174, 190) </li>
        <li> Color: yellow in (winter & spring) green in (summer and autumn) </li>


        <br />
        </div>
        
        
        
        <h3 className="has-text-dark is-size-5"> <lu> Standard Packing & shipping : </lu></h3>
        <li>(Container 40 Reefer (under +5 celeclius) </li>
        <li>Net weight per whole container HQ reefer: 24 MT</li>
        <li>No of carton No of pallet per container: 20</li>
        <li>For Verna, adalia:</li>
        <li>Telescopic Carton Net Weight 15 KG, Gross 15, 85 KG No of carton per (one pallet: 80),( container: Lemon Offer 1600)Cartons</li>
        <li>For limes:</li>
        <li>10 or 15 kg in mesh beg, or carton</li>
        <li>Optimum Temperature: 12 – 14 for storing for five months</li>
        <li>Optimum Relative Humidity: 90 – 95%</li>
        <li>Delivery Terms: FOB, CNF, CIF.</li>
        <li>Delivery time: 5-7 days after the payment.</li>

    </body>
);




contents['De-Ice Salt'] = (
    <body>
        <video width="55%" height="340" controls controlsList="nodownload noremote foobar">
  <source src="../../salt.mp4"  type="video/mp4"/>
</video>
        <p> We able to produce and supply over 2 million ton per years , we able enter any tender for salt around the globe , we looking for reduce invoice  of cleaning roads from the snow by supply super quality salt making roads very safe , with best prices on time without any delay .
    De-icing Salt (Sodium chloride) is the most widely used de-icing agent in Europe , canada and usa and throughout the world due to its huge advantages over the alternatives.</p>
        <ul> It is the ideal de-icing material because:</ul>
        <li>It melts ice & snow rapidly.</li>
        <li> It is widely-occurring and readily available</li>
        <li> It is the most cheapest method as de-icer</li>
        <li> It is much efficient, easy to use, easy to spread, store and handle </li>
        <li> It is harmless to skin, clothing and environment </li>
        <h3>We offering high quality salt as following:</h3>
        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../De-ice/De-ice (3).jpg" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} />
        <h2 className=" has-bg-blue is-size-4"> 1:- Raw Rock crystal salt De-ice salt </h2>
        <p>
            analysis as following , NacL OVER 98.59% ( purity) , Moisture 0.42 % and Water Insoluble 0.46 %  , </p>
        <br/>
        SGS analysis of our rock crystal salt as following:
        <table className="table is-bordered">
            <tbody>
                <tr>
                    <th>Elements</th>
                    <th>Result %</th>
                    <th>Analysis Method</th>
                </tr>
                <tr>
                    <td>Moisture</td>
                    <td>0.42</td>
                </tr>
                <tr>
                    <td>Purity (as Sodium Chloride)</td>
                    <td>98.59</td>
                </tr>
                <tr>
                    <td>Water Insoluble</td>
                    <td>0.46</td>
                </tr>
                <tr>
                    <td>SO4</td>
                    <td>0.60</td>
                </tr>
                <tr>
                    <td>Ca++</td>
                    <td>0.18</td>
                    <td>ASTM E534/2003</td>
                </tr>
                <tr>
                    <td>Mg++</td>
                    <td>0.05</td>
                </tr>
                <tr>
                    <td>CaSO4</td>
                    <td>0.61</td>
                </tr>
                <tr>
                    <td>MgSO4</td>
                    <td>0.21</td>
                </tr>
                <tr>
                    <td>Mgcl2</td>
                    <td>0.03</td>
                </tr>
            </tbody>
        </table>
        </div>   
            
            
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../De-ice/De-ice (12).jpg" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} />
                <h2 className=" has-bg-blue is-size-4">  2:- raw sea salt for de-ice </h2>
            <p><lu> We able to supply high quality sea salt too for de-ice  Nacl min 97.5% and moisture from 1-4 % max</lu>

            <li> -	Sorting , crush high level and sizing according to client want ( 0-4 &1-5 &2-10 &1-12) mm or any size we do it and we can supply it raw without crushing according to your request.</li>
            <li>  -	Anti caking agent as client request 50 ppm or any percent client want and the kind the client want for anti caking.</li>
            <li>  -	We give SGS certification , by analysis and quantity load on the vessel , and can check vessel banker too before loading to arrive salt in quality vessel too .</li> </p>

        </div>
        
        <h2 className=" has-bg-blue is-size-4"> <lu> Condition of sales </lu> </h2>
        <li>  Minimum Order Quantity: 3000 metric  tons </li>
        <li> Shipment: in bulk</li>
        <li>
            Our loading vessel rate best rate for loading vessel in Egypt without any delay </li>
        <li>  Origin: Egypt</li>
        <li>   Delivery terms: EXW , FOB , CIF OR EVEN DDP to the warehouse of our client , incoterms 2010</li>

        <li>  Packing options bags 50k.g , or bags 25 k.g or jumbo bags 1 ton or 1.5 ton in bags min order 200 ton </li>
        <br/>
    </body>
);


contents['Industrial Salt'] = (
    
    <body>
        <p>    Salt It is a key component in the production of different industries, as almost all industries in the world use sodium chloride salt, either as a main material or an additive.  Chemical industries represent the largest consumers  of salt, which is used in the production of prime chemicals , chlorine that is used  in water treatment facilities,Caustic Soda used as a dyes in textile and detergents,Soda Ash is used in glass , soap  and leather tanning industry , Manufacture of paper - plastics - ceramics , fertilizer etc
         </p>
        
        <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../industrial salt/industrial salt(2).png" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} />
        <h2 className=" has-bg-blue is-size-4">  1:- Rock crystal salt for industrial use (one time washed rock crystal salt)</h2>
        <p>Purity over 99.5% and moisture less than 0.5 % Insoluble 0.3 %</p>
        </div>
        
            
          <div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../industrial salt/industrial salt(3).png" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} />   
        <h2 className=" has-bg-blue is-size-4">  2:-we offer one time or two times sea crystal salt for industrial use too .</h2>
        Nacl min for sea crystal salt 98.5% moisture from 1-3% <p />
        </div>
        

        <h2 className=" has-bg-blue is-size-4"> <lu> condition of sales </lu> </h2>

        <li> Minimum Order Quantity: 3000 metric  tons </li>

        <li> Shipment: in bulk</li>
        <li>
            Our loading vessel rate best rate for loading vessel in Egypt without any delay</li>

        <li> Origin: Egypt</li>

        <li>  Delivery terms: EXW , FOB , CIF OR EVEN DDP to the warehouse of our client , incoterms 2010</li>

        <li> Packing options bags 50k.g , or bags 25 k.g or jumbo bags 1 ton or 1.5 ton in bags min order 200 ton</li>

        <lu> Shipping documents: </lu>
        <li> •	Commercial invoice </li>
        <li>  •	Ocean/CP bill of lading, railway bill </li>
        <li>  •	Certificate of origin;</li>
        <li> •	Certificate of quality issued by independent surveyor; SGS </li>

        <lu> Payment options: </lu>
        <li> •	Advance payment;</li>
        <li> Irrevocable Letter of Credit at sight issued by a Top World Bank and available with Seller's bank only if order is    3000 MT min </li>
        
        
<div className="card" style={{ padding: 20 ,margin:10 , marginLeft: 0 }}>
                <img src="../../industrial salt/industrial salt(4).png" style={{ float: 'right', maxWidth: '100%',maxHeight:300 }} /> 
        <h2 className=" has-bg-blue is-size-4">  3:- tablet salt for water softener </h2>


        Details : pressed salt in oval rectangular shape of 2.5*2.0*1.0 cm ,used in water treatment units to activate chemical resins .
      <br />

        <lu> Packing :</lu>
        <li>pollyethelin packge inside pollyproblin one of 25 k.g </li>
        <li> Specifications: Sodium chloride NACL ( dry base) :99.0-99.5% </li>
        <li> Insoluble matter: 0.10-0.15 % </li>
        <li> Soluble matter: 0.40-0.85 % </li>
        <li> Bicarbonate: 0.024-0.049 % </li>
        <li> Sulphate: 0.30-0.55 % </li>
        <li> Calcium: 0.040-0.13 % </li>
        <li> Magnesium: 0.034-0.12% </li>

<br/>
    
        </div>
    </body>
);


contents['Edible Salt'] = (
    <body>
        <h3>our salt come with quality standard </h3>

<li> IFS , GMP,  ISO 22000:2005 </li>
<li> ISO 14001/2004 </li>
<li> ISO 9001 / 2000</li>
<li>BS OHSAS 18001: 2007</li> 
and much more quality certifications , quality is first.
<br/> 
<br/>
        <h2 className=" has-bg-blue is-size-4"> 1 :- Edible fine washed salt iodized or non iodized </h2>
        <p>   Details : all remain above 3 mm mesh with tolerance 5 % use s edible salt for food industrial </p>

        <lu>  Packing : </lu>
        <li> polypropylene packages each of 50 k.g or inside jumbo bags each of 1 ton or as customer request . </li>

        <lu> Specifications: </lu>
        <li> Sodium chloride(dry base)Nacl: 99.0-99.5% </li>
        <li> Insoluble matter: 0.1 - 0.15% </li>
        <li> Soluble matter: 0.40 - 0.85 % </li>
        <li>  Moisture:0.10 - 0.30 % </li>
        <li>  Bicarbonate:0.024 - 0.049 % </li>
        <li>  Sulphate: 0.30 - 0.55 % </li>
        <li>  Calcium: 0.04 - 0.13 % </li>
        <li>  Magnesium: 0.034 – 0.12 % </li>
        
        <h2 className=" has-bg-blue is-size-4">  2:- kitchen fine salt </h2>
        <p> Refined iodized table salt or non iodized ,
        All pass through 1mm mesh with tolerance 5% </p>

        <lu>  Package: </lu>
        <li> Polyethlene  package inside polypropylene one of 25 k.g , or polyethylene packages each of 400 gram or 200 gram </li>

        <li> inside polypropylene one of 25 k.g , or inside carton box of 20 k.g , or polyethylene packages of self closing type each of 0.4 k.g .</li>

        <li> inside polypropylene one of 20 k.g or inside carton box 20 k.g.</li>


        <lu>  Specifications: </lu>
        <li> Sodium chloride(dry base)Nacl: 99.0-99.5% </li>
        <li>  Insoluble matter: 0.1 - 0.15% </li>
        <li> Soluble matter: 0.40 - 0.85 % </li>
        <li> Moisture:0.10 - 0.30 % </li>
        <li> Bicarbonate:0.024 - 0.049 % </li>
        <li> Sulphate: 0.30 - 0.55 %</li>
        <li> Calcium: 0.04 - 0.13 % </li>
        <li> Magnesium: 0.034 – 0.12 % </li>

        <h2 className=" has-bg-blue is-size-4">  3:- coarse kitchen salt </h2>,
       <p> Coarse kitchen salt all pass through 3mm mesh with the tolerance 5 % </p>

        <lu> Packages: </lu>
        <li> polyethylene package inside polypropylene one of 25 k.g , or according to the customer request . </li>

        <lu>Specifications:- </lu>

        <li> Insoluble matter: 0.1 - 0.15% </li>
        <li> Soluble matter: 0.40 - 0.85 % </li>
        <li> Moisture:0.10 - 0.30 % </li>
        <li> Bicarbonate:0.024 - 0.049 % </li>
        <li> Sulphate: 0.30 - 0.55 % </li>
        <li> Calcium: 0.04 - 0.13 % </li>
        <li> Magnesium: 0.034 – 0.12 % </li>


        <h2 className=" has-bg-blue is-size-4">  Production Of Ultra Pure Sodium Chloride Vacuum </h2>

        <h2 className=" has-bg-blue is-size-4">  The uses of Sodium Chloride (Vacuum) Salt </h2>

        <lu> Used for  haemodialysis solutions,Textile,food, Sodium Carbonate and Chloralkali industries </lu>

        <li> •	Extra pure. </li>
        <li> •	Comply with the health and international regulations </li>
        <li> •	Reduce the time for the preparation of salt solution for medical purposes. </li>
        <li>  •	Reduce the cost of the chemical treatment. </li>

        <lu>Physical Properties: </lu>
        <li> •	Salt size: 0.01- 1.0 mm </li>

        <lu>Chemical properties: </lu>
        <li> •	Sodium Chloride 99.5 % Min </li>
        <li> •	Water insoluble impurities  0.05% </li>
        <li> •	Water soluble impurities     0.08% </li>
        <li> •	Moisture                           0.2 % </li>
        <li> •	we also making salt for meat industrial in bags 25 k.g </li>
<br/>

    </body>
);