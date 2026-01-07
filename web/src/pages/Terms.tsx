import React from 'react';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-base text-light-text/60 dark:text-dark-text/60 mb-8">Last updated: 8th January, 2026</p>

            <div className="space-y-8 text-light-text/80 dark:text-dark-text/80">
                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">Welcome to GymBaazi</h2>
                    <p className="leading-relaxed">
                        By downloading and using GymBaazi, you agree to these terms. Please read them carefully.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">1. Personal Use</h2>
                    <p className="leading-relaxed">
                        GymBaazi is intended for personal fitness tracking. You may use the app to log workouts,
                        track progress, and manage your exercise routines for your own benefit.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">2. Your Data, Your Responsibility</h2>
                    <p className="leading-relaxed">
                        All your workout data is stored locally on your device. We do not maintain backups of your
                        information. You are responsible for using the app's export feature if you wish to back up
                        your data. Uninstalling the app will permanently delete all stored data.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">3. No Medical Advice</h2>
                    <p className="leading-relaxed">
                        GymBaazi is a workout logging tool, not a medical or fitness advisory service.
                        Always consult a healthcare professional before starting any new exercise program.
                        We are not liable for any injuries or health issues arising from your workouts.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">4. Exercise Content</h2>
                    <p className="leading-relaxed">
                        The exercise library, including names, descriptions, and demonstration GIFs, is hosted on our own
                        servers. While we strive for accuracy, we cannot guarantee that all information
                        is error-free. Use proper form and judgment when performing any exercise.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">5. No Account Required</h2>
                    <p className="leading-relaxed">
                        GymBaazi does not require account creation or login. There are no usernames, passwords,
                        or authentication systems. The app works entirely offline after initial exercise data is cached.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">6. Updates and Changes</h2>
                    <p className="leading-relaxed">
                        We may update these terms from time to time. Continued use of the app after changes
                        constitutes acceptance of the new terms. We recommend checking this page periodically.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">7. Limitation of Liability</h2>
                    <p className="leading-relaxed">
                        GymBaazi is provided "as is" without warranties of any kind. We are not liable for any
                        data loss, device issues, or other damages arising from the use of this app.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">Contact</h2>
                    <p className="leading-relaxed">
                        Questions about these terms? Reach out at{' '}
                        <a href="mailto:hey.prarthan@gmail.com" className="text-accent hover:underline">
                            hey.prarthan@gmail.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Terms;
