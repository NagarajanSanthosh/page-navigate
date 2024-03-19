
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Display.css'
const Display = ({ arrayDetails }) => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/');
    }
    return (
        <div className='table-responsive' style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h1>Account Details</h1>
            <table className='table table-bordered table-success table-sm align-middle'>

                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                    </tr>
                </thead>
                <tbody>


                    <tr className='m-2 '>
                    
                        <td className='m-2 col'>
                            <h6> {arrayDetails.map((user, index) => (
                                <div key={index}>{user.name}</div>
                            ))}
                            </h6>
                        </td>

                        <td className='m-2 col'>
                            <h6> {arrayDetails.map((user, index) => (
                                <div key={index}>{user.email}</div>
                            ))}
                            </h6>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className='m-2 btn btn-primary' onClick={handleSubmit}>Back</button>
        </div>

    )
}


export default Display
