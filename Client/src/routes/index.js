import Home from '~/pages/Home';
import DetailSinger from '~/pages/DetailSinger';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import DetailAlbum from '~/pages/DetailAlbum';
import DetailSong from '~/pages/DetailSong';
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
