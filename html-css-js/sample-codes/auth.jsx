//reactの認証
// pages
import Link from 'next/link'
export default function Page(){
  return(
    <main>
      <h1>トップページ</h1>
      <Link href="/report">レポートへ</Link> 
    </main>
  )
}

//login.jsx
import {useState} from 'react'
import {useAuth} from '../context/AuthContext'

export default function Login(){
    const {login} = useAuth()
    const [username, setUsername] = useState('')
    const [password, setPassWord] = useState('')

    return(
        <form onSubmit={(e) =>{
            e.preventDefault()
            login(username, password)
        }}>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder='ユーザー名'/>
            <input value={password} onChange={e => setPassWord(e.target.value)} placeholder='パスワード' type='password'/>
            <button type='submit'>ログイン</button>
        </form>
    )
}

//App.jsx
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';

function Home(){
    const{user, logout} = useAuth()

    if(!user) return<Login/>

    return(
        <div>
            <p>ようこそ、{user.name}さん</p>
            <button onClick={logout}>ログアウトする</button>
        </div>
    )
}

export default function App(){
    return(
        <AuthProvider>
            <Home />
        </AuthProvider>
    )
}

//認証の状態管理
import { createContext, useState, useContext } from "react"

const AuthContext = createContext(null)

export function AuthProvider ({children}){
    const[user, setUser] = useState(null)

    const login = (username,password) =>{
        if(username === 'admin' && password ==='1234'){
            setUser({name:'admin'})
        }
    }

    const logout = () =>{
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
} 

//nextの認証 

//page
// export default function DashboardPage(){
//     return(
//         <main>
//             <h1>ダッシュボード</h1>
//             <p>ログイン成功</p>
//         </main>
//     )
// }


//app jsx
// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";

// export const {handlers, auth, signIn, signOut} = NextAuth({
//     pages:{
//         signIn: '/login'
//     },

//     providers: [
//         Credentials({
//             authorize: async (credentials) => {
//                 const username = credentials.username as string
//                 const password = credentials.password as string

//                 if(credentials.username === 'admin' && credentials.password === '1234'){
//                     return{id:'1',name:'admin'}
//                 }
//                 return null
//             }
//         })
//     ]
// })


// login
// 'use client'
// import { useActionState, useState } from "react"
// import {signIn} from 'next-auth/react' 

// export default function LoginPage(){
//     const [username, setUsername] = useState('')
//     const [password,setPassword] = useState('')

//     return(
//         <form onSubmit={async (e) =>{
//             e.preventDefault()
//             await signIn('credentials',{
//                 username,
//                 password,
//                 redirectTo: '/dashboard'    
//             })
//         }}>
//             <input value={username} onChange={e => setUsername(e.target.value)} placeholder="ユーザー名" />
//             <input value={password} onChange={e => setPassword(e.target.value)} placeholder="パスワード" type="password"/>
//             <button type="submit"> ログイン</button>
//         </form>
//     )

// }