import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <header className="w-full">
            <nav className="flex justify-between w-full px-4 py-3 items-center rounded-3xl border-solid border border-[#197686]">
                
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9.00002 3.5V20.5M2.46402 9.344C2.21602 9.344 1.98902 9.142 2.00002 8.879C2.06702 7.337 2.25502 6.333 2.78002 5.539C3.07948 5.08653 3.45503 4.68933 3.89002 4.365C5.05502 3.5 6.70002 3.5 9.99202 3.5H14.006C17.298 3.5 18.943 3.5 20.11 4.365C20.541 4.685 20.917 5.082 21.219 5.539C21.744 6.333 21.932 7.337 21.999 8.879C22.01 9.142 21.783 9.344 21.534 9.344C20.148 9.344 19.024 10.533 19.024 12C19.024 13.467 20.148 14.656 21.534 14.656C21.783 14.656 22.01 14.858 21.999 15.122C21.932 16.663 21.744 17.667 21.219 18.462C20.9195 18.9141 20.5439 19.311 20.109 19.635C18.943 20.5 17.298 20.5 14.006 20.5H9.99302C6.70102 20.5 5.05602 20.5 3.88902 19.635C3.45438 19.3106 3.07918 18.9134 2.78002 18.461C2.25502 17.667 2.06702 16.663 2.00002 15.121C1.98902 14.858 2.21602 14.656 2.46402 14.656C3.85002 14.656 4.97402 13.467 4.97402 12C4.97402 10.533 3.85002 9.344 2.46402 9.344Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Link href="/">
                        <Image src="/ticz.png" alt="logo" width={40} height={40} />
                    </Link>
                </div>

                
                <div>
                    <ul className="hidden md:flex space-x-4">
                        <li><Link href="/">Events</Link></li>
                        <li><Link href="/form">Form</Link></li>
                        <li><Link href="/ticket">My Tickets</Link></li>
                    </ul>
                </div>

                
                <Link href="/ticket">
                    <Image src="/btns.png" alt="My Tickets" width={110} height={110} />
                </Link>
            </nav>
        </header>
    );
};

export default NavBar;
