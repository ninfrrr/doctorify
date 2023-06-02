import MainLayout from '@/views/layouts/main-layout';

const About_Us = () => {
    return (
        <MainLayout>
            <section className="about">
                <div className="main">
                <div className="about-text bg-white text-black p-4 text-center md:text-justify">
                <h1 className="text-4xl font-bold mb-5">About Us</h1>
                <h5 className="text-lg font-semibold mb-5">Kelompok DocDoc</h5>
                <p className="mb-5">Kami kelompok DocDoc ...</p>
                </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default About_Us;
