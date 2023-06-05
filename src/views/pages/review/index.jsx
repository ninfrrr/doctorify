import MainLayout from '@/views/layouts/main-layout';
import Button from '@/views/elements/button';

const Review = () => {
    return (
        <MainLayout>
                <h1 className="flex justify-center pt-4 mt-5 text-center text-xl font-bold leading-10 md:text-2xl">
                    Review Doctor
                </h1>
            <div className="lg:px-[100px] xl:px-[150px] pt-1">
                <div className="flex flex-col items-center md:justify-between lg:flex-row">
                    <form className="mb-40 lg:w-[550px] xl:w-[800px] mt-1">
                        <h1 className="py-5 text-center text-xl font-bold text-cyan-500">
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
                    </form>
                    <form className="mb-40 rounded-md bg-textfield p-10 lg:w-[450px] xl:w-[700px]">
                        <h5 className="mb-8 text-center text-xl font-bold">
                            Silakan beri review dokter
                        </h5>
                        <div class="mb-6">
                            <textarea
                                type="subjek"
                                id="subjek"
                                class="overflow-hidden whitespace-nowrap sm:whitespace-normal block h-20 w-full rounded-md border bg-slate-200 p-2.5 text-sm dark:placeholder-black"
                                placeholder="Masukkan review anda disini"
                                required
                            ></textarea>
                        </div>
                        <Button
                            type="submit"
                            className="float-right w-1/4 rounded-md border text-sm font-semibold"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default Review;
