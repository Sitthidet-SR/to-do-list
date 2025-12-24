import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    CheckSquare,
    Plus,
    Trash2,
    Edit3,
    Check,
    X,
    LogOut,
    ListTodo,
    CheckCircle2,
    Circle,
    Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Dashboard = () => {
    const { user, logout, isLoading } = useAuth();
    const { t } = useLanguage();
    const navigate = useNavigate();

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');
    const [filter, setFilter] = useState('all'); // all, active, completed

    // Redirect if not logged in
    useEffect(() => {
        if (!isLoading && !user) {
            navigate('/login');
        }
    }, [user, isLoading, navigate]);

    // Load todos from localStorage
    useEffect(() => {
        if (user) {
            const storedTodos = localStorage.getItem(`devtask_todos_${user.id}`);
            if (storedTodos) {
                setTodos(JSON.parse(storedTodos));
            }
        }
    }, [user]);

    // Save todos to localStorage
    const saveTodos = (newTodos) => {
        setTodos(newTodos);
        if (user) {
            localStorage.setItem(`devtask_todos_${user.id}`, JSON.stringify(newTodos));
        }
    };

    // Add new todo
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;

        const todo = {
            id: Date.now().toString(),
            text: newTodo.trim(),
            completed: false,
            createdAt: new Date().toISOString()
        };

        saveTodos([todo, ...todos]);
        setNewTodo('');
    };

    // Toggle completion
    const handleToggle = (id) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        saveTodos(newTodos);
    };

    // Delete todo
    const handleDelete = (id) => {
        saveTodos(todos.filter(todo => todo.id !== id));
    };

    // Start editing
    const handleEdit = (todo) => {
        setEditingId(todo.id);
        setEditingText(todo.text);
    };

    // Save edit
    const handleSaveEdit = () => {
        if (!editingText.trim()) return;

        const newTodos = todos.map(todo =>
            todo.id === editingId ? { ...todo, text: editingText.trim() } : todo
        );
        saveTodos(newTodos);
        setEditingId(null);
        setEditingText('');
    };

    // Cancel edit
    const handleCancelEdit = () => {
        setEditingId(null);
        setEditingText('');
    };

    // Handle logout
    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Filter todos
    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    // Stats
    const completedCount = todos.filter(t => t.completed).length;
    const activeCount = todos.length - completedCount;

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                            <CheckSquare className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">DevTask</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                        <span className="text-slate-300 hidden sm:inline">{t.nav.hello}, <span className="text-white font-medium">{user?.name}</span></span>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="hidden sm:inline">{t.nav.logout}</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 max-w-4xl mx-auto px-4 py-8">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                        <ListTodo className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{todos.length}</div>
                        <div className="text-sm text-slate-400">{t.dashboard.total}</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                        <Circle className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{activeCount}</div>
                        <div className="text-sm text-slate-400">{t.dashboard.active}</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                        <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{completedCount}</div>
                        <div className="text-sm text-slate-400">{t.dashboard.completed}</div>
                    </div>
                </div>

                {/* Add Todo Form */}
                <form onSubmit={handleAddTodo} className="mb-6">
                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            placeholder={t.dashboard.addPlaceholder}
                            className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            <span className="hidden sm:inline">{t.dashboard.add}</span>
                        </button>
                    </div>
                </form>

                {/* Filter Buttons */}
                <div className="flex gap-2 mb-6">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === 'all'
                                ? 'bg-indigo-500 text-white'
                                : 'bg-slate-800 text-slate-400 hover:text-white'
                            }`}
                    >
                        {t.dashboard.filterAll}
                    </button>
                    <button
                        onClick={() => setFilter('active')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === 'active'
                                ? 'bg-indigo-500 text-white'
                                : 'bg-slate-800 text-slate-400 hover:text-white'
                            }`}
                    >
                        {t.dashboard.filterActive}
                    </button>
                    <button
                        onClick={() => setFilter('completed')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === 'completed'
                                ? 'bg-indigo-500 text-white'
                                : 'bg-slate-800 text-slate-400 hover:text-white'
                            }`}
                    >
                        {t.dashboard.filterCompleted}
                    </button>
                </div>

                {/* Todo List */}
                <div className="space-y-3">
                    {filteredTodos.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-10 h-10 text-slate-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {filter === 'all' ? t.dashboard.emptyAll : filter === 'active' ? t.dashboard.emptyActive : t.dashboard.emptyCompleted}
                            </h3>
                            <p className="text-slate-400">
                                {filter === 'all' ? t.dashboard.emptySubAll : t.dashboard.emptySub}
                            </p>
                        </div>
                    ) : (
                        filteredTodos.map((todo) => (
                            <div
                                key={todo.id}
                                className={`group flex items-center gap-4 p-4 bg-slate-900/50 border rounded-xl transition-all ${todo.completed
                                        ? 'border-slate-800 bg-slate-900/30'
                                        : 'border-slate-800 hover:border-indigo-500/30'
                                    }`}
                            >
                                {/* Checkbox */}
                                <button
                                    onClick={() => handleToggle(todo.id)}
                                    className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${todo.completed
                                            ? 'bg-indigo-500 border-indigo-500'
                                            : 'border-slate-600 hover:border-indigo-500'
                                        }`}
                                >
                                    {todo.completed && <Check className="w-4 h-4 text-white" />}
                                </button>

                                {/* Text */}
                                {editingId === todo.id ? (
                                    <input
                                        type="text"
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleSaveEdit();
                                            if (e.key === 'Escape') handleCancelEdit();
                                        }}
                                        className="flex-1 px-3 py-1 bg-slate-800 border border-indigo-500 rounded-lg text-white focus:outline-none"
                                        autoFocus
                                    />
                                ) : (
                                    <span
                                        className={`flex-1 ${todo.completed ? 'text-slate-500 line-through' : 'text-white'
                                            }`}
                                    >
                                        {todo.text}
                                    </span>
                                )}

                                {/* Actions */}
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {editingId === todo.id ? (
                                        <>
                                            <button
                                                onClick={handleSaveEdit}
                                                className="p-2 text-green-400 hover:bg-green-500/10 rounded-lg transition-colors"
                                            >
                                                <Check className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={handleCancelEdit}
                                                className="p-2 text-slate-400 hover:bg-slate-700 rounded-lg transition-colors"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => handleEdit(todo)}
                                                className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-colors"
                                            >
                                                <Edit3 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(todo.id)}
                                                className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
