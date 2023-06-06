import clsx from 'clsx';
import Navbar from '@/views/components/navbar/admin';
import Footer from '@/views/components/footer';

/**
 * @typedef AdminLayoutProps
 * @property {React.ReactNode} children
 */

/**
 * @param {AdminLayoutProps} props
 */
const AdminLayout = ({ children = null }) => {
    return (
        <div>
            <Navbar />
            <main className="bg-white">{children}</main>
            <Footer />
        </div>
    );
};

export default AdminLayout;
