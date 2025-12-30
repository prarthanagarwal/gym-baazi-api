import React from 'react';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-light-text/70 dark:text-dark-text/70 mb-4">Last updated: December 2025</p>
            <div className="prose dark:prose-invert prose-lg">
                <p>Welcome to GymBaazi. By using our app, you agree to these terms.</p>
                <h3>1. Usage</h3>
                <p>You agree to use GymBaazi for personal workout tracking purposes only.</p>
                <h3>2. Account</h3>
                <p>You are responsible for maintaining the security of your account and data.</p>
                <h3>3. Content</h3>
                <p>Any workout data you generate belongs to you. We do not sell your data.</p>
            </div>
        </div>
    );
};

export default Terms;
