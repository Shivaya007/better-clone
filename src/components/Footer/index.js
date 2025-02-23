"use client";

export default function index() {
    return (
        <footer className="bg-white text-gray-700 px-6 md:px-20 py-10">
            {/* Social Icons */}
            <div className="flex justify-start space-x-4 text-2xl mb-6">
                <a href="#" className="hover:text-gray-900">🌐</a>
                <a href="#" className="hover:text-gray-900">📷</a>
                <a href="#" className="hover:text-gray-900">🔗</a>
            </div>

            {/* Footer Text */}
            <p className="text-sm">
                © 2025 Company Name. All rights reserved.
            </p>

            <p className="text-sm mt-4">
                Home lending products offered by Company. Equal Housing Lender. 
                <a href="#" className="text-blue-600 underline">Consumer Access</a>
            </p>

            <p className="text-sm mt-4">
                Company Real Estate services, headquarters at [Address]. 
                <a href="#" className="text-blue-600 underline">License Numbers</a>
            </p>

            {/* Legal Links */}
            <div className="mt-6 space-y-2">
                <a href="#" className="block text-blue-600 underline">Anti-Discrimination Notice</a>
                <a href="#" className="block text-blue-600 underline">Operating Procedures</a>
                <a href="#" className="block text-blue-600 underline">Consumer Protection Notice</a>
            </div>

            <p className="text-sm mt-4">
                Settlement Services, LLC. Headquarters at [Address].
            </p>

            <p className="text-sm mt-4">
                Homeowners insurance offered by Company Cover, LLC. 
                <a href="#" className="text-blue-600 underline">More Info</a>
            </p>

            <p className="text-sm mt-4">
                Company subsidiaries operate independently.
            </p>
        </footer>
    );
}
