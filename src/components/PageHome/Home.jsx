import React from 'react';
import './Home.css';
import { Clocks } from './mini/Clocks'
import { Extchange } from './mini/Extchange'
import { About } from './About/About'
import { Products } from './Products/Products'
import { NewsBar } from './NewsBar/NewsBar'
import { Contact } from './Contact/Contact'
import Carousel from 'nuka-carousel';


export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleToggleClick = this.handleToggleClick.bind(this);

    }
    handleToggleClick() {
        this.setState(prevState => ({
        }));
    }
    render() {
        function ImgSec(bg,text) {
            return (
                <section className="hero is-primary is-medium">
                    <div className="hero-body" style={{ backgroundImage: "url('" + bg + "')", backgroundSize: 'cover', backgroundPosition: 'center' }} >
                        <div className="container">

                            <h2 className="title is-size-3 has-text-centered is-uppercase" style={{background:'rgba(71, 74, 78, 0.726)' , padding:20}} >
                                {text}
                            </h2>
                        </div>
                    </div>
                </section>
            );
        }
        return (
            <div>
                <section className="hero hero-home is-fullheight  is-bold" id="home">
                    <br/>
                    <br/>
                    <Clocks />
                    <Extchange />
                    <NewsBar />
                    <br/>
                    
                    <section id="section04" class="demo">
                        <a href="#section05"><span></span>Scroll</a>
                    </section>
  
                </section>
                <div className="card">
                    <Carousel autoplay={true} autoplayInterval={5000} wrapAround={true}>
                    {ImgSec('../../slider/slide-1.png', 'Hashem for import and export')}
                    {ImgSec('../../slider/slide-2.png', 'In Cooperation With Our Business Partners, We Strive Towards Mutual Benefit As The Basic Of Long-Term Relations.')}
                    {ImgSec('../../slider/slide-3.png', 'Continuous Grow The Plays An Important Role In Developing And Safe Guarding The Company For The Long Term.')}
                    {ImgSec('../../slider/slide-4.png', 'We Promote The Further Training Of Our Staff To Enhance Their Performance.')}
                    {ImgSec('../../slider/slide-5.png', 'We Welcome Constructive Suggestions As An Incentive For Improvement.')}
                    {ImgSec('../../slider/slide-6.png', 'We Actively Work To Meet Increasing Customers Requirements And Shape Market Changes.')}
                    {ImgSec('../../slider/slide-7.png', 'We are Reliable partners in performance Flexibility and service - orientation ')}
                    </Carousel>
                    </div>

                <About />
                <Products />
                <Contact />
            </div>
        );
    }
}

//  <span className='icon-scroll'> </span>
