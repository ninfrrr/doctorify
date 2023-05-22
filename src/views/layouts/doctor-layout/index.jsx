import clsx from 'clsx';

/**
 * @typedef DoctorLayoutProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 * @property {string} [boxClassName]
 */

/**
 * @param {DoctorLayoutProps} props
 */
const DoctorLayout = ({
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
                    'flex w-[500px] flex-col items-center justify-center gap-9 rounded-2xl border border-cyan-800 bg-slate-200 px-10 py-8 shadow-md',
                    boxClassName
                )}
            >
                {children}
            </form>
        </section>
    );
};

export default DoctorLayout;
