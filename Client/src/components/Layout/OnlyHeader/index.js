import Header from '~/components/Layout/components/Header';

function OnlyHeader({children}) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}

export default OnlyHeader;