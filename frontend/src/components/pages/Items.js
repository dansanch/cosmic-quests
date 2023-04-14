import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/Items.css';


const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://aqueous-citadel-22387.herokuapp.com/');
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Items</h1>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4" key={item._id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;