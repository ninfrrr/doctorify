import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import MainLayout from '@/views/layouts/main-layout';

const History = () => {
    return (
        <MainLayout>
            <div className="h-screen">
                <h1 className="py-14 text-center text-xl font-bold leading-10 md:text-2xl">
                    Lihat Riwayat Appointment Anda
                </h1>
            </div>
        </MainLayout>
    );
};

export default History;
