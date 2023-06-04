import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeftOnRectangleIcon,
    Cog6ToothIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';

import Button from '@/views/elements/button';
import logo_doctorify from '@/assets/images/logo_2.png';

const Navbar = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, resetField } = useForm({
        defaulValues: { search: '' }
    });

    const onSubmit = data => {
        navigate(`/search/${data.search}`);
    };

    return (
        <header className="sticky top-0 flex h-16 items-center justify-between border-b border-slate-300 bg-cyan-800 px-6 py-4">
            <a href="/">
                <img
                    src={logo_doctorify}
                    className="h-14"
                    alt="Doctorify Logo"
                />
            </a>
            <div className="hidden md:flex">
                <ul className="flex items-center gap-10 font-medium">
                    <li>
                        <a href="/" className="hover:text-hijau text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/search"
                            className="hover:text-hijau text-white"
                        >
                            Cari Dokter
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about_us"
                            className="hover:text-hijau text-white"
                        >
                            Tentang Kami
                        </a>
                    </li>
                    <li>
                        <a
                            href="/history"
                            className="hover:text-hijau text-white"
                        >
                            Riwayat
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-2">
                <Button href="/login" variant="secondary">
                    Masuk
                </Button>
                <Button href="/signup">Daftar</Button>
            </div>
        </header>
    );
};

export default Navbar;
