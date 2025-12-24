import { createContext, useContext, useState, useEffect } from 'react';

// Translation data
const translations = {
    th: {
        // Navbar
        nav: {
            features: 'ฟีเจอร์',
            about: 'เกี่ยวกับเรา',
            login: 'เข้าสู่ระบบ',
            getStarted: 'เริ่มต้นใช้งาน',
            dashboard: 'แดชบอร์ด',
            logout: 'ออกจากระบบ',
            hello: 'สวัสดี',
        },
        // Hero Section
        hero: {
            badge: 'ฟรีตลอดชีพ • ไม่มีโฆษณา',
            headline1: 'จัดการชีวิตให้ง่ายขึ้น',
            headline2: 'ด้วย DevTask',
            subheadline: 'แอปพลิเคชัน To-Do List ที่ออกแบบมาเพื่อนักพัฒนา จัดการงานได้อย่างมีประสิทธิภาพ ใช้งานง่าย ปลอดภัย และฟรีตลอดไป',
            cta: 'เริ่มต้นใช้งานฟรี',
            ctaSecondary: 'ดูฟีเจอร์ทั้งหมด',
            users: 'ผู้ใช้งาน',
            tasksManaged: 'งานที่จัดการ',
            uptime: 'Uptime',
        },
        // Features Section
        features: {
            title: 'ทำไมต้อง',
            subtitle: 'เราออกแบบทุกฟีเจอร์โดยคำนึงถึงประสบการณ์ผู้ใช้เป็นหลัก เพื่อให้คุณจัดการงานได้อย่างมีประสิทธิภาพที่สุด',
            easy: {
                title: 'ใช้งานง่าย',
                desc: 'อินเตอร์เฟซที่ออกแบบมาให้ใช้งานง่าย ไม่ซับซ้อน เริ่มต้นได้ทันทีไม่ต้องเรียนรู้นาน',
            },
            secure: {
                title: 'ปลอดภัยสูง',
                desc: 'ข้อมูลของคุณถูกเข้ารหัสและจัดเก็บอย่างปลอดภัย มั่นใจได้ว่าความเป็นส่วนตัวได้รับการคุ้มครอง',
            },
            free: {
                title: 'ฟรีตลอดชีพ',
                desc: 'ไม่มีค่าใช้จ่ายใดๆ ทั้งสิ้น ใช้งานได้ฟรีตลอดไป ไม่มีโฆษณารบกวน',
            },
            responsive: {
                title: 'ทุกอุปกรณ์',
                desc: 'รองรับทุกขนาดหน้าจอ ใช้งานได้ทั้งบนคอมพิวเตอร์ แท็บเล็ต และมือถือ',
            },
        },
        // Footer
        footer: {
            description: 'แอปพลิเคชัน To-Do List ที่ออกแบบมาเพื่อนักพัฒนา จัดการงานได้อย่างมีประสิทธิภาพ',
            quickLinks: 'ลิงก์ด่วน',
            contact: 'ติดต่อเรา',
            copyright: 'All rights reserved.',
            madeBy: 'สร้างโดย',
            madeWith: 'Made with ❤️ in Thailand',
        },
        // Login
        login: {
            title: 'ยินดีต้อนรับกลับ!',
            subtitle: 'เข้าสู่ระบบเพื่อจัดการงานของคุณ',
            email: 'อีเมล',
            password: 'รหัสผ่าน',
            rememberMe: 'จดจำฉัน',
            forgotPassword: 'ลืมรหัสผ่าน?',
            submit: 'เข้าสู่ระบบ',
            noAccount: 'ยังไม่มีบัญชี?',
            register: 'สมัครสมาชิก',
            errorInvalid: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
        },
        // Register
        register: {
            title: 'สร้างบัญชีใหม่',
            subtitle: 'เริ่มจัดการงานของคุณวันนี้',
            name: 'ชื่อ',
            email: 'อีเมล',
            password: 'รหัสผ่าน',
            confirmPassword: 'ยืนยันรหัสผ่าน',
            submit: 'สมัครสมาชิก',
            hasAccount: 'มีบัญชีอยู่แล้ว?',
            login: 'เข้าสู่ระบบ',
            namePlaceholder: 'ชื่อของคุณ',
            passwordPlaceholder: 'อย่างน้อย 6 ตัวอักษร',
            confirmPlaceholder: 'ยืนยันรหัสผ่านอีกครั้ง',
            errorName: 'กรุณากรอกชื่อ',
            errorEmail: 'กรุณากรอกอีเมล',
            errorEmailInvalid: 'รูปแบบอีเมลไม่ถูกต้อง',
            errorPassword: 'กรุณากรอกรหัสผ่าน',
            errorPasswordShort: 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร',
            errorConfirm: 'กรุณายืนยันรหัสผ่าน',
            errorConfirmMatch: 'รหัสผ่านไม่ตรงกัน',
            errorEmailExists: 'อีเมลนี้ถูกใช้งานแล้ว',
        },
        // Dashboard
        dashboard: {
            total: 'ทั้งหมด',
            active: 'ค้างอยู่',
            completed: 'เสร็จแล้ว',
            addPlaceholder: 'เพิ่มงานใหม่...',
            add: 'เพิ่ม',
            filterAll: 'ทั้งหมด',
            filterActive: 'ค้างอยู่',
            filterCompleted: 'เสร็จแล้ว',
            emptyAll: 'วันนี้ว่างจัง!',
            emptyActive: 'ไม่มีงานค้าง!',
            emptyCompleted: 'ยังไม่มีงานเสร็จ',
            emptySubAll: 'เพิ่มงานใหม่เพื่อเริ่มต้นวันนี้',
            emptySub: 'ดีใจด้วย! 🎉',
        },
    },
    en: {
        // Navbar
        nav: {
            features: 'Features',
            about: 'About',
            login: 'Login',
            getStarted: 'Get Started',
            dashboard: 'Dashboard',
            logout: 'Logout',
            hello: 'Hello',
        },
        // Hero Section
        hero: {
            badge: 'Free Forever • No Ads',
            headline1: 'Manage Your Life Easier',
            headline2: 'with DevTask',
            subheadline: 'A To-Do List app designed for developers. Manage tasks efficiently, easy to use, secure, and free forever.',
            cta: 'Get Started Free',
            ctaSecondary: 'View All Features',
            users: 'Users',
            tasksManaged: 'Tasks Managed',
            uptime: 'Uptime',
        },
        // Features Section
        features: {
            title: 'Why Choose',
            subtitle: 'Every feature is designed with user experience in mind, helping you manage tasks most efficiently.',
            easy: {
                title: 'Easy to Use',
                desc: 'Simple and intuitive interface. Get started immediately without a learning curve.',
            },
            secure: {
                title: 'Highly Secure',
                desc: 'Your data is encrypted and stored securely. Rest assured your privacy is protected.',
            },
            free: {
                title: 'Free Forever',
                desc: 'No cost at all. Use it free forever with no annoying ads.',
            },
            responsive: {
                title: 'All Devices',
                desc: 'Works on all screen sizes. Use it on desktop, tablet, and mobile.',
            },
        },
        // Footer
        footer: {
            description: 'A To-Do List app designed for developers. Manage tasks efficiently.',
            quickLinks: 'Quick Links',
            contact: 'Contact Us',
            copyright: 'All rights reserved.',
            madeBy: 'Created by',
            madeWith: 'Made with ❤️ in Thailand',
        },
        // Login
        login: {
            title: 'Welcome Back!',
            subtitle: 'Sign in to manage your tasks',
            email: 'Email',
            password: 'Password',
            rememberMe: 'Remember me',
            forgotPassword: 'Forgot password?',
            submit: 'Sign In',
            noAccount: "Don't have an account?",
            register: 'Sign Up',
            errorInvalid: 'Invalid email or password',
        },
        // Register
        register: {
            title: 'Create New Account',
            subtitle: 'Start managing your tasks today',
            name: 'Name',
            email: 'Email',
            password: 'Password',
            confirmPassword: 'Confirm Password',
            submit: 'Sign Up',
            hasAccount: 'Already have an account?',
            login: 'Sign In',
            namePlaceholder: 'Your name',
            passwordPlaceholder: 'At least 6 characters',
            confirmPlaceholder: 'Confirm your password',
            errorName: 'Please enter your name',
            errorEmail: 'Please enter your email',
            errorEmailInvalid: 'Invalid email format',
            errorPassword: 'Please enter a password',
            errorPasswordShort: 'Password must be at least 6 characters',
            errorConfirm: 'Please confirm your password',
            errorConfirmMatch: 'Passwords do not match',
            errorEmailExists: 'This email is already in use',
        },
        // Dashboard
        dashboard: {
            total: 'Total',
            active: 'Active',
            completed: 'Completed',
            addPlaceholder: 'Add new task...',
            add: 'Add',
            filterAll: 'All',
            filterActive: 'Active',
            filterCompleted: 'Completed',
            emptyAll: 'Nothing to do today!',
            emptyActive: 'No pending tasks!',
            emptyCompleted: 'No completed tasks yet',
            emptySubAll: 'Add a new task to get started',
            emptySub: 'Congratulations! 🎉',
        },
    },
};

const LanguageContext = createContext(null);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('devtask_language');
        return saved || 'th';
    });

    useEffect(() => {
        localStorage.setItem('devtask_language', language);
    }, [language]);

    const t = translations[language];

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'th' ? 'en' : 'th');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
