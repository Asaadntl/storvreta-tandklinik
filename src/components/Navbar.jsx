'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Semester-banner */}
      <div className="w-full h-10 bg-red-500 text-black text-center text-sm flex items-center justify-center z-50 fixed top-0 left-0">
        Vi har semesterstängt f.o.m. 17 juli till 3 augusti.
        <a
          href="https://bokatid.frenda.se/100076"
          target="_blank"
          className="ml-2 bg-white text-red-600 px-3 py-1 rounded font-semibold hover:bg-gray-100 transition"
        >
          Boka tid online
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 w-full z-40 bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <img src="/images/Logo.png" alt="Logo" className="w-8" />
          </Link>

          {/* Mobilmenyknapp */}
          <button onClick={() => setOpen(!open)} className="md:hidden block">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Meny */}
          <ul
            className={`${
              open ? 'flex' : 'hidden'
            } md:flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0 mt-4 md:mt-0 items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow md:shadow-none`}
          >
            <li>
              <Link href="/" onClick={closeMenu} className="text-gray-800 hover:text-blue-600">
                Hem
              </Link>
            </li>
            <li>
              <Link href="/akut" onClick={closeMenu} className="text-gray-800 hover:text-blue-600">
                Akut
              </Link>
            </li>
            <li>
              <Link href="/behandlingar" onClick={closeMenu} className="text-gray-800 hover:text-blue-600">
                Våra behandlingar
              </Link>
            </li>
            <li>
              <Link href="/patientinformation" onClick={closeMenu} className="text-gray-800 hover:text-blue-600">
                Patientinformation
              </Link>
            </li>
            <li>
              <Link href="/patientfall" onClick={closeMenu} className="text-gray-800 hover:text-blue-600">
                Patientfall
              </Link>
            </li>
            <li>
              <Link href="/klinik" onClick={closeMenu} className="text-gray-800 hover:text-blue-600">
                Om vår klinik
              </Link>
            </li>
            <li>
              <Link href="/kontakt" onClick={closeMenu} className="text-gray-800 hover:text-blue-600">
                Kontakt
              </Link>
            </li>
            {/* "Boka tid" syns i alla lägen */}
            <li>
              <a
                href="https://bokatid.frenda.se/100076"
                target="_blank"
                onClick={closeMenu}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Boka tid
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
