import React, { createContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";


export const UserContext = createContext();

const Form = ({ onSubmit }) => {
    const navigate = useNavigate();

    //template for form-submission
    const details = {
        name: '',
        email: '',
    }
    const [userDetails, setUserDetails] = useState(details);

    //to handle name changes on form 
    const handleNameChange = (e) => {
        setUserDetails({ ...userDetails, name: e.target.value });
    }

    //to handle email changes on form 
    const handleEmailChange = (e) => {
        setUserDetails({ ...userDetails, email: e.target.value });
    }

    //to handle form submission 
    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(userDetails);
        navigate('/display');
    }

    //to navigate to home route when cancel button clicked
    const handleCancel = () => {
        navigate('/');
    }

    // to not support auto-submission when enter key pressed
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>User Login</h2>
                <label
                    
                    htmlFor='name'
                > Name:
                    <input
                        id='name'
                        type='text'
                        value={userDetails.name}
                        onChange={handleNameChange}
                        onKeyDown={handleKeyDown}
                        required
                    />
                </label>
                <br />
                <label
                    className='m-3'
                    htmlFor='email'>
                    Email:
                    <input
                        id='email'
                        className='m-2 rounded form-control'
                        type='email'
                        value={userDetails.email}
                        onChange={handleEmailChange}
                        onKeyDown={handleKeyDown}
                        required
                    />
                </label>
                <br />
                <button
                    type='submit'
                    className='btn btn-primary'
                    style={{ border: '1px solid black', marginLeft: '1rem' }}
                >Submit</button>
                <button
                    className='btn btn-danger'
                    style={{ marginLeft: '6rem' }}
                    onClick={handleCancel}
                > Cancel</button>
            </form>
        </div>
    )
}

export default Form