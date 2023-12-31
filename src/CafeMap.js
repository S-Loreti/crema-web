import React, {useState, useEffect} from "react"
import Map, {Marker, Popup} from 'react-map-gl';
import api from "./api";

const CafeMap = ({ activeCafe, setActiveCafe, scrollToCafe }) => {
  const [cafes, setCafes] = useState([]);

  const fetchCafes = async () => {
    const response = await api.get('/cafes/');
    setCafes(response.data)
  };

  
  useEffect(() => { fetchCafes(); }, []);
  
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      initialViewState={{
        longitude: -122.2683777,
        latitude: 37.8844503,
        zoom:9
      }}
      style={{maxWidth: '100%', height: '50vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
    {cafes.map(cafe => (
        <React.Fragment key={cafe.id}>
          <Marker 
            longitude={cafe.cafe_long} 
            latitude={cafe.cafe_lat} 
            color={activeCafe && activeCafe.id === cafe.id ? "#FF5733" : "#9CB2A6"}
            onClick={() => {
              setActiveCafe(cafe);
              scrollToCafe(cafe.id);
            }}
          />
          {activeCafe && activeCafe.id === cafe.id && (
            <Popup
              longitude={cafe.cafe_long}
              latitude={cafe.cafe_lat}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setActiveCafe(null)}
              style={{width: '200px'}}
            >
              <div className="container">
                <div className="row g-0">
                  <h5>{cafe.cafe_name}</h5> 
                      <p style={{marginBottom: '0px'}}>{cafe.cafe_address}</p>
                      <p>{cafe.cafe_city}, {cafe.cafe_state}{' '}{cafe.cafe_zip}</p>
                </div>
              </div>
            </Popup>
          )}
        </React.Fragment>
      ))}
    </Map>
  )
}
export default CafeMap;