import MainLayout from '@/views/layouts/main-layout';
import Button from '@/views/elements/button';

const Review = () => {
    return (
        <MainLayout>
            <div className="pb-[50px] md:px-[200px]">
                <h1 className="flex justify-center py-14 text-center text-xl font-bold leading-10 md:text-2xl">
                    Review Doctor
                </h1>
            </div>
            <div className="lg:px-[100px] xl:px-[150px]">
                <div className="flex h-screen flex-col items-center md:justify-between lg:flex-row">
                    <form className="mb-10 lg:w-[550px] xl:w-[800px]">
                        <h1 className=" py-5 text-center text-xl font-bold text-cyan-500">
                            Dr.XXXXXXX S.POK
                        </h1>
                        <img
                            src="/doctor2.png"
                            className="px-40"
                            alt="image doctor"
                        ></img>
                        <h1 className=" py-5 text-center text-lg font-semibold">
                            Spesialis XXXXXXXXXXXX
                        </h1>
                    </form>
                    <form className="bg-textfield p-10 lg:w-[450px] xl:w-[700px]">
                        <h5 className="mb-8 text-center text-xl font-bold">
                            Silahkan beri review dokter
                        </h5>
                        <div class="mb-6">
                            <input
                                type="subjek"
                                id="subjek"
                                class=" sm-light block h-20 w-full whitespace-normal rounded-md border bg-slate-200 bg-slate-200 p-2.5 text-sm dark:placeholder-black"
                                placeholder="Masukkan review anda disini"
                                required
                            ></input>
                        </div>
                        <Button
                            type="submit"
                            className="float-right w-1/4 rounded-none text-sm font-semibold"
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
