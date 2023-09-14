import {createBrowserRouter} from 'react-router-dom';
import Main from '../layouts/Main';
import Cities from '../pages/Cities';
import CityDetails from '../pages/CityDetails';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ProtectedRoute from './ProtectedRoute';



const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            {
                path:'/cities',
                element:<Cities/>
            },
            {
                path: '/cities/:id',
                element:<CityDetails/>
            },
            {
                path: '/signin',
                element:(<ProtectedRoute path='/'>
                            <SignIn/>
                        </ProtectedRoute>)
            },
            {
                path: '/signup',
                element:(<ProtectedRoute path='/'>
                            <SignUp/>
                        </ProtectedRoute>)
            },
            {
                path: '*',
                element:<h1 className='my-40 text-3xl text-center'>ERROR PAGE</h1>
            },
            {
                path: '/404',
                element:<h1 className='my-40 text-3xl text-center'>ERROR PAGE</h1>
            }
            
        ]
    }
    
    
    
]);

export default router;