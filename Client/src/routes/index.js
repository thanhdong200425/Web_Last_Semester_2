import Home from '~/pages/Home';
import DetailSinger from '~/pages/DetailSinger';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import DetailAlbumn from '~/pages/DetailAlbumn';
import DetailSong from '~/pages/DetailSong';
import Singers from '~/pages/Singers';
import Playlist from '~/pages/Playlist';
import Create_playlist from '~/pages/Create_playlist';
import FeaturedSong from '~/pages/FeaturedSong';
import Albumn from '~/pages/Albumn';

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
        path: '/detail_albumn/:albumn_id',
        component: DetailAlbumn,
    },
    {
        path: '/detail_song',
        component: DetailSong,
        layout: null,
    },
    {
        path: '/featured_song',
        component: FeaturedSong,
    },
    {
        path: '/albumn',
        component: Albumn,
    },
];

const privateRoutes = [
    {
        path: '/playlist/:id',
        component: Playlist,
    },
];

export { publicRoutes, privateRoutes };
