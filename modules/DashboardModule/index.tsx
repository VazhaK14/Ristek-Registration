import Navbar from "@/components/elements/Navbar";
import Countdown from "@/components/elements/Countdown";
import TOCard from "./elements/TOCard";
import Footer from "@/components/elements/Footer";
import Link from "next/link";

export default function Dashboard() {
  const tryoutData = {
    ongoing: [{ id: 7, calendar: "28 Feb 2025 - 5 Maret 2025" }],
    available: [
      { id: 12, calendar: "28 Feb 2025 - 5 Maret 2025" },
      { id: 11, calendar: "28 Feb 2025 - 5 Maret 2025" },
      { id: 10, calendar: "28 Feb 2025 - 5 Maret 2025" },
      { id: 9, calendar: "28 Feb 2025 - 5 Maret 2025" },
      { id: 8, calendar: "28 Feb 2025 - 5 Maret 2025" },
      { id: 7, calendar: "28 Feb 2025 - 5 Maret 2025" },
      { id: 6, calendar: "28 Feb 2025 - 5 Maret 2025" },
      { id: 5, calendar: "28 Feb 2025 - 5 Maret 2025" },
      { id: 4, calendar: "28 Feb 2025 - 5 Maret 2025" },
      { id: 3, calendar: "28 Feb 2025 - 5 Maret 2025" },
      { id: 2, calendar: "28 Feb 2025 - 5 Maret 2025" },
      { id: 1, calendar: "28 Feb 2025 - 5 Maret 2025" },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="p-3 px-5 lg:px-72  flex border-b-1 justify-between">
        <div className="flex items-center">
          <img
            src="/profile-pic.jpg"
            alt="Profile"
            className="rounded-full mr-6 w-24 h-24"
          />
          <p className="text-2xl font-bold dark:text-white">Vazha Khayri</p>
        </div>
        <div className="flex flex-col items-center">
          <p>"Kamu pasti bisa!"</p>
          <Countdown
            targetDate={new Date("2025-04-22T00:00:00+0700")}
            displayDate
            classNameType="text-lg dark:text-white "
            classNameBlock="w-16 h-16"
          />
        </div>
      </div>

      <div className="p-5">
        <p className="font-bold text-xl mb-5">Try Out Berlangsung</p>
        <div className="flex flex-row gap-3">
          {tryoutData.ongoing.map((tryout) => (
            <TOCard
              key={tryout.id}
              numTO={tryout.id}
              calendarTO={tryout.calendar}
            />
          ))}
        </div>
      </div>

      <div className="p-5">
        <p className="font-bold text-xl mb-5">Try Out Tersedia</p>
        <div className="md:flex md:justify-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3  sm:gap-x-2 sm:gap-y-3 md:gap-y-5 md:gap-x-5   justify-center">
            <div className="w-64 h-64 -translate-x-24 absolute -z-5 rounded-full bg-blue-200 blur-xl duration-5000 animate-pulse" />
            {tryoutData.available.map((tryout) => (
              <TOCard
                key={tryout.id}
                numTO={tryout.id}
                calendarTO={tryout.calendar}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
