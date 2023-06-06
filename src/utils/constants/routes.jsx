import { createBrowserRouter } from 'react-router-dom';

import Home from '@/views/pages/home';
import ErrorPage from '@/views/pages/error';
import LandingPage from '@/views/pages/landing-page';
import SearchPage from '@/views/pages/search';
import AboutUsPage from '@/views/pages/about_us';

import LoginPage from '@/views/pages/admin/login';
import SignUpPage from '@/views/pages/admin/signup';
import ForgotPasswordPage from '@/views/pages/admin/forgot-password';
import ResetPasswordPage from '@/views/pages/admin/reset-password';
import Activate from '@/views/pages/admin/activate';
import ListAppointment from '@/views/pages/list-appointment';

import Login from '@/views/pages/patient/login';
import SignUp from '@/views/pages/patient/signup';
import History from '@/views/pages/history';
import Appointment from '@/views/pages/appointment';
import Review from '@/views/pages/review';
// import UserPage from '@/views/pages/user';
// import ArtDetailPage from '@/views/pages/art/detail';
// import ArtNewPage from '@/views/pages/art/new';

const AdminRoutes = [
    {
        path: '/admin-login',
        element: <LoginPage />
    },
    {
        path: '/admin-signup',
        element: <SignUpPage />
    },
    {
        path: '/admin-forgot-password',
        element: <ForgotPasswordPage />
    },
    {
        path: '/admin-reset-password',
        element: <ResetPasswordPage />
    },
    {
        path: '/admin-activate',
        element: <Activate />
    },
    {
        path: '/list-appointment',
        element: <ListAppointment />
    }
];

const PatientRoutes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/history',
        element: <History />
    },
    {
        path: '/appointment',
        element: <Appointment />
    },
    {
        path: '/review',
        element: <Review />
    }
];

const routes = createBrowserRouter([
    ...AdminRoutes,
    ...PatientRoutes,
    {
        path: '/',
        element: <LandingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/home',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/search/:keyword',
        element: <SearchPage />
    },
    {
        path: '/about_us',
        element: <AboutUsPage />
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
