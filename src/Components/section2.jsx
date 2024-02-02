import React, { useState, useEffect } from "react";
import "../MyCarousel.css"; // Import the CSS file without assigning it to a variable

// export default function Section2() {
//   const [name,setName] = useState([])
//   const [location,setLocation] = useState([])
//   const [url,setUrl] = useState([])
//   useEffect(() => {
//     fetch('http://localhost:4000/recent')
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((result) => {
//         console.log("Fetched data:", result);
//         setName(result.name)
//         setLocation(result.location)
//         setUrl(result.uploadedImage)
//       })
//       .catch((error) => {
//         console.error("Fetching error", error);
//       });
//   },[]);

//   return (
//     <div className="S2container">
//       <div className="S2box">
//         <a href="#">
//           <div className="S2image">
//             <img
//               src="https://imgs.search.brave.com/X27RT_dYBEtfQWfKx2f2wrivVSKgiCLuXZr3q-GsTLQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg1/ODM3MDU2L3Bob3Rv/L3ByZXNlbnQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUYy/ZFUtLXUxUnI3S21O/cnppSG9JdzNBdmo2/X3cyaDFQb0ZwZDdk/LURHZGs9"
//               alt="Image 3"
//             />
//           </div>
//         </a>
//         <div className="details">
//           <h2>{name} 3</h2>
//           <p>{location} 3</p>
//           <p>Date: 23-06-2024</p>
//         </div>
//       </div>

//       <div className="S2box">
//       <a href="#">
//           <div className="S2image">
//             <img
//               src="https://imgs.search.brave.com/X27RT_dYBEtfQWfKx2f2wrivVSKgiCLuXZr3q-GsTLQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg1/ODM3MDU2L3Bob3Rv/L3ByZXNlbnQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUYy/ZFUtLXUxUnI3S21O/cnppSG9JdzNBdmo2/X3cyaDFQb0ZwZDdk/LURHZGs9"
//               alt="Image 3"
//             />
//           </div>
//         </a>
//         <div className="details">
//           <h2>Title 3</h2>
//           <p>Description 3</p>
//           <p>Date: 23-06-2024</p>
//         </div>
//       </div>

//       <div className="S2box">
//       <a href="#">
//           <div className="S2image">
//             <img
//               src="https://imgs.search.brave.com/X27RT_dYBEtfQWfKx2f2wrivVSKgiCLuXZr3q-GsTLQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg1/ODM3MDU2L3Bob3Rv/L3ByZXNlbnQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUYy/ZFUtLXUxUnI3S21O/cnppSG9JdzNBdmo2/X3cyaDFQb0ZwZDdk/LURHZGs9"
//               alt="Image 3"
//             />
//           </div>
//         </a>
//         <div className="details">
//           <h2>Title 3</h2>
//           <p>Description 3</p>
//           <p>Date: 23-06-2024</p>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Section2() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/recent")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log("Fetched data:", result);
        setItems(result);
      })
      .catch((error) => {
        console.error("Fetching error", error);
      });
  }, []);

  return (
    <>
      <div className="section2">
      <h2>Recenty Registered Items :</h2>
        <div className="S2container">
          {items.map((item, index) => (
            <div key={index} className="S2box">
              <a href="/lostitems">
                <div className="S2image">
                  <img src={item.uploadedImage} alt={`Image ${index + 1}`} />
                </div>
              </a>
              <div className="details">
                <h2>Name : {item.name}</h2>
                <p>Location : {item.location}</p>
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
