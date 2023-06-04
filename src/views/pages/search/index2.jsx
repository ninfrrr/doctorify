import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {
    ArrowRightOnRectangleIcon,
    ArrowLeftOnRectangleIcon,
    Bars3Icon,
    Cog6ToothIcon,
    MagnifyingGlassIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import React from 'react';

import TextField from '@/views/elements/text-field';
import MainLayout from '@/views/layouts/main-layout';

const Search = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, resetField } = useForm({
        defaulValues: { search: '' }
    });
    const onSubmitSearch = data => {
        navigate(`/search/${data.search}`);
    };
    return (
        <MainLayout>
            <div className="pb-[50px] md:px-[200px]">
                <h1 className="flex justify-center py-14 text-center text-xl font-bold leading-10 md:text-2xl">
                    Cari Dokter Sesuai Kebutuhan Anda!
                </h1>
            </div>
            <form
                className="flex w-full items-center gap-0 px-20 lg:px-20"
                onSubmit={handleSubmit(onSubmitSearch)}
            >
                <TextField
                    control={control}
                    icon={MagnifyingGlassIcon}
                    name="search"
                    placeholder="Temukan Dokter"
                    resetField={() => resetField('search')}
                    className="w-full"
                    inputClassName="!py-2.5"
                    action={
                        <button
                            type="submit"
                            className="w-12 rounded border border-slate-300 bg-white py-1 text-sm transition-all hover:bg-slate-200"
                        >
                            Go
                        </button>
                    }
                />
            </form>
            <div className="h-screen">Search</div>
        </MainLayout>
    );
};

export default Search;
