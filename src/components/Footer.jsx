import { CheckSquare, Github, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer id="about" className="relative bg-slate-950 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                                <CheckSquare className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">DevTask</span>
                        </Link>
                        <p className="text-slate-400 mb-4">
                            {t.footer.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#features" className="text-slate-400 hover:text-white transition-colors">
                                    {t.nav.features}
                                </a>
                            </li>
                            <li>
                                <Link to="/login" className="text-slate-400 hover:text-white transition-colors">
                                    {t.nav.login}
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-slate-400 hover:text-white transition-colors">
                                    {t.register.submit}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t.footer.contact}</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Sitthidet-SR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contact@devtask.app"
                                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-slate-800 text-center space-y-2">
                    <p className="text-slate-500">
                        © {new Date().getFullYear()} DevTask. {t.footer.copyright}
                    </p>
                    <p className="text-slate-400">
                        {t.footer.madeBy}{' '}
                        <a
                            href="https://github.com/Sitthidet-SR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                        >
                            SitthidetSR
                        </a>
                        {' '}{t.footer.madeWith}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
