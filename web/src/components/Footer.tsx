import React from 'react';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
    return (
        <footer className="bg-white/50 dark:bg-black/20 backdrop-blur-sm border-t border-[#33221A] pt-10 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Logo & Title - Left Aligned */}
                    <div className="flex flex-col gap-1 md:pl-12">
                        <Link to="/" className="flex items-center gap-4 group">
                            <img src="/logo.png" alt="GymBaazi Logo" className="w-14 h-14 object-cover rounded-2xl shadow-sm transition-all duration-300" />
                            <span className="text-3xl font-bold text-light-text dark:text-dark-text transition-colors">GymBaazi</span>
                        </Link>
                        <p className="text-light-text/60 dark:text-dark-text/60 font-medium pl-[4.5rem] -mt-2">
                            your no fuss gym buddy
                        </p>
                    </div>

                    {/* Empty Column for Grid Balance */}
                    <div className="hidden md:block"></div>

                    {/* Navigation - Right Aligned & Scaled Up */}
                    <div className="flex gap-16 md:col-span-1 pr-12">
                        {/* Support */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-bold text-xl text-light-text dark:text-dark-text">Support</h4>
                            <div className="flex flex-col gap-4">
                                <Link to="/help" className="text-light-text/60 hover:text-light-text dark:text-dark-text/60 dark:hover:text-dark-text font-medium transition-colors text-lg">Help Center</Link>
                                <a href="mailto:hey.prarthan@gmail.com" className="text-light-text/60 hover:text-light-text dark:text-dark-text/60 dark:hover:text-dark-text font-medium transition-colors text-lg">Contact Us</a>
                            </div>
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-bold text-xl text-light-text dark:text-dark-text">Legal</h4>
                            <div className="flex flex-col gap-4">
                                <Link to="/terms" className="text-light-text/60 hover:text-light-text dark:text-dark-text/60 dark:hover:text-dark-text font-medium transition-colors text-lg">Terms of Service</Link>
                                <Link to="/privacy" className="text-light-text/60 hover:text-light-text dark:text-dark-text/60 dark:hover:text-dark-text font-medium transition-colors text-lg">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-light-text/5 dark:border-dark-text/5 text-center">
                    <p className="text-sm text-light-text/40 dark:text-dark-text/40 font-medium">
                        © 2026 GymBaazi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
