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
                                <h2 className="subtitle has-text-grey-lighter is-size-4">
                                    Irure excepteur ex enim occaecategory  consectetur fugiat nulla voluptate.Do est ex laboris laborum laboris sit aliquip.
                                </h2>
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
            <a href={'./' + index} className={ index == params.index ? 'button is-outlined full is-uppercase is-medium is-size-6 is-darkblue-active' : 'button is-outlined full is-uppercase is-medium is-size-6 is-darkblue' }> {e.name} </a>
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
                        <ProductContent name={category.name} />
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
    if (params.len < 2) {
        return (<h1 className="has-text-black has-text-centered"> NO Galary </h1>);
    } else {
        let arrToRender = [];
        params.imgs.forEach(element => {
            console.log(element);
            arrToRender.push( <div className="card column is-one-third" > <div className="is-bg-center-cover" style={{ backgroundImage: "url('" + element + "')" , height: '200px'}}> </div> </div>  );
        });
        return (
            <div>
                <h1 className="has-text-black has-text-centered is-size-3 "> Gallery</h1>
                <br/>
                <div className="columns is-multiline">{arrToRender}</div>
            </div>
        );
    }
}





function ProductContent(params){
    console.log('====================================');
    console.log(params.name);
    console.log('====================================');
    let nameTag = <h1 className="has-text-dark is-size-3">{params.name}</h1> ;
    let contentTag = '';
    
    return <div> {nameTag} <br/> {contents[params.name]} </div>
    
}

let contents = {};

contents['Kidney white beans'] = (
    <body>
    <h1> Kidney white beans </h1>
         
         <p>
             White kidney beans are a protein-rich starchy vegetable, full of vitamins, minerals and an excellent source of dietary fiber. Adding them to your diet offers a variety of health benefits such as promoting digestive health and preventing heart disease. White kidney beans are large and squared at the edges, unlike smaller white beans, such as navy beans.
   
         </p>
         
         <h2>Specifications:</h2>
         <p>180/200 or 180/200 beans for each 100 gram </p>
         
         <h2>packing</h2>
         <p>In bags 25 k.g . Container 20 fet , 23 ton of kidney white beans</p>
     </body>
);

contents['Coffe Beans'] = (
    <body>
<h2> coffe Beans</h2>
      <p>
          Types of coffee beans. The two main types of coffee beans are Coffee Arabica and Coffee Robusta. People also use a blend of both beans. Both types of coffee beans taste differently depending on where and how they are grown. What is the difference in Coffee Robusta versus Coffee Arabica? Do types of coffee beans used make a difference? 
          <br/>
The types of coffee beans used to make the morning coffee everyday are probably of little concern to the average person. However, the true coffee lover knows the various types of coffee beans if for no other reason than to be able to pick out their favorites from among the many available varieties. The two most common types of coffee beans used in making coffee are the Arabic bean and the Robusta bean. These two beans are used more than any other variety of beans, either in their pure form or in coffee blends.

      </p>
  </body>
);

contents['Cocoa beans'] = (
    <body>
    <p>
        The three main varieties of cocoa plant are Forastero, Criollo, and Trinitario. The first is the most widely used, comprising 80-90% of the world production of cocoa. Cocoa beans of the Criollo variety are rarer and considered a delicacy 
   we offer the three varieties of cocoa beans.
   <h3>Contact us for more details and for best offer </h3>
   </p>
     </body>
);
contents['Corn sillage']= (
    <p> 
       <strong>Corn silage</strong>  is a popular forage for ruminant animals because it is high in energy and digestibility and is easily adapted to mechanization from the stand-crop to time of feeding. <strong>Corn silage</strong> should have a light, pleasant smell with only a slight vinegar odor. It should be slightly brown to dark green.
        Contact us for best offer 
    </p>
 );
