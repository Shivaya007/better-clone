import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green shadow-md fixed w-full top-0 z-50">
    <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
            {/* Left side group */}
            <div className="flex items-center space-x-8">
                <Link href="/" className="font-bold text-xl">Better Clone</Link>
                <div className="flex space-x-6">
                    <Link href="/" className="hover:text-green-600">Home</Link>
                    <Link href="/About-us" className="hover:text-green-600">About Us</Link>
                    <Link href="/mortage-calculator" className="hover:text-green-600">Calculator</Link>
                </div>
            </div>
            
            {/* Right side - Get Started */}
            <div>
                <Link href="/Start" className="hover:text-green-600">Get Started</Link>
            </div>
        </div>
    </div>
</nav>
  );
}