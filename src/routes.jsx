import Index from './pages/Index/Index'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import IndexAdmin from './pages/AdminPanel/IndexAdmin/IndexAdmin'
import AdminPanel from './pages/AdminPanel/AdminPanel'

let routes = [
  { path: '/', element: <Index /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },

  { path: '/p-admin/*', element: <AdminPanel />, childern: [
    {}
  ] }
]

export default routes
