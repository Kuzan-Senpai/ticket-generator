"use client"

import { useState } from "react";
import { Select } from "antd";
import Link from "next/link";

interface Ticket {
    type: string;
    price: string;
}

const { Option } = Select;

const tickets: Ticket[] = [
    { type: "Regular Access", price: "Free" },
    { type: "VIP Access", price: "$50" },
    { type: "VVIP Access", price: "$150" },
];

const TicketSelection = () => {
    const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
    const [ticketCount, setTicketCount] = useState<number>(1);

    const handleNextClick = () => {
        if (selectedTicket) {
            localStorage.setItem(
                "ticketData",
                JSON.stringify({ ticketType: selectedTicket, ticketCount })
            )
        }
    }


    return (
        <div className="w-full flex flex-col gap-2">
            <p className="text-neutral-50 text-sm sm:text-base font-['Roboto']">Select Ticket Type:</p>
            <div className="w-full p-4 bg-[#042127] rounded-2xl border border-[#07363e] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {tickets.map((ticket, index) => (
                    <button 
                        key={index} 
                        className={`w-full rounded-xl border border-[#07363e] ${selectedTicket === ticket.type ? 'bg-[#0e464e]' : ''}`} 
                        onClick={() => setSelectedTicket(ticket.type)}
                    >

                    <div className="w-full h-full p-3 space-y-3 border rounded-xl border-[#197686]">
                        <div className="text-white text-left text-sm sm:text-xl font-semibold">{ticket.price}</div>
                            <div className="flex flex-col items-start justify-start">
                                <p className="text-neutral-50 text-left text-nowrap  text-sm sm:text-base font-['Roboto'] uppercase">{ticket.type}</p>
                                <p className="text-neutral-50 text-xs sm:text-sm">20/52</p>
                            </div>
                        </div>
                    </button>
                ))}
                
            </div>

            <div className="w-full pt-10">
                <p className="text-neutral-50 text-sm sm:text-base font-['Roboto'] pb-2">Number of Tickets:</p>
                <Select
                    value={ticketCount} 
                    onChange={(value) => setTicketCount(value)}
                    style={{width: '100%'}}
                    className="custom-select !h-12 text-white"
                >
                    {[1, 2, 3, 4, 5].map((num) => (
                        <Option key={num} value={num}>
                            {num}
                        </Option>
                    ))}
                </Select>
            </div>

            <div className="flex flex-col sm:flex-row gap-7 py-8">

            <div className="flex-1">
                <Link href="/">
                    <button
                        className={`w-full px-6 py-3 rounded-lg border border-[#23a0b5] ${
                            selectedTicket ? "text-white hover:bg-[#23a0b5] sm:hover:hover:bg-[#23a0b5]" : "text-[#23a0b5] hover:bg-[#23a0b5] hover:text-white"
                        }`}
                        disabled={!selectedTicket}
                    >
                        Cancle
                    </button>
                </Link>
            </div>

            <div className="flex-1">
                <Link href="/form">
                    <button
                        className={`w-full px-6 py-3 rounded-lg border border-[#23a0b5] ${
                            selectedTicket ? " text-white hover:bg-[#23a0b5] sm:hover:hover:bg-[#23a0b5]" : "text-[#23a0b5] hover:bg-[#23a0b5] hover:text-white"
                        }`}
                        disabled={!selectedTicket}
                        onClick={handleNextClick}
                    >
                        Next
                    </button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default TicketSelection;