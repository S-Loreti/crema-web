import './App.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { MapPin } from "@phosphor-icons/react";

class RoastData extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                roast: [
                    {
                        name: "Sight Glass Coffee",
                        logo: "SG.png",
                        location: "San Francisco",
                        tag: "We specialize in small-batch coffee that is roasted to order in California. We are proud to offer USDA-certified organic coffee.",
                        website: "https://sightglasscoffee.com/",
                        fb: "https://www.facebook.com/sightglasscoffee/",
                        twitter: "https://twitter.com/sightglass",
                        insta: "https://www.instagram.com/sightglass/",
                    },
                    {
                        name: "Ritual Coffee",
                        logo: "Ritual.png",
                        location: "San Francisco",
                        tag: "A San Francisco original since 2005. Ritual is a fully independent and woman-owned coffee roasting company.",
                        website: "https://ritualcoffee.com/",
                        fb: "https://www.facebook.com/ritualroasters",
                        twitter: "http://twitter.com/ritualcoffee",
                        insta: "https://www.instagram.com/ritualcoffee/",
                    },
                    {
                        name: "Andytown Coffee",
                        logo: "Andytown.png",
                        location: "San Francisco",
                        tag: "Andytown is an artisan coffee roaster and bakery located in the Outer Sunset district of San Francisco.",
                        website: "https://www.andytownsf.com/",
                        fb: "http://www.facebook.com/andytownsf",
                        twitter: "http://twitter.com/andytownsf",
                        insta: "http://instagram.com/andytownsf",
                    },
                    {
                        name: "States Coffee",
                        logo: "States.jpeg",
                        location: "Martinez",
                        tag: "Neighborly roasted coffee and American made goods.",
                        website: "https://www.statescoffee.com/",
                        fb: "https://www.facebook.com/statescoffee/",
                        twitter: "https://twitter.com/StatesCoffee",
                        insta: "http://instagram.com/statescoffee",
                    },
                    {
                        name: "Sextant Coffee",
                        logo: "Sextant1.webp",
                        location: "San Francisco",
                        tag: "Sextant is an independent cafe and roastery in San Francisco. We work directly with farmers across Ethiopia, Kenya, Colombia, and elsewhere to showcase the most flavorful coffees throughout the world. ",
                        website: "https://sextantcoffee.com/",
                        fb: "https://www.facebook.com/sextantcoffeeroasters",
                        twitter: "https://twitter.com/Sextantcoffee",
                        insta: "https://www.instagram.com/sextantcoffee/",
                    },
                    {
                        name: "Linea Coffee",
                        logo: "Linea.svg",
                        location: "San Francisco",
                        tag: "Linea launched with a simple mission, to bring joy, and to source, roast and serve the world’s finest coffees.",
                        website: "https://lineacaffe.com/",
                        fb: "https://www.facebook.com/Linea-Caffe-403298279767130/",
                        twitter: "https://twitter.com/linea_caffe",
                        insta: "https://www.instagram.com/lineacaffe/",
                    },
                    {
                        name: "Four Barrel Coffee",
                        logo: "FourB.png",
                        location: "San Francisco",
                        tag: "We're an independent, locally owned coffee roastery. We directly source almost all of the coffee that we roast for ourselves and our wholesale partners.",
                        website: "https://www.fourbarrelcoffee.com/",
                        fb: "https://m.facebook.com/profile.php?id=488656731159458",
                        twitter: "https://twitter.com/fourbarrel",
                        insta: "https://www.instagram.com/fourbarrelcoffee/",
                    },
                    {
                        name: "Verve Coffee",
                        logo: "Verve.png",
                        location: "Santa Cruz",
                        tag: "Verve Coffee Roasters was established in 2007. Our roots are planted in Santa Cruz, where we remain independently owned and still roast coffee by hand.",
                        website: "https://www.fourbarrelcoffee.com/",
                        fb: "https://facebook.com/vervecoffee",
                        twitter: "http://twitter.com/vervecoffee",
                        insta: "http://instagram.com/vervecoffee",
                    },
                    {
                        name: "Flywheel Coffee",
                        logo: "Flywheel.png",
                        location: "San Francisco",
                        tag: "Flywheel Coffee Roasters is family owned and operated in San Francisco's historic Haight-Ashbury neighborhood.",
                        website: "https://flywheelcoffee.com/",
                        fb: "https://www.facebook.com/Flywheel-Coffee-Roaster-150800731745264",
                        twitter: "https://twitter.com/flywheelcoffee",
                        insta: "https://www.instagram.com/flywheelcoffee/",
                    },
                    {
                        name: "Highwire Coffee",
                        logo: "Highwire.avif",
                        location: "Emeryville",
                        tag: "Highwire is an East Bay owned and operated coffee roasting and tea company that serves approachable, balanced cups of coffee, with warm, welcoming service.",
                        website: "https://www.highwirecoffee.com/",
                        fb: "https://www.facebook.com/highwirecoffee/",
                        twitter: "https://twitter.com/highwirecoffee?lang=en",
                        insta: "https://www.instagram.com/highwirecoffee/",
                    },
                ],    
            };
    }
    render() {
        const { roast } = this.state;
        return (
            <div className='row row-cols-2 g-3'>
    {roast.map((roaster, index) => (
        <div key={index} className='col'>
            <div className="card mb-3 shadow" style={{ borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <div className="card-img-top d-flex align-items-center" style={{ height: '200px', padding: '20px' }}>
                    <div style={{ border: '1px solid #e0e0e0', borderRadius: '10px', marginRight: '20px' }}>
                        <img style={{ width: '200px', borderRadius: '10px' }} src={require(`./Roasters/${roaster.logo}`)} alt="Brand Logo" />
                    </div>
                    <div>
                        <h2 style={{ fontFamily: 'serif', color: '#333', marginBottom: '10px' }}>{roaster.name}</h2>
                        <p style={{ color: '#777', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <MapPin size={30} weight="fill" color='brown' />
                            Roasted in: {roaster.location}
                        </p>
                        <p style={{ color: '#777', padding: '5px', margin: '0' }}>{roaster.tag}</p>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text" style={{ display: 'flex', gap: '10px' }}>
                        <SocialIcon url={roaster.website} bgColor='blue' />
                        <SocialIcon url={roaster.fb} />
                        <SocialIcon url={roaster.twitter} />
                        <SocialIcon url={roaster.insta} />
                    </p>
                </div>
            </div>
        </div>
    ))}
</div>
        );
    }
}

export default RoastData; 
