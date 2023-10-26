import React from "react";

const Guide = () => {
    return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px', backgroundColor: '#f8f8f8', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>    
        <div className="scones" style={{ marginTop: '30px', padding: '30px', backgroundColor: '#ffffff', borderRadius: '10px' }}>
                <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '20px', fontWeight: 'bold' }}>Guide: Best In-House Made Fruit Scones in the Bay Area</h1>
                <img style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '10px', marginBottom: '20px' }} src={require(`./Homepage/Scone.jpeg`)} alt="Crema Coffee Curation Cover" />
                <p style={{ color: '#777', lineHeight: 1.5, marginBottom: '20px' }}>
                    Fruit scones have always held a special place in the hearts of locals and tourists alike. These flaky, buttery delights, brimming with juicy fruits, make for the perfect companion to your morning or afternoon coffee. 
                    We’ve taken on the delightful task of sampling and curating a list of the best in-house made fruit scones in the area. Buckle up, scone lovers, because you’re in for a treat..
                </p>
                
            </div>
            <div className="680" style={{ marginTop: '30px', padding: '30px', backgroundColor: '#ffffff', borderRadius: '10px' }}>
                <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '20px', fontWeight: 'bold' }}>Guide: Where to Drink Along I-680</h1>
                <img style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '10px', marginBottom: '20px' }} src={require(`./Homepage/680.png`)} alt="Crema Coffee Curation Cover" />
                <p style={{ color: '#777', lineHeight: 1.5, marginBottom: '20px' }}>
                    Often overlooked, and to some not a part of the Bay Area at all, Interstate 680 represents the eastern bound of our tasting journey. 
                    This stretch of highway, winding its way through the picturesque Diablo Valley, is punctuated with cozy coffee havens waiting to be discovered. 
                    Join us as we embark on a caffeinated adventure along I-680.
                </p>
               
            </div>
        </div>
    )
}

export default Guide; 