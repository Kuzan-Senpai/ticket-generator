import TicketSelection from "@/components/TicketSelection"


export default function Home() {
        return (
        <div className="w-full max-w-[90%] sm:max-w-[700px] min-h-auto p-4 sm:p-8 bg-[#041e22] rounded-[20px] sm:rounded-[40px] border border-[#0e464f] flex flex-col justify-center items-center gap-3 sm:gap-4 ">
        
            <div className="w-full flex flex-col gap-2 sm:gap-3">
            <div className="flex justify-between items-center">
                <h2 className="text-white text-2xl sm:text-3xl font-['JejuMyeongjo']">Ticket Selection</h2>
                <span className="text-neutral-50 text-sm sm:text-base font-['Roboto']">Step 1/3</span>
            </div>
            
            <div className="w-full">
                <svg className="w-full h-1 sm:h-2" viewBox="0 0 604 4" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2C0 0.895431 0.895431 0 2 0H602C603.105 0 604 0.895431 604 2C604 3.10457 603.105 4 602 4H2.00001C0.895441 4 0 3.10457 0 2Z" fill="#0E464F"/>
                <path d="M0 2C0 0.895431 0.895431 0 2 0H230C231.105 0 232 0.895431 232 2C232 3.10457 231.105 4 230 4H2C0.895428 4 0 3.10457 0 2Z" fill="#24A0B5"/>
                </svg>
            </div>
            </div>
    
            <div className="w-full p-4 sm:p-6 bg-[#08252b] rounded-[16px] sm:rounded-[24px] border border-[#0e464e] flex flex-col gap-6">
            <div className="w-full p-4 sm:p-6 bg-[#07363e] rounded-2xl border border-[#07363e] text-center text-white">
                <h1 className="text-3xl sm:text-[56px] font-road-rage leading-tight">Techember Fest ’25</h1>
                <p className="text-sm sm:text-base font-roboto">Join us for an unforgettable experience at HNG!</p>
                <p className="text-sm sm:text-base font-roboto">Secure your spot now.</p>
                <div className="flex justify-center gap-2 text-sm sm:text-base">
                <span>📍 HNG</span>
                <span>|</span>
                <span>March 15, 2025 | 7:00 PM</span>
                </div>
            </div>
    
            <div className="w-full">
                <svg className="w-full h-1 sm:h-2" viewBox="0 0 556 4" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#07373F"/>
                </svg>
            </div>
    
            <TicketSelection />
            </div>
        </div>
        );
    }
