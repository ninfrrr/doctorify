import clsx from 'clsx';
import Navbar from '@/views/components/navbar/main';
import Footer from '@/views/components/footer';

/**
 * @typedef MainLayoutProps
 * @property {React.ReactNode} children
 */

/**
 * @param {MainLayoutProps} props
 */
const MainLayout = ({ children = null }) => {
    return (
        <div>
            <Navbar />
            <main className="bg-white">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
