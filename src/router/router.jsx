import {createBrowserRouter} from 'react-router-dom';
import Main from '../layouts/Main';
import Cities from '../pages/Cities';
import CityDetails from '../pages/CityDetails';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';


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
            }
            
        ]
    },
    {
                path: '/signin',
                element:<SignIn/>
    }
    
    
]);

export default router;