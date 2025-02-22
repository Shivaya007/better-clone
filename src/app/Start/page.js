// src/app/start/page.

export default function Start() {
    return (
        <div className="min-h-screen bg-white">
            {/* Top header */}
            <header className="flex justify-between items-center px-8 py-4">
                <div className="flex items-center">
                   
                </div>
                <div className="flex items-center text-gray-700">
                    {/* Simple phone icon using HTML/CSS */}
                    <span className="mr-2">📞</span>
                    <span>Need help? Call (415) 523 8837</span>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-3xl mx-auto px-4 pt-8 text-center">
                {/* Avatar */}
                <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                       
                    </div>
                </div>

                {/* Welcome text */}
                <h1 className="text-4xl font-semibold mb-4">Hi, I'm Betsy!</h1>
                <h2 className="text-3xl mb-8">What can I help you with?</h2>

                {/* Options */}
                <div className="space-y-4">
                    <button className="w-full p-4 text-left border rounded-lg hover:border-green-600 flex items-center">
                        <div className="w-8 h-8 mr-3 flex items-center justify-center">
                            🏠
                        </div>
                        Buying a home
                    </button>

                    <button className="w-full p-4 text-left border rounded-lg hover:border-green-600 flex items-center">
                        <div className="w-8 h-8 mr-3 flex items-center justify-center">
                            🔄
                        </div>
                        Refinance my mortgage
                    </button>

                    <button className="w-full p-4 text-left border rounded-lg hover:border-green-600 flex items-center">
                        <div className="w-8 h-8 mr-3 flex items-center justify-center">
                            💰
                        </div>
                        Get cash from my home
                    </button>
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-24 mt-16">
                    <div>
                        <div className="text-4xl font-bold">$100B</div>
                        <div className="text-gray-600">home loans funded entirely online</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold">400K</div>
                        <div className="text-gray-600">Customers who chose a Better Mortgage</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
              
