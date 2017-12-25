import React from 'react';
import './About.css';
import img1 from '../../assets/about/Untitled-1-02.png'
import img2 from '../../assets/about/Untitled-1-03.png'
import img3 from '../../assets/about/Untitled-1-04.png'
import img4 from '../../assets/about/Untitled-1-05.png'
import img5 from '../../assets/about/Untitled-1-06.png'

export class About extends React.Component {

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
        return (
            <div>
                <section className="hero hero-about is-fullheight  is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered" style={{ marginTop: '-150px' }}>

                            <h1 className="title has-text-white is-size-1 is-uppercase">
                                About The company
                            </h1>
                            

                        </div>

                    </div>
                    <span className='icon-scroll'> </span>

                </section>
                <section className="section">
                    <div className="container">
                    <h3>
                        <ul><li>
                            - We actively work to meet increasing customers requirements and shape market changes.

       </li>

                            <li>
                                - In cooperation with our business partners, we strive towards mutual benefit as the basic of long-term relations.

       </li>

                            <li>
                                - Continuous grow the plays an important role in developing and safe guarding the company for the long term.

       </li>

                            <li>
                                - We promote the further training of our staff to enhance their performance.

       </li>

                            <li>
                                - We welcome constructive suggestions as an incentive for improvement.

       </li>
                        </ul>
                        <br/>
                        <br/>
                        <p>
                            Hashem d.o.o for import and export is one of the leading wholesale trade and distributer in Slovenian market and euro market , hashem d.o.o looking for add value to euro economic , helping producers in Europe to exporting their products ,by our strong distributions and dealer (commercial agents) in many countries around the world ,  and satisfy our customers outside euro by quality Europeans products , arrive in time,  the company Hashem d.o.o founded in 2014 and company able to export all euro products from  salt , grain fodders , fruits and vegetables , beans , wood cement and European sugar , we are dry bulk charter vessel broker , and working in innovation projects in renewable energy , the company able to supply over 2 million ton of  rock crystal salt and sea crystal salt for de-ice and for industrial use per year , high quality products and delivery in time , all management according to the plan and business module and monitoring according to six sigma quality management model DMAIC, to prevent any deviations of the plan , and be on Track of the business plan and strategy , and satisfy our customers by world class quality standard products and delivery in time , with the specification require.
          <br />
          <br/>

                            We are Reliable partners in performance Flexibility and service - orientation.
This ensures, that we can react short-term on market trends and are able to fulfill the requirements of our customers, we able to supply over 2 million MT different kinds of salt which are deliver by vessels or trucks or railway, just-in-time to our customers.
The fully automated plant (from brine purification to the removal from high rack stock) is the key of our performance, the continuous process- and quality control guarantees the top- quality of our products.
          <br />
                            <br />
                            high efficient logistics ensure
<ul>
                                <li>- short delivery time</li>
                                <li>- customized lot sizes</li>
                                <li>- just in time delivery</li>
                            </ul>
                            all our Markets are attended by a compentent local sales team of HASHEM D.O.O therefore you in direct contact to us as Manufacturer together with the fact that you can relay on a customer orientated partner for your Requests of our quality products .

      </p>

      <br/>
      <br/>
      </h3>
                        <h3 className="is-size-5 has-text-centered has-text-weight-bold" style={{ letterSpacing: '5px' }}>
                            Some thing Important .......
                        </h3>
                        <br />
                        <div className="columns">
                            <div className="column is-half is-offset-one-quarter">
                                <img src={img1} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-half is-offset-one-quarter">
                                <img src={img2} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <h3 className="is-size-5 has-text-centered has-text-weight-bold" style={{ letterSpacing: '5px' }}>
                            Quality six Sigma
                        </h3>
                        <br />
                        <div className="columns">
                            <div className="column is-8 is-offset-2" >
                                <img src={img3} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-8 is-offset-2" >
                                <img src={img4} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                                <img src={img5} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}