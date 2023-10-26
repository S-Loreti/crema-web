import React from "react";

const HomePage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px', backgroundColor: '#f8f8f8', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ padding: '30px', backgroundColor: '#ffffff', borderRadius: '10px' }}>
                <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '20px', fontWeight: 'bold' }}>Welcome to Crema Coffee Curation</h1>
                <p style={{ color: '#777', lineHeight: 1.5, marginBottom: '20px' }}>
                    Your gateway to the Bay Area's most exceptional artisan coffee roasters. Dive deep into a world of rich flavors, handcrafted blends, and the passionate artisans behind every cup. Discover, taste, and celebrate the finest brews that the Bay has to offer.
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', gap: '20px' }}>
                <div style={{ flex: 1, backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <h2 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Café Locator</h2>
                    <h5 style={{ color: '#555', marginBottom: '10px' }}>Find your next cup</h5>
                    <a href="/Locator">
                        <img style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }} src={require(`./Homepage/Map.png`)} alt="Café Locator" />
                    </a>
                    <p style={{ color: '#777' }}>Discover coffee shops that have earned a spot on our list.</p>
                </div>

                <div style={{ flex: 1, backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <h2 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Roaster Listing</h2>
                    <h5 style={{ color: '#555', marginBottom: '10px' }}>Meet the Makers</h5>
                    <a href="/Roasters">
                        <img style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }} src={require(`./Homepage/Bags.webp`)} alt="Roaster Listing" />
                    </a>
                    <p style={{ color: '#777' }}>Explore our curated list of the Bay's finest roasters. Learn their stories, specialties, and signature blends.</p>
                </div>

                <div style={{ flex: 1, backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <h2 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Shop</h2>
                    <h5 style={{ color: '#555', marginBottom: '10px' }}>Support local brands</h5>
                    <a href="/Shop">
                        <img style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }} src={require(`./Homepage/Shop.png`)} alt="Event Calendar" />
                    </a>
                    <p style={{ color: '#777' }}>A schedule of upcoming coffee-related events, workshops, tastings, and pop-ups in the Bay Area.</p>
                </div>
            </div>
            <div style={{ marginTop: '30px', padding: '30px', backgroundColor: '#ffffff', borderRadius: '10px' }}>
                <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '20px', fontWeight: 'bold' }}>Guide: Best In-House Made Fruit Scones in the Bay Area</h1>
                <img style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '10px', marginBottom: '20px' }} src={require(`./Homepage/Scone.jpeg`)} alt="Crema Coffee Curation Cover" />
                <p style={{ color: '#777', lineHeight: 1.5, marginBottom: '20px' }}>
                    Fruit scones have always held a special place in the hearts of locals and tourists alike. These flaky, buttery delights, brimming with juicy fruits, make for the perfect companion to your morning or afternoon coffee. 
                    We’ve taken on the delightful task of sampling and curating a list of the best in-house made fruit scones in the area. Buckle up, scone lovers, because you’re in for a treat..
                </p>
                <a href="/Guide/#scones">read more</a>
            </div>
            <div style={{ marginTop: '30px', padding: '30px', backgroundColor: '#ffffff', borderRadius: '10px' }}>
                <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '20px', fontWeight: 'bold' }}>Guide: Where to Drink Along I-680</h1>
                <img style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '10px', marginBottom: '20px' }} src={require(`./Homepage/680.png`)} alt="Crema Coffee Curation Cover" />
                <p style={{ color: '#777', lineHeight: 1.5, marginBottom: '20px' }}>
                    Often overlooked, and to some not a part of the Bay Area at all, Interstate 680 represents the eastern bound of our tasting journey. 
                    This stretch of highway, winding its way through the picturesque Diablo Valley, is punctuated with cozy coffee havens waiting to be discovered. 
                    Join us as we embark on a caffeinated adventure along I-680.
                </p>
                <a href="/Guide/#680">read more</a>
            </div>
        </div>
    )
}

export default HomePage; 
