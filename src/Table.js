import React, {useState, useEffect} from "react"
import api from "./api";

const Table = () => {
    const [cafes, setCafes] = useState([]);

    const [editingCafe, setEditingCafe] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    const fetchCafes = async () => {
        const response = await api.get('/cafes/');
        setCafes(response.data)
    };
    
    const handleDelete = async (cafeId) => {
      try {
          // Send a DELETE request to the backend
          await api.delete(`/cafes/${cafeId}`);
  
          // Remove the deleted cafe from the local state
          const updatedCafes = cafes.filter(c => c.id !== cafeId);
          setCafes(updatedCafes);
      } catch (error) {
          console.error("Error deleting cafe:", error);
          // Handle error appropriately, e.g., show an error message to the user
      }
    };
    
    const startEditing = (cafe) => {
      setEditingCafe(cafe);
      setShowModal(true);
    };

    const handleEditChange = (field, value) => {
        setEditingCafe(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
      try {
          await api.put(`/cafes/${editingCafe.id}`, editingCafe);
          fetchCafes();  // Refresh the cafe list after making the edit
          setShowModal(false);  // Close the modal
      } catch (error) {
          console.error("Error updating cafe:", error);
      }
    };

  useEffect(() => { fetchCafes(); }, []);
    
    return (
  <div >
    <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Hours</th>
              <th>Cafe Photo</th>
              <th>Capp Photo</th>
              <th>Cafe Longitude</th>
              <th>Cafe Latitude</th>
            </tr>
          </thead>
          <tbody>
            {cafes.map((cafe) => (
              <tr key={cafe.id}>
                <td>{cafe.cafe_name}</td>
                <td>{cafe.cafe_address}</td>
                <td>{cafe.cafe_city}</td>
                <td>{cafe.cafe_state}</td>
                <td>{cafe.cafe_zip}</td>
                <td>{cafe.cafe_phone}</td>
                <td>{cafe.cafe_website}</td>
                <td>{cafe.cafe_hours}</td>
                <td>{cafe.cafe_photo}</td>
                <td>{cafe.capp_photo}</td>
                <td>{cafe.cafe_long}</td>
                <>{cafe.cafe_lat}</>
                <td>
                  <button type="button" className="btn btn-primary" onClick={() => startEditing(cafe)}>Edit</button>
                  <button type="button" className="btn btn-danger" onClick={() => handleDelete(cafe.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">Edit Cafe</h5>
                          <button type="button" className="close" onClick={() => setShowModal(false)}>
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                          <input value={editingCafe.cafe_name} onChange={e => handleEditChange('cafe_name', e.target.value)} />
                          <input value={editingCafe.cafe_address} onChange={e => handleEditChange('cafe_address', e.target.value)} />
                          <input value={editingCafe.cafe_city} onChange={e => handleEditChange('cafe_city', e.target.value)} />
                          <input value={editingCafe.cafe_state} onChange={e => handleEditChange('cafe_state', e.target.value)} />
                          <input value={editingCafe.cafe_zip} onChange={e => handleEditChange('cafe_zip', e.target.value)} />
                          <input value={editingCafe.cafe_phone} onChange={e => handleEditChange('cafe_phone', e.target.value)} />
                          <input value={editingCafe.cafe_website} onChange={e => handleEditChange('cafe_website', e.target.value)} />
                          <input value={editingCafe.cafe_hours} onChange={e => handleEditChange('cafe_hours', e.target.value)} />
                          <input value={editingCafe.cafe_photo} onChange={e => handleEditChange('cafe_photo', e.target.value)} />
                          <input value={editingCafe.capp_photo} onChange={e => handleEditChange('capp_photo', e.target.value)} />
                          <input value={editingCafe.cafe_long} onChange={e => handleEditChange('cafe_long', e.target.value)} />
                          <input value={editingCafe.cafe_lat} onChange={e => handleEditChange('cafe_lat', e.target.value)} />
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
                          <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                      </div>
                  </div>
              </div>
          </div>
)}
</div>
    )
        };


export default Table;