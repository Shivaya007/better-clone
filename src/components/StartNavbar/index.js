import Link from 'next/link';

export default function StartNavbar() {
    return (
        <nav className="bg-blue-800 shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Left side group */}
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="font-bold text-xl text-white">Different Navbar</Link>
                        <div className="flex space-x-6">
                            <Link href="/" className="text-white hover:text-blue-200">Back to Home</Link>
                            <Link href="/contact" className="text-white hover:text-blue-200">Contact</Link>
                        </div>
                    </div>
                    
                    {/* Right side */}
                    <div>
                        <Link href="/login" className="text-white hover:text-blue-200">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

