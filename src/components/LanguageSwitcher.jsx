import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = ({ className = '' }) => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all ${className}`}
            title={language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
        >
            <span className={`text-sm font-medium ${language === 'th' ? 'text-indigo-400' : 'text-slate-400'}`}>
                TH
            </span>
            <span className="text-slate-600">/</span>
            <span className={`text-sm font-medium ${language === 'en' ? 'text-indigo-400' : 'text-slate-400'}`}>
                EN
            </span>
        </button>
    );
};

export default LanguageSwitcher;
