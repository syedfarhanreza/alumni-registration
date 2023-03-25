import React from 'react';

const Navbar = () => {


    return (
        <div>

            <div className="navbar">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div> */}
                    <a href='/' className="btn btn-ghost hover:border hover:border-[#9b0d84] hover:bg-white normal-case font-extrabold text-[#0b11bcad]  text-2xl">PUB <span className='text-[#cc03ef]'>Alumni</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul> */}
                </div>
            </div>

        </div>
    );
};

export default Navbar;