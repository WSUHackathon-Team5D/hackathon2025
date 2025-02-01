import { useRoutes } from 'react-router-dom'
import Layout from '../components/layouts'
import Home from '../components/Home'
import Login from '../components/Login'
import Error from '../components/Error'

const Routes = () => {
    const route = useRoutes(
        [
            {
                path: '/',
                element: <Layout />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    },
                ]
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    )

    return route
}

export default Routes