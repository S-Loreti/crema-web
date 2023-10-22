import React, {useState, useEffect} from "react"
import api from "./api";
import Table from "./Table";

const Form = () => {
    const [cafes, setCafes] = useState([]);
    const [formData, setFormData] = useState({
        amount: '',
        category: '',
        description: '',
        is_income: false,
        date: '',
    });

    const fetchCafes = async () => {
        const response = await api.get('/cafes/');
        setCafes(response.data)
    };
    
    useEffect(() => {
        fetchCafes();
    }, []);

    const handleInputChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData({
        ...formData,
        [event.target.name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await api.post('/cafes/', formData);
        fetchCafes();
        setFormData({
        cafe_name: '',
        cafe_address: '',
        cafe_city: '',
        cafe_state: '',
        cafe_zip: '',
        cafe_phone: '',
        cafe_website: '',
        cafe_hours: '',
        cafe_photo: '',
        capp_photo: '',
        cafe_long: '',
        cafe_lat: '',
        });
    };
    
    return (
      <div>  
        <form onSubmit={handleFormSubmit}>
          
          <div className="mb-3 mt-3">
            <label htmlFor="cafe_name" className="form-label">
              Cafe Name
            </label>
            <input type="text" className="form-control" id="cafe_name" name="cafe_name" onChange={handleInputChange} value={formData.cafe_name}/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="cafe_address" className="form-label">
              Address
            </label>
            <input type="text" className="form-control" id="cafe_address" name="cafe_address" onChange={handleInputChange} value={formData.cafe_address}/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="cafe_city" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="cafe_city" name="cafe_city" onChange={handleInputChange} value={formData.cafe_city}/>
          </div>

          <div className="mb-3">
            <label htmlFor="cafe_state" className="form-label">
              State
            </label>
            <input type="text" className="form-control" id="cafe_state" name="cafe_state" onChange={handleInputChange} value={formData.cafe_state}/>
          </div>

          <div className="mb-3">
            <label htmlFor="cafe_zip" className="form-label">
              Zip Code
            </label>
            <input type="text" className="form-control" id="cafe_zip" name="cafe_zip" onChange={handleInputChange} value={formData.cafe_zip}/>
          </div>

          <div className="mb-3">
            <label htmlFor="cafe_phone" className="form-label">
              Phone Number
            </label>
            <input type="text" className="form-control" id="cafe_phone" name="cafe_phone" onChange={handleInputChange} value={formData.cafe_phone}/>
          </div>

          <div className="mb-3">
            <label htmlFor="cafe_website" className="form-label">
              Website
            </label>
            <input type="text" className="form-control" id="cafe_website" name="cafe_website" onChange={handleInputChange} value={formData.cafe_website}/>
          </div>

          <div className="mb-3">
            <label htmlFor="cafe_hours" className="form-label">
              Operating Hours
            </label>
            <input type="text" className="form-control" id="cafe_hours" name="cafe_hours" onChange={handleInputChange} value={formData.cafe_hours}/>
          </div>

          <div className="mb-3">
            <label htmlFor="cafe_photo" className="form-label">
              Exterior Photo
            </label>
            <input type="text" className="form-control" id="cafe_photo" name="cafe_photo" onChange={handleInputChange} value={formData.cafe_photo}/>
          </div>

          <div className="mb-3">
            <label htmlFor="capp_photo" className="form-label">
              Cappuccino Photo
            </label>
            <input type="text" className="form-control" id="capp_photo" name="capp_photo" onChange={handleInputChange} value={formData.capp_photo}/>
          </div>

          <div className="mb-3">
            <label htmlFor="cafe_long" className="form-label">
              Longitude
            </label>
            <input type="number" className="form-control" id="cafe_long" name="cafe_long" step='any' onChange={handleInputChange} value={formData.cafe_long}/>
          </div>

          <div className="mb-3">
            <label htmlFor="cafe_lat" className="form-label">
              Latitude
            </label>
            <input type="number" className="form-control" id="cafe_lat" name="cafe_lat" step='any' onChange={handleInputChange} value={formData.cafe_lat}/>
          </div>
          
          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </form>
     <Table />
     </div>   
    )
}

export default Form;