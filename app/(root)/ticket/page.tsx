import Ticket from '@/components/Ticket';

const Page = () => {
  return (
    <div className="w-full max-w-[700px] h-auto p-6 md:p-12 bg-[#041e22] rounded-3xl border border-[#0e464f] flex flex-col justify-center items-center gap-8 mx-auto">
      
      {/* Step Progress & Header */}
      <div className="w-full flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl md:text-[32px] font-normal font-['JejuMyeongjo']">
            Ready
          </h1>
          <p className="text-neutral-50 text-sm md:text-base font-normal font-['Roboto'] leading-normal">
            Step 3/3
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full">
          <svg
            width="100%" 
            height="5" 
            viewBox="0 0 604 5" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5028_403)">
              <path d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H602C603.105 0.5 604 1.39543 604 2.5C604 3.60457 603.105 4.5 602 4.5H2.00001C0.895441 4.5 0 3.60457 0 2.5Z" fill="#0E464F"/>
              <path d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H230C231.105 0.5 232 1.39543 232 2.5C232 3.60457 231.105 4.5 230 4.5H2C0.895428 4.5 0 3.60457 0 2.5Z" fill="#24A0B5"/>
            </g>
            <defs>
              <clipPath id="clip0_5028_403">
                <path d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H602C603.105 0.5 604 1.39543 604 2.5C604 3.60457 603.105 4.5 602 4.5H2.00001C0.895441 4.5 0 3.60457 0 2.5Z" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <Ticket />
    </div>
  );
};

export default Page;