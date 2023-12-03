import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';
import Sidebar from '~/components/Layout/components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <div id="wrapperRow" className="row">
                <Sidebar />

                <div className="col-sm-10 p-0" id="header_content_footer">
                    {/* <!-- @include('layout.user.header') --> */}
                    <Header />

                    {/* <!-- @yeild('content') --> */}
                    {children}

                    {/* <!-- @include('layout.user.footer') --> */}
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
