import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-slate-950">
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <Footer />
        </div>
    );
};

export default LandingPage;