contents['Dry bulk vesel']= (
    <body>
    <p> 
        We offer various services related with import and exports of goods to different destinations around the world, our services includes Customs Clearing & Forwarding,  handling of Project Cargoes and Heavy Lifts, Chartering Broker, Freight Forwarding, and Bunkering.
    
    </p>
          
     <h2> Chartering </h2>     
    <p>
        Chartering is handled via our world wide relation network with the aim of getting the most out of every cargo and seeing that you also will have a through update and our best services during the exclusive charter period.
    We specialize in chartering vessels for the following goods: Urea, Minerals (clay – feldspar – salt- silica sand), Cement (clinker – cement), Steel production (Steel bars – steel billets), Vegetables (potatoes – citrus-onions)
    We specialize in the following geographic areas: all Mediterranean, Aegean sea, Marmarah sea, and Black sea, Red sea, West Africa, Continental and Baltic sea , Adriatic sea , and north sea 
    
     <h2> Ship brokers (specialist)  </h2> 
          Brokerage/charting of tonnage from 1000 Mt Dwt up to panamax DWT for exclusive charters. The company has a team of dedicated brokers, who are constantly in touch with the market and are capable of advising the clients about the changing market scenario. We have been successful in establishing a very close working relationship with a number of ship owners and charters and offer them the highest level of personalized service
    
    <h2>Types of Goods We ship  </h2>
          
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

contents['Corn GLUTEN'] =(
    <body>
    <h2>CORN GLUTEN MEAL</h2>
        <p>
            Corn gluten meal is a yellow powder or granular created as a by-product during a milling process corn. It is a high-protein concentrate typically supplied at 60% protein. It is a valuable source of methionine. It is primarily used as a supplement in farm animal feeds, dog food, and fish food. Corn gluten meal also has a level of xanthophylls, which offers the poultry feed formulators an efficient yellow pigmenting ingredient. Corn gluten meal also is excellent cattle feed providing a high level of rumen bypass protein.
    
            Specification
            Protein 60% min.
            Ash 3% max.
            Moisture 12%max.
            Fat 5%max.
            Fibre 2% max.
    
            1.Made from native high quality corn.
            2.Golden Appearance.
            3.NON-GMO
            4.Aflatoxin:Non
        </p>
    </body>
    );
contents['Wheat Bran'] =(

<body>
<h2>Wheat Bran</h2>
    <p>
        Fibre: 11.00% max.
        Moisture: 15.00% max.
        Protein: 14.00% min.
        Diameter of Granule: 4.07-14.70 mm
        Packing:
        Wheat Bran
        Granulated Wheat Bran Packing: Polypropylene Bags 40 kg, 1,000 t Bulk Bags.
        Bulka / Jumbo Bags of 0.5 t - 1 t.
        Bulk-Loose in PP Lined Container.

        Minimum quantity of sales: 120 tons in 5x40'fcl.

        http://www.nutreco.it/

    </p>
  
</body>
);
contents['Sugar beet pulp pellets'] =(
<body>
<h2> High quality Sugar beet pulp pellets </h2>

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



contents['Yellow corn mazia and wheat'] =(
<body>
<h2> Yellow Corn </h2>
<p> Corn (maize) - one of the most popular foods in the world, and is the second best-selling grain culture after wheat. , the most commonly grown type of corn is sugar yellow corn.
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
        <td> \> 680</td>
    </tr>
    <tr>
        <td>Moisture, %</td>
        <td>\≤ 15.0</td>
    </tr>
    <tr>
        <td>Damaged Kernels, %</td>
        <td> \≤ 6.0</td>
    </tr>
    <tr>
        <td>Broken Kernels, %</td>
        <td> \≤ 6.0</td>
    </tr>
    <tr>
        <td>Aflatoxins (including B1, B2, G1, G2)</td>
        <td> \≤ 20.0</td>
    </tr>
    <tr>
        <td>Grain Impurities, %</td>
        <td> \≤ 6.0</td>
    </tr>
    <tr>
        <td>Waste Impurities, %</td>
        <td> \≤ 3.0</td>
    </tr>
    <tr>
        <td>Protein, %</td>
        <td> \> 9.0</td>
    </tr>
    </tbody>
</table>
    <p>
        The price of yellow corn in bulk can be found in our price list
        Free from musty, moldy, and foreign smells.
        As per customer's requirement other non-class-generating quality parameters can be analyzed in accordance with internationally recognized and approved methods.
        Minimum Order Quantity: 1000 metric tons;
        Origin: euro
        Shipment: in bulk;
        Delivery terms: DAP, FOB, CFR (GAFTA);
        Shipping documents:
        •	Commercial invoice;;
        •	Ocean/CP bill of lading, railway bill;
        •	Certificate of origin;
        •	Certificate of quality issued by independent surveyor;
        Payment options:
        •	Advance payment;
        •	Irrevocable Letter of Credit at sight issued by a Top World Bank and available with Seller's bank only if order is 1000 MT min and only

    </p>

 </body>
);


contents['Sunflower meal pellets'] =(
    <body>
<h2>Sunflower Meal</h2>
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
        <td> 7-10 </td>
    </tr>
    <tr>
        <td>Mass share of a crude protein in recalculation on bone-dry substance, %</td>
        <td>\≥ 39</td>
    </tr>
    <tr>
        <td>Mass share of ashes, non-soluble in hydrochloric acid, in recalculation on bone-dry substance, %</td>
        <td> \≤ 1</td>
    </tr>
    <tr>
        <td>Mass share of crude cellulose in the unoiled product in recalculation on bone-dry substance, %</td>
        <td> 23</td>
    </tr>
    <tr>
        <td>Mass share of a residual amount of a dissolvent (petrol), %</td>
        <td> 0.1 </td>
    </tr>
    <tr>
        <td>Color</td>
        <td> Grey</td>
    </tr>
    </tbody>
    </table>
    <p>
        The price of sunflower meal in bulk can be found in our prices list .
        Packaging: in bulk;
        Delivery terms: FCA, CPT, DAP, FOB, CFR;
        Shipment: in 20' containers in big-bags, rail wagons, vessel;
        Production capacity: 15000-20000 MT monthly;
        Shipping documents:
        •	Commercial invoice;
        •	Ocean/CP bill of lading, railway bill;
        •	Packing list;
        •	Certificate of origin;
        •	Certificate of quality issued by the manufacturer;
        Payment options:
        •	Advance payment;
        •	Irrevocable Letter of Credit at sight issued by a Top World Bank and available with Seller's bank only if order is 1000 MT Min only on sea shipping.

    </p>
    </body>
);

contents['Soybeans meal pellets'] =(
    <body>
 <h2>Soybeans meals in bags 25 k.g</h2>
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
            <td> more than 10%</td>
        </tr>
        <tr>
            <td>Crude Protein</td>
            <td> \≥46% </td>
        </tr>
        <tr>
            <td>Crude Fat</td>
            <td> more than 1.5%</td>
        </tr>
        </tbody>
</table>
    </body>
);
contents['Graps'] =(
    <body>
    <h2 className=" has-bg-blue is-size-4"> Grapes.   </h2>
    
    
    <p>
        May till Sept
    </p>
    
    <h2 className=" has-bg-blue is-size-4"> Varities:  </h2>
    <h2 className=" has-bg-blue is-size-4"> 1-Seedless </h2>
    <p>
        white early superior
        white Superior - Flame - Crimson - Red globe
    </p>
    
    <h2 className=" has-bg-blue is-size-4">2-Seeded</h2>
    <p>
        Victoria
    </p>
    
    <h2 className=" has-bg-blue is-size-4">Packing:</h2>
    <p>
        2400 Crts X 5Kgn.w X 10 punnets
        3600 Crts X 4.5Kg n.w X 9bags
    </p>
    </body>
);

contents['Apple'] =(
    <body>
    
    <h2 className=" has-bg-blue is-size-4"> Fresh euro apples   </h2>
    
      <h2 className=" has-bg-blue is-size-4"> We making future contract with euro farmers of quality  fresh apples and and some spot contract ,
          and making contract with European sorting and packing station ,
          for supply our buyers best quality euro apples in time with best prices . </h2>
    <h2 className=" has-bg-blue is-size-4"> 1:- red delicious apples  </h2>
    <p>
        NAME Red
        SURNAME Stark, Stark Delicious or Delicious
        HARVEST SEASON from 1/9 to 20/9
        PLACE OF BIRTH EURO
        Cold storage season: October to June of next year
    </p>
    <img src="../../Fresh apples/red delicious in carton box.jpg" />
    
    <h2 className=" has-bg-blue is-size-4"> 2:- golden delicious apples </h2>
    <p>
        NAME Golden
        SURNAME Delicious
        HARVEST SEASON from 15/9 to 31/10
        PLACE OF BIRTH EURO
        Cold storage season: October to June of next year
    </p>
    <img src="../../Fresh apples/golden delicious.jpg"/>
    
    
    <h2 className=" has-bg-blue is-size-4"> 3:- royal gala apples  </h2>
    <p>
        NAME Gala
        SURNAME  Royal
        HARVEST SEASON from 10/8 to 10/9
        PLACE OF BIRTH EURO
        Cold storage season: October to June of next year
    </p>
    <img src="../../Fresh apples/Gala Royal  (2).jpg"/>
    
    
     <h2 className=" has-bg-blue is-size-4"> 4:-  Gala Must </h2>
    <p>
        NAME Gala
        SURNAME Must
        HARVEST SEASON from 10/8 to 10/9
        PLACE OF BIRTH EURO
        Cold storage season: October to June of next year
    </p>
    
    <img src="../../Fresh apples/Gala Must 1 (2).jpg"/>
    <img src="../../Fresh apples/gala must.jpg"/>
    
    <h2 className=" has-bg-blue is-size-4"> 5:- granny smith apples </h2>
    <p>
        NAME granny
        SURNAME  smith
        HARVEST SEASON from 10/8 to 10/9
        PLACE OF BIRTH EURO
        Cold storage season: October to June of next year
        5:- idaret fresh apples
        HARVEST SEASON from September and October
        PLACE OF BIRTH EURO
        Cold storage season: October to June of next year
    
    
        PACKING
        CARTON BOX 18-20 K.G
        PLASTIC BOX 13-18 K.G
        WOODEN BOX 13 K.G
    </p>
    <img src="../../Fresh apples/granny smith.jpg"/>
    
    </body>
);    
contents['Strawberry'] =(
<body>
<h2 className=" has-bg-blue is-size-4"> Strawberry.  </h2>


<p>
    Novamber till of february
</p>

<h2 className=" has-bg-blue is-size-4">Varities: </h2>

<p>
    All varieties are available
</p>

<h2 className=" has-bg-blue is-size-4">Packing:</h2>
<p>
    0.5Kg n.w X 10 punnets
</p>


</body>
);    

contents['Mango'] =(
    <body>
    <h2 className=" has-bg-blue is-size-4"> Varieties available:-  </h2>
    
    
    <p>
        All kinds available
        • Estimated counts of measurements Mango fruits per
        carton boxes)
        • Counts: 8/9/10/11/12/13/14/15/16/17/18 fruit per box
        • Size: 250: 500
    </p>
    
    <h2 className=" has-bg-blue is-size-4">Packing available:-  </h2>
    
    <p>
        • 5 kg standard open top cartons
        • 171 carton box/pallet/3420 boxes/container
        • Pallet net. Weight 855 kg
    </p>
    
    <h2 className=" has-bg-blue is-size-4">Container Capacity: </h2>
    <p>
        • Tons per container: 17 Tons.
        • Pallets per container: 20 Pallets
        • Cartons per container: 3400 cartons
        • Cartons per pallet: 170 Cartons
    </p>
    </body>
);    

contents['Fresh pomegranate'] =(
<body>
<h2 className=" has-bg-blue is-size-4"> Varieties available:-   </h2>


<p>
    All kinds available
    • Estimated counts of measurements pomegranate fruits per
    carton boxes)
    • Counts: 8/9/10/11/12/13/14/15/16/17/18 fruit per box
    • Size: 250: 500

</p>

<h2 className=" has-bg-blue is-size-4">Packing available:-  </h2>

<p>
    • 5 kg standard open top cartons
    • 171 carton box/pallet/3420 boxes/container
    • Pallet net. Weight 855 kg

</p>

<h2 className=" has-bg-blue is-size-4">Container Capacity: </h2>
<p>
    • Tons per container: 17 Tons.
    • Pallets per container: 20 Pallets
    • Cartons per container: 3400 cartons
    • Cartons per pallet: 170 Cartons
</p>
</body>
);    

