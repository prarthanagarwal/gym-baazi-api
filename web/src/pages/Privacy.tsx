import React from 'react';

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose dark:prose-invert prose-lg">
                <p>Your privacy is important to us. It is GymBaazi's policy to respect your privacy regarding any information we may collect from you across our app.</p>
                <h3>Information We Collect</h3>
                <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
                <h3>Data Storage</h3>
                <p>We only retain collected information for as long as necessary to provide you with your requested service.</p>
            </div>
        </div>
    );
};

export default Privacy;
