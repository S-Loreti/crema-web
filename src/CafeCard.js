import React, {useState, useEffect, useRef} from "react"
import api from "./api";
import DisplayHours from "./DisplayHours";
import CafeMap from "./CafeMap";
import { Link, Phone, Clock } from "@phosphor-icons/react";

const CafeCard = () => {
    const [cafes, setCafes] = useState([]);
    const [selectedCity, setSelectedCity] = useState('All');
    const [activeCafe, setActiveCafe] = useState(null);
    const cafeRefs = useRef({});
    
    const fetchCafes = async () => {
        const response = await api.get('/cafes/');
        setCafes(response.data)
    };

    const handleFilterChange = (cafe_city) => {
        setSelectedCity(cafe_city);
    };

    const scrollToCafe = (cafeId) => {
        cafeRefs.current[cafeId].scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    };

    const filteredCafes = cafes.filter(cafe => selectedCity === 'All' ? true : cafe.cafe_city === selectedCity);

    const cafeTotal = Object.keys(filteredCafes).length;

    const uniqueCities = [...new Set(cafes.map(cafe => cafe.cafe_city))].sort();

  useEffect(() => {
      fetchCafes();
  }, []);
    
    return (
    <div className="container-fluid">    
        <div className="row">
            <div className="col-8">
                <div className="dropdown" style={{zIndex: "1000", position: "sticky", display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter by City: {selectedCity}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" onClick={() => handleFilterChange('All')}>All Cities</a>
                            {uniqueCities.map(city => (
                                <a key={city} className="dropdown-item" onClick={() => handleFilterChange(city)}>
                                    {city}
                                </a>
                            ))}
                        </div>
                        <p>{ cafeTotal } Cafés Found</p>
                </div>
                {filteredCafes.map((cafe) => (
                    <div key={cafe.id}
                        ref={(el) => cafeRefs.current[cafe.id] = el} 
                        className="card mb-3 shadow-sm" 
                        style={{ 
                                overflow: 'scroll', 
                                backgroundColor: activeCafe && activeCafe.id === cafe.id ? '#f5f5f5' : 'white',
                                border: activeCafe && activeCafe.id === cafe.id ? 'solid black' : 'none',
                            }}
                    >
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title mb-4" 
                                        style={{fontSize: "22px", fontFamily: 'Verdana', fontSize: '2rem', fontWeight: '200', cursor: 'pointer'}}
                                        onClick={() => setActiveCafe(cafe)}
                                    >
                                            <img width="" height="27px" 
                                                src={require(`./bean-icon.png`)} />
                                                {' '}{cafe.cafe_name}
                                    </h5>
                                    <div className="row">
                                        <div className="col-md-6 mb-1">
                                            <p className="card-text mb-0">{cafe.cafe_address}</p>
                                            <p className="card-text">{cafe.cafe_city}, {cafe.cafe_state} {cafe.cafe_zip}</p>
                                        </div>
                                        <div className="col-md-6 mt-0">
                                        <small className="card-text text-muted text-wrap">
                                            <DisplayHours hoursString={cafe.cafe_hours} />
                                        </small>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="card-text mb-0"><Phone/>{" "}{cafe.cafe_phone}</p>
                                            <Link /><a href={`https://www.${cafe.cafe_website}`} target="_blank" rel="noopener noreferrer external">{cafe.cafe_website}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={require(`./ExteriorPhotos/${cafe.cafe_photo}`)} style={{width: '300px', height: '200px'}} className="img-fluid rounded-start" alt={cafe.cafe_name}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col-4" style={{position: 'fixed', top: '190px', right: '10px', width: 'calc(100% - 66.66667%)', height: '80vh'}}>
                    <CafeMap activeCafe={activeCafe} setActiveCafe={setActiveCafe} scrollToCafe={scrollToCafe}/>
            </div>
        </div>
    </div>

    )
}

export default CafeCard;