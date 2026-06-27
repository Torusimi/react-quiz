// UserList

// import {useQuery} from '@tanstack/react-query'
// import {User} from '../types/user'

// async function fetchUsers(): Promise<User[]>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     if(!res.ok) throw new Error ('ユーザー情報の取得に失敗しました')
//     return res.json()
// }

// export function UserList(){
//     const {data, isLoading, isError, error} = useQuery({
//         queryKey:['users'],
//         queryFn: fetchUsers,
//         staleTime:1000*60,
//     })

//     if(isLoading) return <p>読み込み中...</p>
//     if(isError) return <p>エラー: {error.message}</p>

//     return(
//         <ul>
//             {data.map(user =>(
//                 <li key={user.id}>
//                     <strong>{user.name}</strong> - {user.email}
//                 </li>
//             ))}
//         </ul>
//     )
// }

// users
// export type User = {
//     id:number
//     name:string
//     email:string
//     phone:string 
// }



// import { UserList } from './components/UserList'

// export default function App() {
//   return (
//     <div>
//       <h1>ユーザー一覧</h1>
//       <UserList />
//     </div>
//   )
// }

// main
// import  React from 'react'
// import ReactDOM from 'react-dom/client'
// import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
// import App from './App'
// const queryClient = new QueryClient()
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <QueryClientProvider client={queryClient}>
//             <App />
//         </QueryClientProvider>
//     </React.StrictMode>
// )