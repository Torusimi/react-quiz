// next
import Link from 'next/link'

export default function Page(){
  return(
    <main>
      <h1>トップページ</h1>
      <Link href="/report">レポートへ</Link> 
    </main>
  )
}

// reportPage
export default function ReportPage() {
  return (
    <main>
      <h1>レポートページ</h1>
    </main>
  )
}

//react

// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Report from './pages/Report'
// import NoMatch from './pages/NoMatch'
// import AppLayout from './components/layout/AppLayout'


// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<Home />} />
//           <Route path="/report" element={<Report />} />
//           <Route path="*" element={<NoMatch />} />
//         </Route>
//       </Routes>
//     </Router>
//   )
// }
// export default App
