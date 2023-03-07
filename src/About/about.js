import React, { Component } from 'react';
import './about.css'

class Aboutus extends Component {
    render() {
        return (
            <div className='aboutPage' id='about'> 
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='section1 col-sm-6'>
                            <div className='imgbg'></div>
                        </div>
                        <div className='section2 col-sm-6'>
                            <hr/>
                            <h1>Discover<br/><span>OUR STORY</span></h1>
                            <hr/>
                            <section className='jaymoh'>
                                <hr/>
                                <span className='star'>*</span>
                                <hr/>
                            </section>
                            <p className='text-info'>
                                RayC CAFE is a cafe along Dian-Ukunda road Kwale County in Kenya.<br/>
                                We are pleased to serve any customer of any type who comes accros our premises.<br/>
                                We also offer outside catering to functions. <br/>Try us today and you wont be dissapointed.
                            </p>
                            <a href='#contacts' id='btn'>contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;