import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/elements/Footer";
import SubTO from "./elements/SubTO";

export default function TODetails() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center p-5">
        <div className="rounded-sm w-screen border-1 px-8 py-2 flex flex-col ">
          <p className="text-2xl font-bold text-center">Detail Tryout</p>

          <div className="space-y-2 pb-4">
            <div className="flex text-sm justify-between border-b-1">
              <p>Total waktu</p>
              <p>120 menit</p>
            </div>
            <div className="flex text-sm justify-between border-b-1">
              <p>Jumlah Soal</p>
              <p>169 soal</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col ">
              <div className="flex flex-row items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2" />
                <p>TPS</p>
              </div>
              <div className="flex flex-col ">
                <div className="w-1 h-4 translate-y-2 rounded-t-md bg-gray-200 border-2 ml-[6px]" />
                <SubTO subtest="Penalaran Umum" time={30} filled={0} />
                <SubTO
                  subtest="Pengetahuan dan Pemahaman Umum"
                  time={30}
                  filled={0}
                />
                <SubTO
                  subtest="Pemahaman Baca dan Menulis"
                  time={30}
                  filled={0}
                />
                <SubTO
                  subtest="Pengetahuan Kuantitatif"
                  time={30}
                  filled={0}
                  isLast={true}
                />
                <div className="w-1 h-4 -translate-y-2 rounded-b-md bg-gray-200 border-2 ml-[6px]" />
              </div>
            </div>

            <div className="flex flex-col ">
              <div className="flex flex-row items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2" />
                <p>Literasi</p>
              </div>
              <div className="flex flex-col ">
                <div className="w-1 h-4 translate-y-2 rounded-t-md bg-gray-200 border-2 ml-[6px]" />
                <SubTO
                  subtest="Literasi Bahasa Indonesia"
                  time={30}
                  filled={0}
                />
                <SubTO subtest="Literasi Bahasa Inggris" time={30} filled={0} />
                <SubTO
                  subtest="Penalaran Matematika"
                  time={30}
                  filled={0}
                  isLast={true}
                />
                <div className="w-1 h-4 -translate-y-2 rounded-b-md bg-gray-200 border-2 ml-[6px]" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-blue-500 text-white rounded-md w-fit px-3 py-2 font-semibold">
              Mulai Tryout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
