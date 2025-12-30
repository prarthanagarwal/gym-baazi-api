import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Navbar: React.FC = () => {
    return (
        <nav className={cn("fixed top-0 w-full z-50 glass-nav px-6 py-4 flex justify-between items-center")}>
            <Link to="/" className="text-2xl font-bold text-accent">GymBaazi</Link>
            <div className="flex gap-6 items-center">
                <Link to="/" className="hover:text-accent font-medium">Features</Link>
                <Link to="/help" className="hover:text-accent font-medium">Support</Link>
                <button className="bg-accent text-white px-5 py-2 rounded-full font-bold hover:bg-accent-hover transition-colors">
                    Download App
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
