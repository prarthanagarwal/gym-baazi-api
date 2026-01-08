import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { List, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            label: 'Features', onClick: () => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
            }
        },
        { label: 'Support', path: '/help' },
        { label: 'Download', path: '/' },
    ];

    return (
        <nav className={cn("fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-t border-t-[#33221A] border-b-[#33221A] px-6 md:px-16 py-4")}>
            <div className="max-w-6xl mx-auto flex justify-between items-center w-full">
                <Link to="/" className="flex items-center gap-3 group z-50">
                    <img src="/logo.png" alt="GymBaazi Logo" className="w-10 h-10 object-cover rounded-xl shadow-sm" />
                    <span className="text-2xl font-bold text-light-text dark:text-dark-text">GymBaazi</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        link.path ? (
                            <Link
                                key={link.label}
                                to={link.path}
                                className="text-light-text/80 hover:text-light-text dark:text-dark-text/80 dark:hover:text-dark-text font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <button
                                key={link.label}
                                onClick={link.onClick}
                                className="text-light-text/80 hover:text-light-text dark:text-dark-text/80 dark:hover:text-dark-text font-medium transition-colors cursor-pointer bg-transparent border-none p-0"
                            >
                                {link.label}
                            </button>
                        )
                    ))}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden z-50 p-2 text-light-text"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
                </button>
            </div>

            {/* Mobile Dropdown Sheet */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-[100%] left-0 w-full bg-white border-b border-[#33221A] overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                link.path ? (
                                    <Link
                                        key={link.label}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-semibold text-light-text/90 hover:text-light-text"
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <button
                                        key={link.label}
                                        onClick={link.onClick}
                                        className="text-left text-xl font-semibold text-light-text/90 hover:text-light-text bg-transparent border-none p-0"
                                    >
                                        {link.label}
                                    </button>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
