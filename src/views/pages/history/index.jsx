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
            <div class="grid grid-cols-2">
                <div class="bg-red-500">Bagian 1</div>
                <div class="bg-blue-500">Bagian 2</div>
            </div>
        </MainLayout>
    );
};

export default History;
