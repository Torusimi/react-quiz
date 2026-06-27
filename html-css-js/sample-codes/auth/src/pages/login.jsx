import { useState } from 'react'
import  useAuth from '../hooks/useAuth'

export default function Login() {
    const { login } = useAuth()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            login(username, password)
        }}>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder='ユーザー名' />
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder='パスワード' type='password' />
            <button type='submit'>ログイン</button>
        </form>
    )
}