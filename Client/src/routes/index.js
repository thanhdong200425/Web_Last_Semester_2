import Home from '~/pages/Home';
import Training from '~/pages/Training';
import Forum from '~/pages/Forum';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Practice from '~/pages/Practice';
import Post from '~/pages/Post';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/training',
        component: Training,
    },
    {
        path: '/forum',
        component: Forum,
    },
    {
        path: '/login',
        component: Login,
        layout: null,
    },
    {
        path: '/signup',
        component: Signup,
        layout: null,
    },
    {
        path: '/target/:id',
        component: Practice,
    },
];

const privateRoutes = [
    {
        path: '/post/:id',
        component: Post,
    },
];

export { publicRoutes, privateRoutes };
