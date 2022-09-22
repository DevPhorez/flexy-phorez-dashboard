import Calendar from './Pages/Calendar/Calendar'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/calendar', element: <Calendar /> },
	{ path: '*', element: <NotFound /> },
]

export default routes