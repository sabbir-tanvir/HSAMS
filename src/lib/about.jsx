
export function About() {
    return (
        <section id="about-us" className=" relative isolate overflow-hidden flex items-center justify-center p-8 rounded-lg shadow-md h-screen">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"> </div>
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"> </div>

            <div className="text-center overflow-visible text-blue-600">
                <h2 className="text-2xl  font-bold mb-4">About Us</h2>
                <p className="mb-2 font-semibold text-gray-900 sm:text-xl/9">Welcome to our hospital seat finder website. We are dedicated to providing the best healthcare services to our community.</p>
                <p className="mb-2 font-semibold text-gray-900 sm:text-xl/9">Our team of experienced professionals is here to ensure you receive the highest quality care and find available seats quickly and efficiently.</p>
                <p className=" mb-2 font-semibold text-gray-900 sm:text-xl/9">Thank you for choosing our hospital seat finder for your healthcare needs.</p>
            </div>
        </section>
    );
};



