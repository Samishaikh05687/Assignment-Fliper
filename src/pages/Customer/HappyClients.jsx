import React, { useEffect, useState } from 'react';
import './HappyClients.css'; 

const HappyClients = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null); // Added state for error handling

  const getClients = async () => {
    try {
      const response = await fetch("http://localhost:5000/customer", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched data:", data);
        console.log("Data type:", typeof data);
        console.log("Is array:", Array.isArray(data));

        // Handle different data formats
        if (Array.isArray(data)) {
          setClients(data);
        } else if (typeof data === 'object' && !Array.isArray(data)) {
          console.error("Unexpected data format, received an object instead of an array.");
          setError("Unexpected data format, received an object instead of an array.");
        } else {
          console.error("Unexpected data format.");
          setError("Unexpected data format.");
        }
      } else {
        console.error("Error fetching clients, status:", response.status);
        setError(`Error fetching clients, status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Client frontend error: ${error}`);
      setError(`Client frontend error: ${error}`);
    } 
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className="happy-clients-container">
      <div className="happy-clients-content">
        <h2 className="happy-clients-title">Happy Clients</h2>
        <div className="happy-clients-grid">
          {error ? (
            <p>{error}</p>
          ) : (
            Array.isArray(clients) && clients.length > 0 ? (
              clients.map((client, index) => {
                const { description, image, name, designation } = client;
                return (
                  <div key={index} className="client-card">
                    <div className="client-card-content">
                      <img
                        src={image}
                        alt={name}
                        className="client-image"
                      />
                      <p className="client-description">
                        {description}
                      </p>
                      <h3 className="client-name">
                        {name}
                      </h3>
                      <p className="client-designation">
                        {designation}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No clients to display</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
