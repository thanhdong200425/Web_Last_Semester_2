import Home from '~/pages/Home';
import DetailSinger from '~/pages/DetailSinger';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Practice from '~/pages/Practice';
import Post from '~/pages/Post';
import Singers from '~/pages/Singers';


const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/detail_singer',
        component: DetailSinger,
    },
    {
        path: '/singers',
        component: Singers,
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
