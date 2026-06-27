import { AuthProvider} from './context/AuthContext';
import { useAuth } from './hooks/useAuth'
import Login from './pages/Login';

function Home() {
    const { user, logout } = useAuth()

    if (!user) return <Login />

    return (
        <div>
            <p>ようこそ、{user.name}さん</p>
            <button onClick={logout}>ログアウトする</button>
        </div>
    )
}

export default function App() {
    return (
        <AuthProvider>
            <Home />
        </AuthProvider>
    )
}