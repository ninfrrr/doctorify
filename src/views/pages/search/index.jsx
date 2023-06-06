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
import { FindDoctor } from '@/views/components/find';
import { useEffect } from 'react';
import axios from 'axios';
import useActiveUser from '@/hooks/useActiveUser';

// const data = [
//     {
//         id: 1,
//         nama: 'Johnysins',
//         spesialisasi: 'Gizi',
//         harga: 250000,
//         imgdoctor:
//             'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
//     },
//     {
//         id: 2,
//         nama: 'Johnysins',
//         spesialisasi: 'Gigi',
//         harga: 250000,
//         imgdoctor:
//             'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
//     },
//     {
//         id: 3,
//         nama: 'Johnysins',
//         spesialisasi: 'Gizi',
//         harga: 250000,
//         imgdoctor:
//             'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
//     },
//     {
//         id: 4,
//         nama: 'Johnysins',
//         spesialisasi: 'Gizi',
//         harga: 250000,
//         imgdoctor:
//             'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
//     },
//     {
//         id: 5,
//         nama: 'Johnysins',
//         spesialisasi: 'Gizi',
//         harga: 250000,
//         imgdoctor:
//             'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
//     },
//     {
//         id: 6,
//         nama: 'Johnysins',
//         spesialisasi: 'Gizi',
//         harga: 250000,
//         imgdoctor:
//             'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
//     },
//     {
//         id: 7,
//         nama: 'Johnysins',
//         spesialisasi: 'Gizi',
//         harga: 250000,
//         imgdoctor:
//             'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
//     },
//     {
//         id: 8,
//         nama: 'Johnysins',
//         spesialisasi: 'Gizi',
//         harga: 250000,
//         imgdoctor:
//             'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
//     }
// ];

const Search = () => {
    const [isMobile, setMobile] = useState(true);
    const navigate = useNavigate();
    const { control, handleSubmit, resetField } = useForm({
        defaulValues: { search: '' }
    });
    const onSubmitSearch = data => {
        navigate(`/search/${data.search}`);
    };

    const { user, accessToken, tokenType } = useActiveUser();

    const [doctors, setDoctors] = useState([]);
    const [specialists, setSpecialists] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!accessToken || !tokenType) return;

        axios
            .get(import.meta.env.VITE_BACKEND_URL + 'specialist', {
                headers: {
                    Authorization: `${tokenType} ${accessToken}`
                }
            })
            .then(res => {
                console.log(res);
                setSpecialists([...res.data.result]);

                axios
                    .get(import.meta.env.VITE_BACKEND_URL + 'doctor', {
                        headers: {
                            Authorization: `${tokenType} ${accessToken}`
                        }
                    })
                    .then(res => {
                        console.log(res);
                        setDoctors([...res.data.result]);
                    })
                    .catch(err => {
                        console.error(err);
                    });

                // Get reviews from another URL using the token
                axios
                    .get(import.meta.env.VITE_BACKEND_URL + 'review' + '/all', {
                        headers: {
                            Authorization: `${tokenType} ${accessToken}`
                        }
                    })
                    .then(res => {
                        console.log(res);
                        setReviews([...res.data.result]);
                    })
                    .catch(err => {
                        console.error(err);
                    });
            })
            .catch(err => {
                console.error(err);
            });
    }, [accessToken, tokenType]);

    return (
        <MainLayout>
            <div className="pb-[5px] md:px-[200px]">
                <h1 className="mb-50 flex justify-center py-14 text-center text-xl font-bold leading-10 md:text-2xl">
                    Cari Dokter Sesuai Kebutuhan Anda!
                </h1>
            </div>
            <div className="overflow-hidden">
                <form
                    className="mb-10 flex w-full items-center gap-0 px-20 lg:px-20"
                    onSubmit={handleSubmit(onSubmitSearch)}
                >
                    <TextField
                        control={control}
                        icon={MagnifyingGlassIcon}
                        name="search"
                        placeholder="Temukan Dokter"
                        resetField={() => resetField('search')}
                        className="relative z-40 w-full"
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
            </div>
            <div className="mx-[20px] overflow-y-auto md:mx-0">
                {doctors?.map(doctor => {
                    const specialist = specialists.find(
                        s => s.id === doctor.specialist_id
                    );
                    const review = reviews.find(r => r.doctor_id === doctor.id);
                    return (
                        <FindDoctor
                            key={doctor.id}
                            id={doctor.id}
                            nama={doctor.name}
                            spesialisasi={specialist.name}
                            harga={doctor.price}
                            imgdoctor={doctor.photo}
                            reviewDoctor={reviews.verdict}
                        />
                    );
                })}
            </div>
        </MainLayout>
    );
};

export default Search;
