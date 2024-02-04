import Index from './pages/Index/Index'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import IndexAdmin from './pages/AdminPanel/IndexAdmin/IndexAdmin'
import AdminPanel from './pages/AdminPanel/AdminPanel'
import Categories from './pages/AdminPanel/Category/Category'
import Books from './pages/AdminPanel/Books/Books'
import Orders from './pages/AdminPanel/Orders/Orders'
import Users from './pages/AdminPanel/Users/Users'

let routes = [
  { path: '/', element: <Index /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },

  {
    path: '/p-admin/*',
    element: (<AdminPanel />),
    children: [
      { path: '', element: <IndexAdmin /> },
      { path: 'users', element: <Users /> },
      { path: 'books', element: <Books /> },
      { path: 'categories', element: <Categories /> },
      { path: 'orders', element: <Orders /> }
    ]
  }
]

export default routes
