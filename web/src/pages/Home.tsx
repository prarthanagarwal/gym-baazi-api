import { Barbell, ShieldCheck, Barn, SquaresFour, CalendarBlank, Timer, DownloadSimple } from '@phosphor-icons/react';
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import { carouselData } from "../data";
import Navbar from '../components/Navbar';

export function AppleCardsCarouselDemo() {
    const cards = carouselData.map((card) => (
        <Card key={card.src} card={card} />
    ));

    return (
        <div className="w-full h-full flex items-center justify-center bg-transparent">
            <Carousel items={cards} />
        </div>
    );
}

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-transparent font-sans selection:bg-accent/30 text-light-text dark:text-dark-text overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-8 md:px-16 overflow-hidden min-h-screen flex items-center">

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
                    <div className="text-center lg:text-left space-y-8">
                        {/* App Icon */}
                        <div className="mb-8 mx-auto lg:mx-0 w-max rotate-3">
                            <img src="/logo.png" alt="GymBaazi Icon" className="w-24 h-24 object-cover rounded-[1rem] shadow-xl" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-light-text dark:text-dark-text tracking-tight mb-4">
                            your no fuss <span className="text-accent">gym buddy</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-light-text/70 dark:text-dark-text/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium pt-4">
                            A workout-only app that helps you structure your training and keep your progress visible with detailed logs, form GIFs and more.
                        </p>

                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                                <a href="#" className="hover:scale-105 transition-transform">
                                    <div className="flex w-56 h-16 bg-black text-white rounded-xl items-center justify-center shadow-lg">
                                        <div className="mr-3">
                                            <svg viewBox="0 0 384 512" width="35" height="45">
                                                <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <div className="text-xs">Download on the</div>
                                            <div className="text-2xl font-semibold font-sans -mt-1">App Store</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto lg:mr-0 w-full lg:w-[120%] lg:-mr-[20%]">
                        <AppleCardsCarouselDemo />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="px-6 py-20 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h2 className="text-4xl font-bold">A toolkit for the love of the game.</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1: Dashboard */}
                        <div className="p-6 rounded-[2rem] bg-light-secondary dark:bg-dark-secondary hover:shadow-md transition-shadow duration-300 border border-[#33221A] shadow-sm group">
                            <div className="w-14 h-14 rounded-2xl bg-[#33221A] text-[#f4eed9] flex items-center justify-center mb-6">
                                <SquaresFour size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Focus Dashboard</h3>
                            <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                                Start strong with a snapshot of your day; current streak, today's scheduled workout, and daily motivation.
                            </p>
                        </div>

                        {/* Feature 3: Calendar */}
                        <div className="p-6 rounded-[2rem] bg-light-secondary dark:bg-dark-secondary hover:shadow-md transition-shadow duration-300 border border-[#33221A] shadow-sm group">
                            <div className="w-14 h-14 rounded-2xl bg-[#33221A] text-[#f4eed9] flex items-center justify-center mb-6">
                                <CalendarBlank size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Flexible History</h3>
                            <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                                Calendar view of all your sweat sessions. Forgot to log yesterday? No stress. Add past workouts instantly and keep your streak alive.
                            </p>
                        </div>

                        {/* Feature 4: Library */}
                        <div className="p-6 rounded-[2rem] bg-light-secondary dark:bg-dark-secondary hover:shadow-md transition-shadow duration-300 border border-[#33221A] shadow-sm group">
                            <div className="w-14 h-14 rounded-2xl bg-[#33221A] text-[#f4eed9] flex items-center justify-center mb-6">
                                <Barbell size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">1200+ Exercises</h3>
                            <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                                From <em>Upper Arms</em> to <em>Cardio</em>. A massive library sorted by body part, complete with clear GIFs so you always know the form.
                            </p>
                        </div>

                        {/* Feature 5: Privacy */}
                        <div className="p-6 rounded-[2rem] bg-light-secondary dark:bg-dark-secondary hover:shadow-md transition-shadow duration-300 border border-[#33221A] shadow-sm group">
                            <div className="w-14 h-14 rounded-2xl bg-[#33221A] text-[#f4eed9] flex items-center justify-center mb-6">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">100% Private</h3>
                            <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                                Your data lives on your device, not in the cloud. Total privacy, offline access, and zero tracking. Just you and your weights.
                            </p>
                        </div>

                        {/* Feature 6: Simplicity */}
                        <div className="p-6 rounded-[2rem] bg-light-secondary dark:bg-dark-secondary hover:shadow-md transition-shadow duration-300 border border-[#33221A] shadow-sm group">
                            <div className="w-14 h-14 rounded-2xl bg-[#33221A] text-[#f4eed9] flex items-center justify-center mb-6">
                                <Barn size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">No Fluff</h3>
                            <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                                No social feeds, no diet ads. Just a clean tool designed to help you lift and track progress.
                            </p>
                        </div>

                        {/* Feature 7: Rest Timer */}
                        <div className="p-6 rounded-[2rem] bg-light-secondary dark:bg-dark-secondary hover:shadow-md transition-shadow duration-300 border border-[#33221A] shadow-sm group">
                            <div className="w-14 h-14 rounded-2xl bg-[#33221A] text-[#f4eed9] flex items-center justify-center mb-6">
                                <Timer size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Smart Rest Timer</h3>
                            <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                                Auto-starts after every set. Background notifications ensure you never miss your next lift, even if you switch apps.
                            </p>
                        </div>

                        {/* Feature 8: Data Export */}
                        <div className="p-6 rounded-[2rem] bg-light-secondary dark:bg-dark-secondary hover:shadow-md transition-shadow duration-300 border border-[#33221A] shadow-sm group">
                            <div className="w-14 h-14 rounded-2xl bg-[#33221A] text-[#f4eed9] flex items-center justify-center mb-6">
                                <DownloadSimple size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Your Data, Portable</h3>
                            <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                                Full JSON export and import. Back up your history or take it with you. You own your workout data, always.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 pt-12 pb-32 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#ED4264] to-[#FFEDBC] rounded-[3rem] p-10 md:p-14 text-center text-[#33221A] relative overflow-hidden shadow-2xl shadow-accent/20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold">Ready to start your fitness journey?</h2>
                        <p className="text-lg md:text-xl text-[#33221A]/80 max-w-2xl mx-auto">
                            Have a buddy to keep you in check.
                        </p>
                        <a href="#" className="inline-block hover:scale-105 transition-transform pt-2">
                            <div className="flex w-56 h-16 bg-black text-white rounded-xl items-center justify-center shadow-lg mx-auto">
                                <div className="mr-3">
                                    <svg viewBox="0 0 384 512" width="35" height="45">
                                        <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <div className="text-xs">Download on the</div>
                                    <div className="text-2xl font-semibold font-sans -mt-1">App Store</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
