import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';

function DefaultLayout({children}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
