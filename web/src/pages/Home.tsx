import React from 'react';
import { Activity, Calendar, BarChart3, Apple } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Now available on iOS
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-light-text dark:text-dark-text tracking-tight">
                            Every Rep <br />
                            <span className="text-accent">Counts.</span>
                        </h1>

                        <p className="text-xl text-light-text/70 dark:text-dark-text/70 max-w-xl mx-auto lg:mx-0">
                            The most intuitive workout tracker for serious lifters. Design your split, track your progress, and verify your gains.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-transform hover:scale-105 shadow-lg shadow-accent/25">
                                <Apple size={24} />
                                Download on App Store
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-80 transition-transform hover:scale-105">
                                Learn More
                            </button>
                        </div>

                        <div className="pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-light-text/50 dark:text-dark-text/50">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white dark:border-dark-background" />
                            ))}
                            <span>Trusted by 20,000+ lifters</span>
                        </div>
                    </div>

                    <div className="relative mx-auto lg:mr-0">
                        {/* Phone Mockup Placeholder */}
                        <div className="relative w-[300px] h-[600px] bg-dark-background border-8 border-gray-900 rounded-[3rem] shadow-2xl overflow-hidden z-10 mx-auto">
                            <div className="absolute inset-0 flex flex-col pt-12">
                                <div className="h-8 w-32 bg-gray-900 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20"></div>
                                <div className="flex-1 bg-light-background w-full p-4 space-y-4">
                                    <div className="h-8 w-2/3 bg-gray-200 rounded-lg animate-pulse"></div>
                                    <div className="flex gap-4">
                                        <div className="h-32 w-full bg-accent/20 rounded-2xl animate-pulse"></div>
                                        <div className="h-32 w-full bg-accent/10 rounded-2xl animate-pulse"></div>
                                    </div>
                                    <div className="h-40 w-full bg-gray-100 rounded-2xl animate-pulse"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                                        <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse"></div>
                                        <div className="h-4 w-4/6 bg-gray-100 rounded animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Blob decorations */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-6 py-20 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-4xl font-bold">Everything you need to <span className="text-accent">level up</span></h2>
                        <p className="text-lg text-light-text/70 dark:text-dark-text/70">
                            Stop using Notes app. Upgrade your tracking with powerful analytics and intuitive design.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="p-8 rounded-[2rem] bg-light-secondary dark:bg-dark-secondary hover:scale-[1.02] transition-transform duration-300 border border-light-text/5 dark:border-dark-text/5 shadow-sm group">
                            <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                                <Activity size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Smart Tracking</h3>
                            <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                                Log reps, sets, and RPE with ease. Our smart interface remembers your last session.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-8 rounded-[2rem] bg-light-secondary dark:bg-dark-secondary hover:scale-[1.02] transition-transform duration-300 border border-light-text/5 dark:border-dark-text/5 shadow-sm group">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:-rotate-6 transition-transform">
                                <Calendar size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Custom Splits</h3>
                            <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                                Build your perfect weekly schedule. Push, Pull, Legs, or Full Body - you decide.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-8 rounded-[2rem] bg-light-secondary dark:bg-dark-secondary hover:scale-[1.02] transition-transform duration-300 border border-light-text/5 dark:border-dark-text/5 shadow-sm group">
                            <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                                <BarChart3 size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Visual Progress</h3>
                            <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                                Watch your strength grow with detailed charts and volume analytics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-20">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-accent to-orange-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-accent/30">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold">Ready to make gains?</h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Join thousands of lifters who have transformed their training with GymBaazi.
                        </p>
                        <button className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                            <Apple size={24} />
                            Download for free
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
