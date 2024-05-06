import React from "react";
import logo from "../assets/task-svgrepo-com.svg";

const navbar = () => {
    return (
        <nav className='flex justify-between bg-slate-700 text-white py-2 align-middle'>
            <div className='logo flex  '>
                <img className='invert mx-4' src={logo} alt='' width={28} />
                <span className='font-bold text-xl mx-2'>iTask</span>
            </div>
            <ul className='flex justify-center gap-8 mx-10'>
                <li className='cursor-pointer hover:font-bold transition-all'>
                    Home
                </li>
                <li className='cursor-pointer hover:font-bold transition-all'>
                    Your Tasks
                </li>
            </ul>
        </nav>
    );
};

export default navbar;
