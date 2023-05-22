import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@/views/pages/error';
import HomePage from '@/views/pages/home';
import LoginPage from '@/views/pages/doctor/login';
import SignUpPage from '@/views/pages/doctor/signup';
import ForgotPasswordPage from '@/views/pages/doctor/forgot-password';
import ResetPasswordPage from '@/views/pages/doctor/reset-password';
import Activate from '@/views/pages/doctor/activate';
// import UserPage from '@/views/pages/user';
// import ArtDetailPage from '@/views/pages/art/detail';
// import ArtNewPage from '@/views/pages/art/new';

const DoctorRoutes = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/signup',
        element: <SignUpPage />
    },
    {
        path: '/forgot-password',
        element: <ForgotPasswordPage />
    },
    {
        path: '/reset-password',
        element: <ResetPasswordPage />
    },
    {
        path: '/activate',
        element: <Activate />
    }
];

const routes = createBrowserRouter([
    ...DoctorRoutes,
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />
    }
    // {
    //     path: '/:id',
    //     element: <UserPage />
    // },
    // {
    //     path: '/art',
    //     element: <HomePage />
    // },
    // {
    //     path: '/art/new',
    //     element: <ArtNewPage />
    // },
    // ,
    // {
    //     path: '/art/:id',
    //     element: <ArtDetailPage />
    // }
]);

export default routes;
