import React from 'react';

export class Links extends React.Component {

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
                <section className="hero hero-about is-fullheight  is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered" style={{ marginTop: '-150px' }}>

                            <h1 className="title has-text-white is-size-1 is-uppercase">
                                Coming Soon
                            </h1>
                        </div>

                    </div>
                    <span className='icon-scroll'> </span>

                </section>
        );
    }
}