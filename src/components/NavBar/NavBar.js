import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ?
        <div>

            <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
            {props.user && <Link to='/all' className='NavBar-link' onClick={props.handleAllStudents}>VIEW ALL</Link>}
            {props.user && <Link to='/add' className='NavBar-link' onClick={props.handleAddStudent}>ADD STUDENT</Link>}
            <Link to='/'>Students</Link>
            <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
        </div>
        :
        <div>
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
            <Link to='/' className='NavBar-link'>HOME</Link>
        </div>
        ;


    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;