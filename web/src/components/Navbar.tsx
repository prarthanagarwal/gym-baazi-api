import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Navbar: React.FC = () => {
    return (
        <nav className={cn("fixed top-0 w-full z-50 bg-white border-b border-t border-t-[#33221A] border-b-[#33221A] px-8 md:px-16 py-4")}>
            <div className="max-w-6xl mx-auto flex justify-between items-center w-full">
                <Link to="/" className="flex items-center gap-3 group">
                    <img src="/logo.png" alt="GymBaazi Logo" className="w-10 h-10 object-cover rounded-xl shadow-sm" />
                    <span className="text-2xl font-bold text-light-text dark:text-dark-text">GymBaazi</span>
                </Link>
                <div className="flex gap-8 items-center">
                    <button
                        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-light-text/80 hover:text-light-text dark:text-dark-text/80 dark:hover:text-dark-text font-medium transition-colors cursor-pointer bg-transparent border-none p-0"
                    >
                        Features
                    </button>
                    <Link to="/help" className="text-light-text/80 hover:text-light-text dark:text-dark-text/80 dark:hover:text-dark-text font-medium transition-colors">Support</Link>
                    <Link to="/" className="text-light-text/80 hover:text-light-text dark:text-dark-text/80 dark:hover:text-dark-text font-medium transition-colors">Download</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
