"use client"

import { Card } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Ticket = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        profilePictureUrl: '',
        about: '',
        selectedTicket: '',
        ticketCount: 0,
    });

    useEffect(() => {
        const profileData = localStorage.getItem("profileFormData");
        const ticketData = localStorage.getItem("ticketData");

        if (profileData || ticketData) {
            const parsedProfile = profileData ? JSON.parse(profileData) : {};
            const parsedTicket = ticketData ? JSON.parse(ticketData) : {};

            const mergedData = { ...parsedProfile, ...parsedTicket };
            setUserData(mergedData);

            // Clear localStorage after data is loaded
            localStorage.removeItem("profileFormData");
            localStorage.removeItem("ticketData");
        } else {
            console.warn("⚠️ No data found in localStorage.");
        }
    }, []);
    const handleDownload = () => {
        alert("Your ticket has been downloaded");
    };

    return (
        <div className="w-full flex flex-col items-center gap-6 text-center relative">
            <div className="w-full max-w-lg px-4">
                <h2 className="text-white text-xl md:text-3xl font-normal font-['Alatsi']">
                    Your Ticket is Booked!
                </h2>
                <p className="text-neutral-50 text-sm md:text-base font-normal font-['Roboto'] leading-normal">
                    Check your email for a copy or you can <span className="font-bold">download</span>
                </p>
            </div>

            <div className="relative w-[300px] h-[600px] flex flex-col justify-between items-center p-5">
                <Image src="/Subtract.png" alt="Ticket Background" fill priority quality={100} className="" />

                <div className='relative w-full h-[446px] rounded-2xl border border-[#23a0b5] backdrop-blur-sm z-10 p-3.5 flex flex-col items-center'>
                    <div className="text-center text-white text-xl font-bold font-['Road Rage'] leading-[34px]">Techember Fest ”25</div>
                    <p className="text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">📍 04 Rumens road, Ikoyi, Lagos</p>
                    <p className="text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">📅 March 15, 2025 | 7:00 PM</p>

                    <div className="w-[140px] h-[140px] rounded-xl border-4 border-[#23a0b5]/50 my-5">
                        {userData.profilePictureUrl ? (
                            <Image src={userData.profilePictureUrl} alt="Profile" width={500} height={500}  className="rounded-xl w-40 h-32 object-cover " />
                        ) : (
                            <p className="text-white text-xs">No Image Uploaded</p>
                        )}
                    </div>

                    <Card className="h-50 !bg-[#07333c] rounded-lg border !border-[#123d43] !text-white p-1">
                        <div className="grid grid-cols-2 gap-0 ">
                            <div className="h-[45px] p-1 border-r border-[#12464e] flex flex-col justify-center">
                                <p className="text-xs opacity-50 whitespace-normal py-1">Enter your name</p>
                                <p className="text-sm font-bold whitespace-normal py-1">{userData.name}</p>
                            </div>
                            <div className="h-[45px] py-1 flex flex-col justify-center text-wrap">
                                <p className="text-xs opacity-50 whitespace-normal py-1">Enter your email *</p>
                                <p className="text-sm font-bold whitespace-normal text-wrap">{userData.email}</p>
                            </div>

                            <div className="col-span-2 border-t border-[#12464e] py-1"></div>

                            <div className="h-[45px] p-1 border-r border-[#12464e] flex flex-col justify-center">
                                <p className="text-xs opacity-50 whitespace-normal py-1">Ticket Type:</p>
                                <p className="text-sm whitespace-normal py-1">{userData.ticketType}</p>
                            </div>
                            <div className="h-[45px] p-1 flex flex-col justify-center">
                                <p className="text-xs opacity-50 whitespace-normal py-1">Ticket for :</p>
                                <p className="text-sm whitespace-normal">{userData.ticketCount}</p>
                            </div>

                            <div className="col-span-2 border-t border-[#12464e] py-1"></div>

                            <div className="col-span-2 p-1 flex flex-col justify-center">
                                <p className="text-xs opacity-50 whitespace-normal">Special request?</p>
                                <p className="text-xs whitespace-normal">{userData.about}</p>
                            </div>

                        </div>
                    </Card>
                </div>

                <div className=' z-10 '>
                    <Image src="/Bar Code.png" alt="Barcode" width={236} height={68} className="" />
                </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-7 py-8">
                <Link href="/" className="flex-1">
                    <div>
                        <button
                            className="w-full px-6 py-3 rounded-lg border border-[#23a0b5] text-white hover:bg-[#23a0b5]"
                        >
                            Book another ticket
                        </button>
                    </div>
                </Link>

                <Link href="/ticket" className="flex-1">
                    <button
                        className="w-full px-6 py-3 rounded-lg border border-[#23a0b5] text-white hover:bg-[#23a0b5]"
                        onClick={handleDownload}
                    >
                        Download
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Ticket;