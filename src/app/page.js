import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <section className="hero bg-green-800 py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center relative">
          <h1 className="text-5xl text-green-300 font-bold leading-tight">
            <span>Mortgages</span> <br />
            <span className="text-white">made simple</span>
          </h1>
          <p className="text-xl text-white mt-4">
            Get a mortgage with lower rates, lower fees, and online convenience
          </p>
          <div className="w-full flex justify-start mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg ml-4">
            <Link href="/Start" className="hover:text-green-600">Get Started</Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}



