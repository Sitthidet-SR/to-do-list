import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8">
                            <Sparkles className="w-4 h-4 text-indigo-400" />
                            <span className="text-sm text-indigo-300 font-medium">{t.hero.badge}</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            {t.hero.headline1}
                            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {t.hero.headline2}
                            </span>
                        </h1>

                        {/* Sub-headline */}
                        <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
                            {t.hero.subheadline}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/register"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                            >
                                {t.hero.cta}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="#features"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-slate-300 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all"
                            >
                                {t.hero.ctaSecondary}
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 mt-12 justify-center lg:justify-start">
                            <div>
                                <div className="text-3xl font-bold text-white">10K+</div>
                                <div className="text-sm text-slate-400">{t.hero.users}</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">50K+</div>
                                <div className="text-sm text-slate-400">{t.hero.tasksManaged}</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">99.9%</div>
                                <div className="text-sm text-slate-400">{t.hero.uptime}</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - App Mockup */}
                    <div className="relative">
                        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-2xl p-6 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                            {/* Window Header */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-4 text-sm text-slate-400">DevTask Dashboard</span>
                            </div>

                            {/* Mock Tasks */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <div className="w-5 h-5 rounded border-2 border-indigo-500 flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 bg-indigo-500 rounded-sm"></div>
                                    </div>
                                    <span className="text-slate-300 line-through">ออกแบบ UI สำหรับหน้า Landing</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <div className="w-5 h-5 rounded border-2 border-indigo-500 flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 bg-indigo-500 rounded-sm"></div>
                                    </div>
                                    <span className="text-slate-300 line-through">เขียน API สำหรับ Authentication</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
                                    <div className="w-5 h-5 rounded border-2 border-slate-600"></div>
                                    <span className="text-white">สร้างระบบ To-Do List</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <div className="w-5 h-5 rounded border-2 border-slate-600"></div>
                                    <span className="text-slate-400">ทดสอบและ Deploy</span>
                                </div>
                            </div>

                            {/* Add Task Input */}
                            <div className="mt-4 flex gap-2">
                                <div className="flex-1 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-slate-500">
                                    + {t.dashboard.addPlaceholder}
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
