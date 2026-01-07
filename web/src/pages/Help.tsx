import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';


const Help: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const email = "hey.prarthan@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 pt-32 pb-20">
            <div className="max-w-2xl w-full">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
                    <p className="text-light-text/60 dark:text-dark-text/60 text-lg">
                        Have questions? We're here to help.
                    </p>
                </div>

                <div className="border-2 border-dotted border-light-text/20 dark:border-dark-text/20 rounded-[2.5rem] p-8 md:p-12 relative">
                    {/* Support Email Section */}
                    <div className="text-center space-y-6">
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto text-accent mb-6">
                            <Mail size={32} />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-2">Contact Support</h2>
                            <p className="text-light-text/60 dark:text-dark-text/60">
                                Direct line to the developer. No bots, just help.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 max-w-md mx-auto">
                            <a
                                href={`mailto:${email}`}
                                className="flex-grow py-4 px-6 bg-light-secondary dark:bg-dark-secondary rounded-2xl font-medium hover:bg-light-secondary/80 dark:hover:bg-dark-secondary/80 transition-colors text-center truncate"
                            >
                                {email}
                            </a>
                            <button
                                onClick={copyToClipboard}
                                className="p-4 bg-light-secondary dark:bg-dark-secondary rounded-2xl hover:bg-light-secondary/80 dark:hover:bg-dark-secondary/80 transition-colors text-light-text/70 dark:text-dark-text/70"
                                title="Copy email"
                            >
                                {copied ? <Check size={24} className="text-green-500" /> : <Copy size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
