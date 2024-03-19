import React, { useState } from "react";
import Form from "./Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from "./Display";
import Home from './Home'

function App() {
  // Initialize state for user details and array of details
  const initialDetails = {
    name: '',
    email: '',
  };
  const [userDetails, setUserDetails] = useState(initialDetails);
  const [arrayDetails, setArrayDetails] = useState([]);

  // Function to handle form submission
  const handleSubmit = (objectDetails) => {
    setUserDetails(objectDetails); // Update user details state
    setArrayDetails([...arrayDetails, objectDetails]); // Append new object to arrayDetails state
  };

  console.log(arrayDetails);

  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<Form onSubmit={handleSubmit} />} />
          <Route path="/display" element={<Display arrayDetails={arrayDetails} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
