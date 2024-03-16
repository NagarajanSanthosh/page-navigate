import React, { useState } from "react";
import Form from "./Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from "./Display";
import Home from './Home'

function App() {
  const details = {
    name: '',
    email: '',
  }
  const [userDetails, setUserDetails] = useState(details);
  const handleSubmit = (objectDetails) => {
    setUserDetails(objectDetails);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         
            <Route path="/" element={<Home />} />
            <Route path="/forms" element={<Form onSubmit={handleSubmit} />} />
            <Route path="/display" element={<Display userDetails={userDetails} />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
