import LandingLayout from '@/views/layouts/landing-layout';
import Button from '@/views/elements/button';
import doctor_pict from '@/assets/images/doctor_pict.png';

const LandingPage = () => {
    return (
        <LandingLayout>
            <div className="bg-hijau-muda z-10 flex h-full flex-col-reverse items-center px-[50px] py-[50px] md:grid md:h-[100vh] md:grid-cols-2 md:gap-[100px] md:px-[100px] lg:gap-[200px] xl:px-[200px] xl:pb-[100px]">
                <div className="text-hitam justify-center text-center md:text-justify">
                    <p className="text-3xl font-bold leading-normal lg:text-4xl lg:leading-normal">
                        Selalu Melayani Anda <br /> Dengan Hati
                    </p>
                    <p className="my-5 lg:leading-normal">
                        Cari dokter terbaik yang cocok untuk Anda dan dapatkan
                        konsultasi terbaik.
                    </p>
                    <Button>Layanan Kami</Button>
                </div>
                <img
                    data-aos="fade-left"
                    src={doctor_pict}
                    className="xl:pt-30 p-5 pt-0 md:p-0 xl:pb-10 xl:pr-0"
                    alt=""
                ></img>
            </div>
            <section
                className="mx flex h-full flex-col items-center justify-center bg-white py-[100px] lg:h-[100vh] lg:py-0"
                name="how-it-works"
            >
                <p
                    data-aos="fade-up"
                    className="font-poppins text-hitam mb-12 px-5 text-center text-2xl font-bold md:text-3xl xl:text-4xl"
                >
                    4 Langkah Mudah Menggunakan Doc.In
                </p>
                <div
                    data-aos="fade-up"
                    className="grid grid-cols-1 justify-center gap-y-12 text-center md:mt-10 md:grid-cols-2 md:gap-x-20 xl:flex"
                >
                    <div className="flex flex-col items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-20 w-20 bg-cyan-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                            />
                        </svg>

                        <p className="text-hijau font-poppins mt-5 text-lg font-bold">
                            1. Masuk ke Akun Anda
                        </p>
                        <p className="text-hitam font-poppins mt-3 w-[280px] text-base font-[500] md:mt-0">
                            Masuk atau buat akun dengan email agar dapat
                            mengakses fitur Doc.In secara lengkap.
                        </p>
                    </div>
                    <div className="mt-0 flex flex-col items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-20 w-20 bg-cyan-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>

                        <p className="text-hijau font-poppins mt-5 text-lg font-bold">
                            2. Cari Dokter yang Sesuai
                        </p>
                        <p className="text-hitam font-poppins mt-3 w-[280px] text-base font-[500] md:mt-0">
                            Cari dokter dengan spesialisasi sesuai dengan
                            kebutuhan Anda melalui fitur Cari Dokter.
                        </p>
                    </div>
                    <div className="mt-0 flex flex-col items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-20 w-20 bg-cyan-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                            />
                        </svg>

                        <p className="text-hijau font-poppins mt-5 text-lg font-bold">
                            3. Rencanakan Janji Temu
                        </p>
                        <p className="text-hitam font-poppins mt-3 w-[280px] text-base font-[500] md:mt-0">
                            Rencanakan janji temu dengan dokter pilihan Anda
                            melalui fitur Create Appointment.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-20 w-20 bg-cyan-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                            />
                        </svg>
                        <p className="text-hijau font-poppins mt-5 text-lg font-bold">
                            4. Isi Form Janji Temu
                        </p>
                        <p className="text-hitam font-poppins mt-3 w-[280px] text-base font-[500] md:mt-0">
                            Lengkapi formulir dan pantau respon terkait janji
                            temu Anda pada menu My Appointment.
                        </p>
                    </div>
                </div>
            </section>
            <div className="bg-hijau-muda z-10 flex h-full flex-col-reverse items-center px-[50px] py-[50px] md:grid md:h-[100vh] md:grid-cols-2 md:gap-[100px] md:px-[100px] lg:gap-[200px] xl:px-[200px] xl:pb-[100px]">
                <img
                    data-aos="fade-left"
                    src={doctor_pict}
                    className="xl:pt-30 p-5 pt-0 md:p-0 xl:pb-10 xl:pr-0"
                    alt=""
                ></img>
                <div className="text-hitam justify-center text-center md:text-justify">
                    <p className="text-3xl font-bold leading-normal lg:text-4xl lg:leading-normal">
                        Konsultasi ke dokter <br /> kapan dan dimana saja dengan
                        Doctorify
                    </p>
                    <p className="my-5 lg:leading-normal">
                        Dengan Docotorify anda bisa menemukan dokter spesialis
                        sesuai dengan kebutuhan anda dengan review dari pengguna
                        lainnya
                    </p>
                    <Button>Temukan Dokter</Button>
                </div>
            </div>
        </LandingLayout>
    );
};

export default LandingPage;
