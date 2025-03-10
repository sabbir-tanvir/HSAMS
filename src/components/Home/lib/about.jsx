import { Hospital } from 'lucide-react';
import '../../../styles/about.css'


export function About() {
  return (
    <section id="about-us" className=" relative isolate overflow-hidden flex items-center justify-center p-4 sm:p-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] h-screen">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"> </div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"> </div>
      <div className="absolute top-5 left-3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute top-5 right-3  w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="text-center overflow-visible bg-white rounded-2xl shadow-xl h-90 p-4  relative z-10 transition-transform duration-300 hover:scale-105">
        <div className="absolute top-5 left-8 text-purple-500">
          <Hospital size={60} />
        </div>

        <div className="absolute top-5 right-8 text-purple-500">
          <Hospital size={60} />
        </div >
        <h2 className="SMN_effect-12 text-2xl sm:text-3xl pb-1 ">
          <span data-hover="About">About</span>
          </h2>

        <div className="pt-10 sm:pt-16 md:pt-12">
          <p className="mb-2 font-semibold text-gray-900 text-base sm:text-xl/9">Welcome to our hospital seat finder website. We are dedicated to providing the best healthcare services to our community.</p>
          <p className="mb-2 font-semibold text-gray-900 text-base sm:text-xl/9">Our team of experienced professionals is here to ensure you receive the highest quality care and find available seats quickly and efficiently.</p>
          <p className="mb-2 font-semibold text-gray-900 text-base sm:text-xl/9">Thank you for choosing our hospital seat finder for your healthcare needs.</p>
        </div>
      </div>
    </section>
  );
};



