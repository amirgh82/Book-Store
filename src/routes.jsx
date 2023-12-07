import Index from './pages/Index/Index'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

let routes = [
  { path: '/', element: <Index /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> }
]

export default routes
