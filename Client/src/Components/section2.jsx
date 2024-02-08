import React, { useState, useEffect } from "react";
import "../MyCarousel.css"; // Import the CSS file without assigning it to a variable

export default function Section2() {
  const [items, setItems] = useState([]);

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

        // Ensure result is an array before setting state
        if (!Array.isArray(result)) {
          result = [result]; // Convert to an array if not already
        }

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
          {/* Conditionally render if items is an array */}
          {Array.isArray(items) &&
            items.map((item, index) => (
              <div key={index} className="S2box">
                <a href="/lostitems">
                  <div className="S2image">
                    <img src={item.uploadedImage} alt={`Image ${index + 1}`} />
                  </div>
                </a>
                <div className="details">
                  <h2>Name : {item.name}</h2>
                  <p className="location">Location : {item.location}</p>
                  <p>
                    Date : {new Date(item.userSelectedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
