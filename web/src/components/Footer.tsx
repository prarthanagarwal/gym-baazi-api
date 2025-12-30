import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light-secondary/30 dark:bg-dark-secondary/30 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-accent">GymBaazi</h3>
                    <p className="text-light-text/80 dark:text-dark-text/80 text-sm">
                        Design your workouts, track your progress, and verify your gains.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Product</h4>
                    <ul className="space-y-2 text-sm text-light-text/70 dark:text-dark-text/70">
                        <li><Link to="/" className="hover:text-accent">Features</Link></li>
                        <li><Link to="/" className="hover:text-accent">Download</Link></li>
                        <li><Link to="/" className="hover:text-accent">Changelog</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm text-light-text/70 dark:text-dark-text/70">
                        <li><Link to="/help" className="hover:text-accent">Help Center</Link></li>
                        <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
                        <li><a href="mailto:support@gymbaazi.com" className="hover:text-accent">Email Support</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-light-text/70 dark:text-dark-text/70">
                        <li><Link to="/terms" className="hover:text-accent">Terms of Service</Link></li>
                        <li><Link to="/privacy" className="hover:text-accent">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-light-text/5 dark:border-dark-text/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-light-text/50 dark:text-dark-text/50">
                    © 2024 GymBaazi. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="p-2 bg-white dark:bg-dark-secondary rounded-full hover:scale-110 transition-transform shadow-sm text-accent">
                        <Twitter size={18} />
                    </a>
                    <a href="#" className="p-2 bg-white dark:bg-dark-secondary rounded-full hover:scale-110 transition-transform shadow-sm text-accent">
                        <Instagram size={18} />
                    </a>
                    <a href="#" className="p-2 bg-white dark:bg-dark-secondary rounded-full hover:scale-110 transition-transform shadow-sm text-accent">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
