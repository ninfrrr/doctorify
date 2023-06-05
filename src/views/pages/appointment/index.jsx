import MainLayout from '@/views/layouts/main-layout';
import Button from '@/views/elements/button';

const Appointment = () => {
    return (
        <MainLayout>
            <div className="pb-[50px] md:px-[200px]">
                <h1 className="flex justify-center pt-4 mt-5 text-center text-xl font-bold leading-10 md:text-2xl">
                    Isi Form Appointment Anda
                </h1>
            </div>
            <div className="lg:px-[100px] xl:px-[150px]">
                <div className="flex h-screen flex-col md:justify-between lg:flex-row">
                    <form className="mb-10 bg-slate-200 lg:w-[450px] xl:w-[700px]">
                        <h1 className=" py-5 text-center text-xl font-bold text-cyan-500">
                            Dr.XXXXXXX S.POK
                        </h1>
                        <img
                            src="/doctor2.png"
                            className="px-40"
                            alt="image doctor"
                        ></img>
                        <h1 className="py-5 text-center text-lg font-semibold">
                            Spesialis XXXXXXXXXXXX
                        </h1>
                        <div className="border-hitam border-b-2 p-5">
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <div className="border-hitam border-b-2 p-5">
                            <h5 className="text-hijau mb-1">Harga</h5>
                            <p>Review dokter blablabla</p>
                        </div>
                    </form>
                    <form className="h-screen bg-slate-200 p-20 lg:w-[450px] xl:w-[700px]">
                        <h5 className="mb-8 text-center text-xl font-bold">
                            Buat Janji Temu
                        </h5>
                        <div class="mb-6">
                            <label
                                for="subjek"
                                class="text-md mb-2 block font-semibold text-gray-900 rounded-md"
                            >
                                Subjek
                            </label>
                            <input
                                type="subjek"
                                id="subjek"
                                class="sm-light block w-full rounded-md border bg-textfield bg-textfield p-2.5 text-sm text-white text-white  dark:placeholder-slate-500"
                                placeholder="Masukkan subjek atau tipe janji temu"
                                required
                            ></input>
                        </div>
                        <div class="mb-6">
                            <label
                                for="subjek"
                                class="text-md mb-2 block font-semibold text-gray-900"
                            >
                                Deskripsi
                            </label>
                            <input
                                type="subjek"
                                id="subjek"
                                class="sm-light block w-full rounded-md border bg-textfield bg-textfield p-2.5 text-sm text-white text-white  dark:placeholder-slate-500"
                                placeholder="Jelaskan detail keluhan kesehatan anda"
                                required
                            ></input>
                        </div>
                        <div class="mb-6">
                            <label
                                for="subjek"
                                class="text-md mb-2 block font-semibold text-gray-900"
                            >
                                Pilih Waktu
                            </label>
                            <input
                                type="subjek"
                                id="subjek"
                                class="sm-light block w-full rounded-md border bg-textfield bg-textfield p-2.5 text-sm text-white text-white  dark:placeholder-slate-500"
                                placeholder="Pilih tanggal dan waktu janji temu anda"
                                required
                            ></input>
                        </div>
                        <div className="mb-8 flex justify-between">
                            <label className="text-md font-semibold">
                                Harga
                            </label>
                            <label className="text-md font-semibold text-slate-700">
                                Rp 150.000
                            </label>
                        </div>
                        <Button
                            type="submit"
                            className="w-1/2 rounded-md text-sm font-semibold"
                        >
                            Buat Janji Temu
                        </Button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default Appointment;
