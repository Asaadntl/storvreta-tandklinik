'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <img src="/images/logo.png" alt="Logo" className="w-8" />
                </Link>

                {/* Mobilmenyknapp */}
                <button onClick={() => setOpen(!open)} className="md:hidden block">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Meny */}
                <ul className={`md:flex space-x-4 items-center ${open ? 'block' : 'hidden'}`}>
                    <li><Link href="/" className="text-gray-800 hover:text-blue-600">Hem</Link></li>
                    <li><Link href="/akut" className="text-gray-800 hover:text-blue-600">Akut</Link></li>
                    <li><Link href="/behandlingar" className="text-gray-800 hover:text-blue-600">Våra behandlingar</Link></li>
                    <li><Link href="/patientinformation" className="text-gray-800 hover:text-blue-600">Patientinformation</Link></li>
                    <li><Link href="/patientfall" className="text-gray-800 hover:text-blue-600">Patientfall</Link></li>
                    <li><Link href="/klinik" className="text-gray-800 hover:text-blue-600">Om vår klinik</Link></li>
                    <li><Link href="/kontakt" className="text-gray-800 hover:text-blue-600">Kontakt</Link></li>
                    <li>
                        <a
                            href="https://bokatid.frenda.se/100076"
                            target="_blank"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Boka tid
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}