contents['GARLIC AND ONION'] =(
    <body>
    <h2 className=" has-bg-blue is-size-4"> 1:- Garlic specifications: -   </h2>
    
    
    <p>
        Origin: Egypt and euro
        Variety: (Fresh & Dry)
        Pure normal white garlic
        Green garlic
        Red Garlic
    
        Sizes: 3-4 cm, 4 cm, 5 cm, 5.5 cm, 6 cm, 6.5 cm and up
        Packing:
        5 kg mesh bag- plastic
        ( (Upon customer request )
        Container 40 ft / 25 ton.
    </p>
    
    <h2 className=" has-bg-blue is-size-4"> 2:- Onion Offer  </h2>
    <p>
        Fresh Onion specifications: -
        Origin: - Egypt and euro
        Varieties: -
        • Red Onion
        • Golden (Yellow) Onion
        • White Onion
        • Spring onion
    
        Sizes: - 40 /60 – 50 – 70 / 60 - 80 - up to 100 mm by cross diameter
        Optimum Relative Humidity:- 75 – 80% to get the best color
        Optimum Temperature:- For Container: 6 – 8
        Packing:- 10 kg, 25 kg Mesh Bags.
        Quality:- Fresh Onions , Grade A
        Specifications: seven layers of peel, drought rate ranging from 60 to up 80%, the head dry and close.
        Container Capacity 40 feet HQ:-
        • Tons per container: 26 Tons.
        • Pallets per container: 20 Pallets
        • Bags per container: 1040 Bags /25 KG - 2600 Bags/10 KG
        Onion Offer
    
    
        • Bags per pallet: 52 Bags / 25 kg, 130 Bags/10 Kg
    
        Pallet net Weight: 1300 KG
        Delivery time:- 5-7 days from date of receive advanced payment
    
    </p>
    
    
    </body>
);
// ###################################################
contents['Citrus'] =(
    <body>
    <h2 className=" has-bg-blue is-size-4"> 1:-Fresh oranges </h2>
    <p> Origin:- Egypt – Italy - Spain
    
        Our business partners Biggest exporter and producer for CITRUS with high quality and quality certificates ( ISO9001 - GLOBAL G.A.B - BRC - HACCP - IFS )
    
        Our packing station one of new and biggest with new technology we would like to present our "new orange" crops
    </p>
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
    
    <p> Packing : Standard Cartons :
    Net weight 15 KG, Gross weight 16Kg
    Net weight 7.5KG, Gross weight 8 Kg (Arabic Country)
    Also Bins Packing for orange for juice/net weight 550Kg
        Gross weight 575Kg for one Bins </p>
    
    
      <h2 className=" has-bg-blue is-size-4">  2:- Mandarin Offer </h2>
    <p> -;specification Mandarin
    Origin:- Egypt – Italy - spain
    -Variety:
    Mandarin: with seed
    Clementine (morket): seedless
    113 –100 –88 –80 -: Size
    -: Packing
    8 kg \ open top carton
    Container 40 ft reefer:18- 22 MT
    No of Pallet : 20 Pallets
    Delivery term: - FOB, CNF, CIF, DDP
    </p>
    
    <h2 className=" has-bg-blue is-size-4"> 3:- Fresh lemon & Lime specifications: </h2>
    <p> Origin:- Egypt – Italy - spain
    
        Varieties:-
       <h3 className="has-text-dark is-size-5"> 1:- Adalia Lemon : </h3>
    
        Season: (October till end of March)
        Sizes: 80, 88, 100, 105, 113, 125, 138, 165.
        Shape: round shape, seeds, fat skin, juicy
    
    <h3 className="has-text-dark is-size-5">  2:-Verna Lemon :  </h3>
        Season: (February till end of May)
        Sizes: 80, 88, 100 , 105 , 113 , 125 , 138 , 165.
        Shape: long, thin skin, seeds, more juicy
    
    
    
    
    <h3 className="has-text-dark is-size-5">  3:-Baladi (banzaher & limes) </h3>
        Season: (around year)
        Size: (150,160, 174, 190)
        Color: yellow in (winter & spring) green in (summer and autumn)
    
    
    
    
    <h3 className="has-text-dark is-size-5">  Standard Packing & shipping : </h3>
        (Container 40 Reefer (under +5 celeclius)
        Net weight per whole container HQ reefer: 24 MT
        No of carton No of pallet per container: 20
        For Verna, adalia:
        Telescopic Carton Net Weight 15 KG, Gross 15, 85 KG No of carton per (one pallet: 80),( container: Lemon Offer 1600)Cartons
        For limes:
        10 or 15 kg in mesh beg, or carton
        Optimum Temperature: 12 – 14 for storing for five months
        Optimum Relative Humidity: 90 – 95%
        Delivery Terms: FOB, CNF, CIF.
        Delivery time: 5-7 days after the payment.
    </p>
    </body>
);




// ###################################################
contents['Edible Salt'] = (
    <body>
    <h2 className=" has-bg-blue is-size-4"> 1 :- Edible fine washed salt iodized or non iodized </h2>
     <p>   Details : all remain above 3 mm mesh with tolerance 5 % use s edible salt for food industrial
        Packing : polypropylene packages each of 50 k.g or inside jumbo bags each of 1 ton or as customer request .
        Specifications:
        Sodium chloride(dry base)Nacl: 99.0-99.5%
        Insoluble matter: 0.1 - 0.15%
        Soluble matter: 0.40 - 0.85 %
        Moisture:0.10 - 0.30 %
        Bicarbonate:0.024 - 0.049 %
        Sulphate: 0.30 - 0.55 %
        Calcium: 0.04 - 0.13 %
        Magnesium: 0.034 – 0.12 %
    
    <h2 className=" has-bg-blue is-size-4">  2:- kitchen fine salt </h2>
        Refined iodized table salt or non iodized ,
        All pass through 1mm mesh with tolerance 5%
        Package:
        Polyethlene  package inside polypropylene one of 25 k.g , or polyethylene packages each of 400 gram or 200 gram ,, inside polypropylene one of 25 k.g , or inside carton box of 20 k.g , or polyethylene packages of self closing type each of 0.4 k.g . inside polypropylene one of 20 k.g or inside carton box 20 k.g.
        Specifications:
        Sodium chloride(dry base)Nacl: 99.0-99.5%
        Insoluble matter: 0.1 - 0.15%
        Soluble matter: 0.40 - 0.85 %
        Moisture:0.10 - 0.30 %
        Bicarbonate:0.024 - 0.049 %
        Sulphate: 0.30 - 0.55 %
        Calcium: 0.04 - 0.13 %
        Magnesium: 0.034 – 0.12 %
    
    <h2 className=" has-bg-blue is-size-4">  3:- coarse kitchen salt </h2>,
        Coarse kitchen salt all pass through 3mm mesh with the tolerance 5 % ,
        Packages: polyethylene package inside polypropylene one of 25 k.g , or according to the customer request .
        Specifications:-
    
        Insoluble matter: 0.1 - 0.15%
        Soluble matter: 0.40 - 0.85 %
        Moisture:0.10 - 0.30 %
        Bicarbonate:0.024 - 0.049 %
        Sulphate: 0.30 - 0.55 %
        Calcium: 0.04 - 0.13 %
        Magnesium: 0.034 – 0.12 %
    
    
    <h2 className=" has-bg-blue is-size-4">  Production Of Ultra Pure Sodium Chloride Vacuum </h2>
    
    <h2 className=" has-bg-blue is-size-4">  The uses of Sodium Chloride (Vacuum) Salt </h2>
    
        Used for  haemodialysis solutions,Textile,food, Sodium Carbonate and Chloralkali industries
        •	Extra pure.
        •	Comply with the health and international regulations
        •	Reduce the time for the preparation of salt solution for medical purposes.
        •	Reduce the cost of the chemical treatment.
    
      <h3 className="has-text-dark is-size-5"> Physical Properties: </h3>
        •	Salt size: 0.01- 1.0 mm
    
      <h3 className="has-text-dark is-size-5">  Chemical properties: </h3>
        •	Sodium Chloride 99.5 % Min
        •	Water insoluble impurities  0.05%
        •	Water soluble impurities     0.08%
        •	Moisture                           0.2 %
    </p>
    </body>
);

// ###################################################
contents['Industrial Salt'] = (
    <body>
    
    <h2 className=" has-bg-blue is-size-4">  1:- Rock crystal salt for industrial use (one time washed rock crystal salt)</h2>
    <p>    Salt It is a key component in the production of different industries, as almost all industries in the world use sodium chloride salt, either as a main material or an additive.  Chemical industries represent the largest consumers  of salt, which is used in the production of prime chemicals , chlorine that is used  in water treatment facilities,Caustic Soda used as a dyes in textile and detergents,Soda Ash is used in glass , soap  and leather tanning industry , Manufacture of paper - plastics - ceramics , fertilizer etc
        Purity over 99.5% and moisture less than 0.5 % Insoluble 0.3 % </p>
    
     <h2 className=" has-bg-blue is-size-4">  2:-we offer one time or two times sea crystal salt for industrial use too .</h2>
        Nacl min for sea crystal salt 98.5% moisture from 1-3% <p/>
    
    
     <h2 className=" has-bg-blue is-size-4">  condition of sales  </h2>
     <p> Minimum Order Quantity: 3000 metric  tons
    Shipment: in bulk
    Our loading vessel rate best rate for loading vessel in Egypt without any delay
    Origin: Egypt
    Delivery terms: EXW , FOB , CIF OR EVEN DDP to the warehouse of our client , incomers 2010
    Packing options bags 50k.g , or bags 25 k.g or jumbo bags 1 ton or 1.5 ton in bags min order 200 ton
    Shipping documents:
    •	Commercial invoice;;
    •	Ocean/CP bill of lading, railway bill;
    •	Certificate of origin;
    •	Certificate of quality issued by independent surveyor; SGS
    Payment options:
    •	Advance payment;
    Irrevocable Letter of Credit at sight issued by a Top World Bank and available with Seller's bank only if order is    3000 MT min
    
    <h2 className=" has-bg-blue is-size-4">  3:- tablet salt for water softener </h2>
    
    
    Details : pressed salt in oval rectangular shape of 2.5*2.0*1.0 cm ,used in water treatment units to activate chemical resins .
    Packing : pollyethelin packge inside pollyproblin one of 25 k.g
    Specifications: Sodium chloride NACL ( dry base) :99.0-99.5%
    Insoluble matter: 0.10-0.15 %
    Soluble matter: 0.40-0.85 %
    Bicarbonate: 0.024-0.049 %
    Sulphate: 0.30-0.55 %
    Calcium: 0.040-0.13 %
    Magnesium: 0.034-0.12%
    
    </p>
    </body>
);




// ###################################################################################3
contents['De-Ice'] = (
<body>
    <h2 className=" has-bg-blue is-size-4"> 1:- Raw Rock crystal salt De-ice salt </h2>
    <p> We able to produce and supply over 2 million ton per years , we able enter any tender for salt around the globe , we looking for reduce invoice  of cleaning roads from the snow by supply super quality salt making roads very safe , with best prices on time without any delay .
    De-icing Salt (Sodium chloride) is the most widely used de-icing agent in Europe , canada and usa and throughout the world due to its huge advantages over the alternatives.
    
    It is the ideal de-icing material because:
    It melts ice & snow rapidly.
    It is widely-occurring and readily available
    It is the most cheapest method as de-icer
    It is much efficient, easy to use, easy to spread, store and handle
    It is harmless to skin, clothing and environment
        analysis as following , NacL OVER 98.59% ( purity) , Moisture 0.42 % and Water Insoluble 0.46 %  , </p>
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
    
      <h2 className=" has-bg-blue is-size-4">  2:- raw sea salt for de-ice </h2>
     <p>We able to supply high quality sea salt too for de-ice  Nacl min 97.5% and moisture from 1-4 % max
    
    -	Sorting , crush high level and sizing according to client want ( 0-4 &1-5 &2-10 &1-12) mm or any size we do it and we can supply it raw without crushing according to your request.
    -	Anti caking agent as client request 50 ppm or any percent client want and the kind the client want for anti caking.
    -	We give SGS certification , by analysis and quantity load on the vessel , and can check vessel banker too before loading to arrive salt in quality vessel too . </p>
    
     <h2 className=" has-bg-blue is-size-4"> condition of sales </h2>
    <p> Minimum Order Quantity: 3000 metric  tons
    Shipment: in bulk
    Our loading vessel rate best rate for loading vessel in Egypt without any delay
    Origin: Egypt
    Delivery terms: EXW , FOB , CIF OR EVEN DDP to the warehouse of our client , incomers 2010
    
    Packing options bags 50k.g , or bags 25 k.g or jumbo bags 1 ton or 1.5 ton in bags min order 200 ton </p>
    
    </body>
);