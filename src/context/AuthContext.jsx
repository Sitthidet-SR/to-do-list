import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check for existing session
        const storedUser = localStorage.getItem('devtask_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const register = (name, email, password) => {
        // Get existing users
        const users = JSON.parse(localStorage.getItem('devtask_users') || '[]');

        // Check if email already exists
        if (users.find(u => u.email === email)) {
            throw new Error('อีเมลนี้ถูกใช้งานแล้ว');
        }

        // Create new user with hashed password (simulated)
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password: btoa(password), // Simple encoding (in production use bcrypt)
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('devtask_users', JSON.stringify(users));

        // Auto login after register
        const userSession = { id: newUser.id, name: newUser.name, email: newUser.email };
        setUser(userSession);
        localStorage.setItem('devtask_user', JSON.stringify(userSession));

        return userSession;
    };

    const login = (email, password, rememberMe = false) => {
        const users = JSON.parse(localStorage.getItem('devtask_users') || '[]');
        const user = users.find(u => u.email === email && u.password === btoa(password));

        if (!user) {
            throw new Error('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
        }

        const userSession = { id: user.id, name: user.name, email: user.email };
        setUser(userSession);

        if (rememberMe) {
            localStorage.setItem('devtask_user', JSON.stringify(userSession));
        } else {
            sessionStorage.setItem('devtask_user', JSON.stringify(userSession));
        }

        return userSession;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('devtask_user');
        sessionStorage.removeItem('devtask_user');
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
