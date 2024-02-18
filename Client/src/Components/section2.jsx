import React, { useState, useEffect } from "react";
import "../MyCarousel.css"; // Import the CSS file without assigning it to a variable

export default function Section2() {
  const [items, setItems] = useState({});

  useEffect(() => {
    fetch("https://lost-found-serve.vercel.app/recent")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log("Fetched data:", result);

        // Set the entire result object as the state
        setItems(result);
      })
      .catch((error) => {
        console.error("Fetching error", error);
      });
  }, []);

  
  return (
    <>
      <div className="section2">
        <h2>Recently Registered Items:</h2>
        <div className="S2container">
          {Object.entries(items).map(([key, value], index) => (
            <div key={index} className="S2box">
              <a href="/lostitems">
                <div className="S2image">
                  <img src={`/uploads/${value.uploadedImage}`} onLoad={console.log(value.uploadedImage)} alt={`Image ${index + 1}`} />
                </div>
              </a>
              <div className="details">
                <h2>Name : {value.name}</h2>
                <p className="location">Location : {value.location}</p>
                <p>Date : {new Date(value.userSelectedDate).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
