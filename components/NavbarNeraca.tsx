import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Brand */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-serif font-bold text-lg">N</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight">NERACA<span className="text-primary">UMMAH</span></span>
                    </Link>
                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                        <Link href="/#zakat" className="hover:text-primary transition-colors">Zakat Watch</Link>
                        <Link href="/#social-finance" className="hover:text-primary transition-colors">Social Finance Pulse</Link>
                        <Link href="/#finance" className="hover:text-primary transition-colors">Islamic Finance</Link>
                        <Link href="/#indeks" className="hover:text-primary transition-colors">Indeks Umat</Link>
                    </div>
                    {/* Action */}
                    <div className="hidden md:block">
                        <Link href="/kirim-data" className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">
                            Kirim Data
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
