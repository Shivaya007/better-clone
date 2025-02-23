
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen pt-8 sm:pt-12 md:pt-16">
      <section className="hero bg-green-800 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-green-300 font-bold leading-tight">
            <span>Mortgages</span> <br />
            <span className="text-white">made simple</span>
          </h1>
          <p className="text-lg sm:text-xl text-white mt-3 sm:mt-4 px-4 sm:px-6 md:px-0">
            Get a mortgage with lower rates, lower fees, and online convenience
          </p>
          <div className="w-full flex justify-center sm:justify-start mt-4 sm:mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg">
              <Link href="/Start" className="hover:text-green-300 transition-colors duration-200">
                Get Started
              </Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}



