import React from 'react';

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-base text-light-text/60 dark:text-dark-text/60 mb-8">Last updated: 8th January, 2026</p>

            <div className="space-y-8 text-light-text/80 dark:text-dark-text/80">
                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">Your Privacy Matters</h2>
                    <p className="leading-relaxed">
                        GymBaazi is designed with privacy at its core. We believe your workout data belongs to you and only you.
                        Our app operates entirely offline with all data stored locally on your device.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">No Cloud, No Database</h2>
                    <p className="leading-relaxed">
                        GymBaazi does <strong>not</strong> use any cloud services or external databases. Your workout logs,
                        personal records, routines, and settings are stored exclusively on your iPhone using Apple's secure
                        on-device storage. We have no access to your data whatsoever.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">Data We Store Locally</h2>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                        <li><strong>Profile:</strong> Name, age, height, and weight (for personalization)</li>
                        <li><strong>Workout Logs:</strong> Your exercise history, sets, reps, and weights</li>
                        <li><strong>Custom Routines:</strong> Any workout plans you create or modify</li>
                        <li><strong>Preferences:</strong> App settings like theme and notifications</li>
                    </ul>
                    <p className="mt-3 leading-relaxed">
                        All of this stays on your device. We never transmit, collect, or analyze any of it.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">Exercise Library</h2>
                    <p className="leading-relaxed">
                        The app fetches exercise data (names, descriptions, and GIFs) from an external API to provide you
                        with a comprehensive library. This is read-only data and does not involve sending any of your
                        personal information.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">Data Backup</h2>
                    <p className="leading-relaxed">
                        GymBaazi offers JSON export and import functionality. When you export your data, you receive a
                        complete backup that you control. We do not have access to these backups—they're saved wherever
                        you choose (iCloud Drive, Files, etc.).
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">No Analytics or Tracking</h2>
                    <p className="leading-relaxed">
                        We do not use any analytics SDKs, crash reporters, or tracking tools within the app.
                        Your usage patterns and behaviors are completely private.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">Contact</h2>
                    <p className="leading-relaxed">
                        If you have any questions about our privacy practices, please contact us at{' '}
                        <a href="mailto:hey.prarthan@gmail.com" className="text-accent hover:underline">
                            hey.prarthan@gmail.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Privacy;
