import { Zap, Shield, Smartphone, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FeaturesSection = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: Zap,
            title: t.features.easy.title,
            description: t.features.easy.desc,
            color: 'from-yellow-400 to-orange-500'
        },
        {
            icon: Shield,
            title: t.features.secure.title,
            description: t.features.secure.desc,
            color: 'from-green-400 to-emerald-500'
        },
        {
            icon: Heart,
            title: t.features.free.title,
            description: t.features.free.desc,
            color: 'from-pink-400 to-rose-500'
        },
        {
            icon: Smartphone,
            title: t.features.responsive.title,
            description: t.features.responsive.desc,
            color: 'from-indigo-400 to-purple-500'
        }
    ];

    return (
        <section id="features" className="relative py-24 bg-slate-950">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {t.features.title}{' '}
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            DevTask
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        {t.features.subtitle}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 shadow-lg`}>
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{feature.description}</p>

                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity -z-10`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
