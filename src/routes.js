import Home from './Pages/Home/Home'
import Calendar from './Pages/Calendar/Calendar'
import Products from './Pages/Products/Products';
import NotFound from './Pages/NotFound/NotFound'
import NewProduct from "./Pages/Products/Product/New Product/NewProduct";

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/calendar', element: <Calendar /> },
	{ path: '/products', element: <Products /> },
	{ path: '/products/add', element: <NewProduct /> },
	{ path: '*', element: <NotFound /> },
]

export default routes