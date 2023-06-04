import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeftOnRectangleIcon,
    Cog6ToothIcon,
    MagnifyingGlassIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';

import Dropdown from '@/views/components/dropdown';
import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';
import logo_doctorify from '@/assets/images/logo_2.png';

const menuOptions = [
    {
        icon: UserCircleIcon,
        name: 'profile',
        text: 'My Account'
    },
    {
        icon: Cog6ToothIcon,
        name: 'settings',
        text: 'Settings'
    },
    {
        icon: ArrowLeftOnRectangleIcon,
        name: 'logout',
        text: 'Log out'
    }
];

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
            <img src={logo_doctorify} className="h-14" alt="Doctorify Logo" />
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
                            href="/history"
<<<<<<< HEAD:src/views/components/navbar/main/index.jsx
=======
                            className="hover:text-hijau text-white"
                        >
                            Riwayat
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about_us"
>>>>>>> 2014ca6d484c94466a3b176b35e06359200a1d3b:src/views/components/navbar/index.jsx
                            className="hover:text-hijau text-white"
                        >
                            Riwayat
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
