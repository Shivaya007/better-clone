"use client";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-[#FAF8F4] px-4">
      
            <h3 className="text-green-700 text-lg md:text-xl font-semibold">Our mission</h3>

          
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 max-w-3xl">
                We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
            </h1>

            
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-5 md:p-6 mt-10">
                <p className="text-gray-900 font-semibold text-lg md:text-xl">
                    Want to continue with your pre-approval?
                </p>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                    You’ll be able to pick up right where you left off.
                </p>

              
                <div className="flex justify-center mt-4 space-x-3">
                    <button className="px-5 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100">
                        Not right now
                    </button>
                    <button className="px-5 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
                        Yes, continue
                    </button>
                </div>
            </div>
        </div>
    );
}
