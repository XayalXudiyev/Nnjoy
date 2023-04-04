import Home from '../pages/Home';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Order from '../pages/Order';
import Login from '../pages/login/Login';
import SignUp from '../pages/login/SignUp';

const routes=[
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/services",
        element: <Services />,
    },
    {
        path: "/portfolio",
        element: <Portfolio />,
    },
    {
        path: "/order",
        element: <Order />,
    },
    {
        path: "/login",
        element: <Login />,
    },{
        path: "/signUp",
        element: <SignUp />,
    },
]

export default routes;