import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <div className="p-12 rounded-[3rem] bg-light-secondary dark:bg-dark-secondary inline-block">
                <Mail size={48} className="mx-auto mb-6 text-accent" />
                <p className="text-xl mb-6">Have questions or feedback? We'd love to hear from you.</p>
                <a href="mailto:support@gymbaazi.com" className="inline-block bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-colors">
                    support@gymbaazi.com
                </a>
            </div>
        </div>
    );
};

export default Contact;
