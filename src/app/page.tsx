import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col  gap-3 justify-center h-screen align-middle items-center">
      <Link href="/dashboard">
        <button className="border-1 hover:bg-gray-700 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:text-white  font-bold text-5xl rounded-md px-4 py-2 cursor-pointer">
          Dashboard
        </button>
      </Link>
      <Link href="/tryout-detail">
        <button className="border-1 hover:bg-gray-700 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:text-white  font-bold text-5xl rounded-md px-4 py-2 cursor-pointer">
          Tryout Detail
        </button>
      </Link>
      <Link href="/create-tryout">
        <button className="border-1 hover:bg-gray-700 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:text-white  font-bold text-5xl rounded-md px-4 py-2 cursor-pointer">
          Create Tryout
        </button>
      </Link>
    </div>
  );
}
