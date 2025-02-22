"use client";

export default function Start() {
    return (
        <div className="min-h-screen bg-white">
            {/* Top header */}
            <header className="flex flex-col md:flex-row justify-between items-center px-4 py-3 md:px-8 md:py-4">
                <div className="flex items-center mb-2 md:mb-0"></div>
                <div className="flex items-center text-gray-900 font-semibold text-sm md:text-base">
                    <span className="mr-2">📞</span>
                    <span className="text-xs md:text-base">Need help? Call (415) 523 8837</span>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-3xl mx-auto px-3 md:px-4 pt-4 md:pt-8 text-center">
                {/* Avatar */}
                <div className="flex justify-center mb-4 md:mb-8">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden"></div>
                </div>

                {/* Welcome text */}
                <h1 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">Hi, I'm Betsy!</h1>
                <h2 className="text-xl md:text-3xl mb-6 md:mb-8">What can I help you with?</h2>

                {/* Options */}
                <div className="space-y-3">
                    <button className="w-full p-3 md:p-4 text-left border rounded-lg hover:border-green-600 flex items-center text-sm md:text-base">
                        <div className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 flex items-center justify-center">
                            🏠
                        </div>
                        <span className="text-sm md:text-base">Buying a home</span>
                    </button>

                    <button className="w-full p-3 md:p-4 text-left border rounded-lg hover:border-green-600 flex items-center text-sm md:text-base">
                        <div className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 flex items-center justify-center">
                            🔄
                        </div>
                        <span className="text-sm md:text-base">Refinance my mortgage</span>
                    </button>

                    <button className="w-full p-3 md:p-4 text-left border rounded-lg hover:border-green-600 flex items-center text-sm md:text-base">
                        <div className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 flex items-center justify-center">
                            💰
                        </div>
                        <span className="text-sm md:text-base">Get cash from my home</span>
                    </button>
                </div>

                {/* Stats */}
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24 mt-10 md:mt-16">
                    <div className="text-center">
                        <div className="text-2xl md:text-4xl font-bold">$100B</div>
                        <div className="text-gray-600 text-xs md:text-base mt-1">home loans funded entirely online</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-4xl font-bold">400K</div>
                        <div className="text-gray-600 text-xs md:text-base mt-1">Customers who chose a Better Mortgage</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
