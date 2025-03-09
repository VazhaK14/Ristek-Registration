import Link from "next/link";

export function calendarSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
}

export default function TOCard({ numTO, calendarTO }: TOCardProps) {
  return (
    <Link href="/tryout-detail">
      <div className="w-fit dark:border-white bg-[rgba(255,255,255,0.1)] h-fit flex flex-row border-1 rounded-md">
        <div>
          <div className="flex rounded-tl-md font-semibold text-white bg-blue-500/50 backdrop-blur-lg w-18 h-8 items-center justify-center">
            SNBT
          </div>
          <div className="text-center flex items-center justify-center text-5xl font-semibold mb-3">
            {numTO}
          </div>
        </div>
        <div className="px-3 items-start justify-center border-l-1 flex flex-col">
          <p className="font-bold md:text-lg sm:text-md">
            Try Out UTBK SNBT {numTO} 2025
          </p>
          <p className="text-gray-600 text-sm">195 menit - 160 soal</p>
          <div className="text-[12px] font-bold mt-1 flex flex-row border-1 gap-2 border-blue-300 text-blue-500 px-2 py-1 rounded-sm">
            {calendarSVG()}
            <p>{calendarTO}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface TOCardProps {
  readonly numTO: number;
  readonly calendarTO: string;
}
