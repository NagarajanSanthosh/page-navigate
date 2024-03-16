import React from 'react'
import { CiHome } from 'react-icons/ci';
import { IoMdLogIn } from "react-icons/io";
import { TbListDetails } from "react-icons/tb"; import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <header>
            <div>
                <ul
                    className='list-unstyled d-flex'
                    style={{ margin: 0, padding: 0 }}>
                    <li
                        className='me-2'
                        style={{ marginRight: '5px' }}>

                        <Link
                            to='/'
                            style={{ color: 'black', textDecoration: 'none' }}>
                            <CiHome
                                className='m-2' /> Home</Link>
                    </li>
                    <li
                        className='me-2'
                        style={{ marginRight: '5px' }}>
                        <Link to='/forms' style={{ color: 'black', textDecoration: 'none' }}>
                            <IoMdLogIn className='m-2' /> Login</Link>
                    </li>
                    <li className='me-2'
                        style={{ marginRight: '5px' }}>
                        <Link
                            to='/display'
                            style={{ color: 'black', textDecoration: 'none' }}>
                            <TbListDetails
                                className='m-2' />Display</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Home