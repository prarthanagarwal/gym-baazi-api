import React from 'react';

const Help: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Help Center</h1>
            <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-light-secondary dark:bg-dark-secondary">
                    <h3 className="text-xl font-bold mb-2">How do I delete my account?</h3>
                    <p className="text-light-text/70 dark:text-dark-text/70">You can delete your account from the Profile settings in the app. This action is irreversible.</p>
                </div>
                <div className="p-8 rounded-3xl bg-light-secondary dark:bg-dark-secondary">
                    <h3 className="text-xl font-bold mb-2">How do I create a custom split?</h3>
                    <p className="text-light-text/70 dark:text-dark-text/70">Go to the "Plan" tab and tap "Create Split". You can choose from templates or build from scratch.</p>
                </div>
            </div>
        </div>
    );
};

export default Help;
