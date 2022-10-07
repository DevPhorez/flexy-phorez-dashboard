import Home from './Pages/Home/Home'
import Calendar from './Pages/Calendar/Calendar'
import Products from './Pages/Products/Products';
import NotFound from './Pages/NotFound/NotFound'

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/calendar', element: <Calendar /> },
	{ path: '/products', element: <Products /> },
	{ path: '*', element: <NotFound /> },
]

export default routes