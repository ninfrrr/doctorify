import clsx from 'clsx';
import Navbar from '@/views/components/navbar';
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
            <main className="bg-slate-200">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
