import React from "react";

function SaveButton({ imageData }) {
  const saveFact = () => {
    fetch("http://localhost:8080/api/nasa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imageData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Nasa Image and Fact was saved as a favorite!");
      })
      .catch((error) => {
        console.error(
          "There was a problem saving the Nasa Image and Fact:",
          error
        );
      });
  };

  return <button onClick={saveFact}>Save as Favorite</button>;
}

export default SaveButton;
