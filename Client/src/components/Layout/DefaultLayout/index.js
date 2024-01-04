import { useContext } from 'react';

import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';
import Sidebar from '~/components/Layout/components/Sidebar';
import Seekbar from '~/components/Layout/components/Seekbar';
import { SongContext } from '~/context/SongContext';

function DefaultLayout({ children }) {
    const { currentSongs } = useContext(SongContext);
    return (
        <div className="wrapper">
            <div id="wrapperRow" className="row">
                <div className="col-sm-2" id="sidebar">
                    <Sidebar />
                </div>
                <div className="col-sm-10" id="header_content_footer">
                    {/* <!-- @include('layout.user.header') --> */}
                    <Header />

                    {/* <!-- @yeild('content') --> */}
                    {children}

                    {/* <!-- @include('layout.user.footer') --> */}
                    <Footer />
                </div>
                {/*  */}
                {currentSongs.length > 0 && <Seekbar />}
            </div>
        </div>
    );
}

export default DefaultLayout;
