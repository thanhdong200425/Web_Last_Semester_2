import Home from '~/pages/Home';
import DetailSinger from '~/pages/DetailSinger';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Practice from '~/pages/Practice';
import Post from '~/pages/Post';
import Singers from '~/pages/Singers';
import Playlist from '~/pages/Playlist';
import Create_playlist from '~/pages/Create_playlist';


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
        path: '/playlist',
        component: Playlist,
    },
    {
        path: '/create_playlist',
        component: Create_playlist,
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
