"use client";

export default function Start() {
    return (
        <div className="min-h-screen bg-white">
            {/* Top header - Made more compact on mobile */}
            <header className="sticky top-0 bg-white z-10 flex flex-col sm:flex-row justify-between items-center px-3 py-2 sm:px-8 sm:py-4 border-b">
                <div className="flex items-center mb-1 sm:mb-0">
                    {/* Add logo or other content here */}
                </div>
                <div className="flex items-center text-gray-900 font-semibold">
                    <span className="mr-2 text-base sm:text-lg">📞</span>
                    <span className="text-xs sm:text-sm md:text-base">Need help? Call (415) 523 8837</span>
                </div>
            </header>

            {/* Main content - Adjusted padding and spacing */}
            <main className="max-w-3xl mx-auto px-4 pt-6 sm:pt-8 md:pt-12 text-center">
                {/* Avatar - Responsive sizing */}
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-200">
                        {/* Add avatar image here */}
                    </div>
                </div>

                {/* Welcome text - Adjusted font sizes */}
                <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-2 sm:mb-3 md:mb-4">
                    Hi, I'm Betsy!
                </h1>
                <h2 className="text-lg sm:text-xl md:text-3xl mb-4 sm:mb-6 md:mb-8">
                    What can I help you with?
                </h2>

                {/* Options - Improved touch targets and spacing */}
                <div className="space-y-3 sm:space-y-4">
                    {[
                        { icon: "🏠", text: "Buying a home" },
                        { icon: "🔄", text: "Refinance my mortgage" },
                        { icon: "💰", text: "Get cash from my home" }
                    ].map((option, index) => (
                        <button
                            key={index}
                            className="w-full min-h-[3.5rem] p-3 sm:p-4 text-left border rounded-lg hover:border-green-600 
                                     active:bg-green-50 transition-colors duration-200 flex items-center 
                                     focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 flex items-center justify-center text-xl sm:text-2xl">
                                {option.icon}
                            </div>
                            <span className="text-sm sm:text-base">{option.text}</span>
                        </button>
                    ))}
                </div>

                {/* Stats - Improved mobile layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mt-8 sm:mt-12 md:mt-16 px-4">
                    <div className="text-center p-4 rounded-lg bg-gray-50">
                        <div className="text-xl sm:text-2xl md:text-4xl font-bold text-green-600">$100B</div>
                        <div className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">
                            home loans funded entirely online
                        </div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gray-50">
                        <div className="text-xl sm:text-2xl md:text-4xl font-bold text-green-600">400K</div>
                        <div className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">
                            Customers who chose a Better Mortgage
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}