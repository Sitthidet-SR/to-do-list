import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, CheckSquare } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const { t } = useLanguage();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
                            <CheckSquare className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            DevTask
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                            {t.nav.features}
                        </a>
                        <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                            {t.nav.about}
                        </a>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSwitcher />
                        {user ? (
                            <>
                                <span className="text-slate-300">{t.nav.hello}, {user.name}</span>
                                <Link
                                    to="/dashboard"
                                    className="px-4 py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/25"
                                >
                                    {t.nav.dashboard}
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
                                >
                                    {t.nav.logout}
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-slate-300 hover:text-white transition-colors font-medium"
                                >
                                    {t.nav.login}
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-5 py-2.5 text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                                >
                                    {t.nav.getStarted}
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-300 hover:text-white"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-slate-800">
                        <div className="flex flex-col gap-4">
                            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                                {t.nav.features}
                            </a>
                            <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                                {t.nav.about}
                            </a>
                            {user ? (
                                <>
                                    <Link to="/dashboard" className="text-indigo-400 font-medium">
                                        {t.nav.dashboard}
                                    </Link>
                                    <button onClick={handleLogout} className="text-left text-slate-300">
                                        {t.nav.logout}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="text-slate-300">
                                        {t.nav.login}
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="px-4 py-2 text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium"
                                    >
                                        {t.nav.getStarted}
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
