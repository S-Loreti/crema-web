import './App.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { MapPin } from "@phosphor-icons/react";

const Roasters = () => {
    
    return (
        <div className='container'>
            <div class="card w-auto mb-3 shadow">
                <div class="card-img-top d-flex align-items-center">
                    <div className='border rounded'>
                        <img width={'200px'} src={require(`./Roasters/SG.png`)} alt="Brand Logo"/>
                    </div>
                    <div className='row p-2'>
                        <h2>Sight Glass Coffee</h2>
                        <p><MapPin size={30} weight="fill" color='brown'/>Roasted in: San Francisco</p>
                        <p class="col p-2 m-0">"We specialize in small-batch coffee that is roasted to order in California. 
                                            Our coffee is sourced directly from producers worldwide who share our commitment to sustainable farming. 
                                            We are proud to offer USDA-certified organic coffee."
                        </p>
                    </div>
                </div>

                <div class="card-body">
                    <p class="card-text">
                        <SocialIcon url='https://sightglasscoffee.com/' bgColor='blue' style={{ marginRight: '10px' }}/>
                        <SocialIcon url='https://www.facebook.com/sightglasscoffee/' style={{ marginRight: '10px' }}/>
                        <SocialIcon url='https://twitter.com/sightglass' style={{ marginRight: '10px' }}/>
                        <SocialIcon url='https://www.instagram.com/sightglass/' />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Roasters; 
