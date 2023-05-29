import clsx from 'clsx';

/**
 * @typedef AdminLayoutProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 * @property {string} [boxClassName]
 */

/**
 * @param {AdminLayoutProps} props
 */
const AdminLayout = ({
    children = null,
    className = '',
    boxClassName = '',
    onSubmit = () => {}
}) => {
    return (
        <section
            className={clsx(
                'flex h-screen w-screen items-center justify-center',
                className
            )}
            style={{
                background: 'linear-gradient(90deg, #155E75 0%, #06B6D4 100%)'
            }}
        >
            <form
                onSubmit={onSubmit}
                className={clsx(
                    'flex w-[500px] flex-col items-center justify-center gap-9 border border-b-8 border-t-8 border-cyan-800 bg-slate-200 px-10 py-8 shadow-md',
                    boxClassName
                )}
            >
                {children}
            </form>
        </section>
    );
};

export default AdminLayout;
