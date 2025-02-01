import { useRoutes } from 'react-router-dom'
import Layout from '../components/layouts'
import Home from '../components/Home'
import Login from '../components/Login'
import Error from '../components/Error'
import Signup from '../components/Signup'
import Contact from '../components/Contact'

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
                    {
                        path: '/contact',
                        element: <Contact />
                    },
                ]
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '*',
                element: <Error />
            },
        ]
    )

    return route
}

export default Routes