import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from "../../assest/Vector.png"
const Navber = () => {


    return (
        <div class="navbar bg-base-100 text-white"
        style={{backgroundColor: '#9921E8'}}>
            <div class="navbar-start ">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-black">
                        <li><a>HOME</a></li>
                        <li><a>ABOUT</a></li>
                        <li><a>COURSES</a></li>
                        <li><a>BLOGS</a></li>
                    </ul>
                </div>
                <div className=" rounded-lg">
                    <img className="w-[30px] h-[26px] mx-4" src={bg} alt="" />
                </div>
                <a class="text-black">
                    <h4 className="text-white">SCRUMVERSE</h4>
                </a>
            </div>
            <div class="navbar-center hidden lg:flex"
            >
                <ul class="menu menu-horizontal p-0">
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>COURSES</a></li>
                    <li><a>BLOGS</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <Link to="/login" class="px-4">Login</Link>
                <Link to="/singup" class="btn btn-xs rounded-lg btn-outline text-white">SingUp</Link>
            </div>
        </div>
    );
};

export default Navber;