import Home from './Pages/Home/Home'
import Calendar from './Pages/Calendar/Calendar'
import Products from './Pages/Products/Products';
import NotFound from './Pages/NotFound/NotFound'
import NewProduct from './Pages/Products/Product/New Product/NewProduct';
import ProductDetail from './Pages/Products/Product/Product Detail/ProductDetail';
import Blog from './Pages/Blog/Blog';

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/calendar', element: <Calendar /> },
	{ path: '/products', element: <Products /> },
	{ path: '/products/add', element: <NewProduct /> },
	{ path: '/products/:productID/:productTitle', element: <ProductDetail /> },
	{ path: '/blog/:blogID/:blogTitle', element: <Blog /> },
	{ path: '*', element: <NotFound /> },
]

export default routes