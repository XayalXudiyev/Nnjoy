import { useRoutes } from "react-router-dom";

import _routes from './routes'

const Router = () => {
    const routes = useRoutes(_routes)
    return routes
}

export default Router