import Home from '~/pages/Home';
import DetailSinger from '~/pages/DetailSinger';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import DetailAlbum from '~/pages/DetailAlbum';
import DetailSong from '~/pages/DetailSong';

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
        path: '/detail_album',
        component: DetailAlbum,
    },
    {
        path: '/detail_song',
        component: DetailSong,
        layout: null
    },
];

const privateRoutes = [
];

export { publicRoutes, privateRoutes };
