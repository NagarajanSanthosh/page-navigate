import React from 'react'
import { useNavigate } from 'react-router-dom'
const Display = ({ userDetails }) => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/');
    }
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h1>Account Details</h1>
            <h6 className='m-2' style={{ padding: '1px', }}>Name: {' '}{userDetails.name}</h6>
            <h6 className='m-2'>Email: {' '} {userDetails.email} </h6>
            <button className='m-2 btn btn-primary'
                onClick={handleSubmit}>Back Home</button>
        </div>
    )
}

export default Display