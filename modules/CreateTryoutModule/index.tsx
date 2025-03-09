import { useState } from "react";
import Footer from "@/components/elements/Footer";
import Navbar from "@/components/elements/Navbar";
import MultPopup from "./elements/CreatePopup";
import { calendarSVG } from "../../modules/DashboardModule/elements/TOCard";
import Link from "next/link";

// Define the Tryout interface
interface TryoutData {
  id: number;
  title: string;
  timePeriod: string;
  totalQuestions: number;
  totalDuration: number;
  description: string;
}

export default function CreateTryout() {
  const [title, setTitle] = useState("Judul Materi");
  const [multipleChoicePopup, setMultipleChoicePopup] = useState(false);
  const [fillTheBlankPopup, setFillTheBlankPopup] = useState(false);
  const [questions, setQuestions] = useState<{ text: string }[]>([]);
  const [tryouts, setTryouts] = useState<TryoutData[]>([]);

  const toggleMultipleChoicePopup = () => {
    setMultipleChoicePopup(!multipleChoicePopup);
  };

  const toggleFillTheBlankPopup = () => {
    setFillTheBlankPopup(!fillTheBlankPopup);
  };

  const addQuestion = (question: { text: string }) => {
    setQuestions([...questions, question]);
  };

  // Function to add a new tryout card when a tryout is created
  const addTryout = (formData: any) => {
    // Calculate total questions and duration
    const totalQuestions = formData.sections.reduce(
      (total: number, section: any) =>
        total + (parseInt(section.questionCount) || 0),
      0
    );

    const totalDuration = formData.sections.reduce(
      (total: number, section: any) =>
        total + (parseInt(section.duration) || 0),
      0
    );

    // Create a new tryout object
    const newTryout: TryoutData = {
      id: tryouts.length + 1,
      title: formData.title || "Untitled Tryout",
      timePeriod: formData.timePeriod || "Belum ditentukan",
      totalQuestions,
      totalDuration,
      description: formData.description || "",
    };

    // Add to tryouts array
    setTryouts([...tryouts, newTryout]);
  };

  const subMateri = [
    "Penalaran Umum",
    "Pengetahuan & Pemahaman Umum",
    "Pengetahuan Baca Menulis",
    "Pengetahuan Kuantitatif",
    "Literasi Bahasa Indonesia",
    "Literasi Bahasa Inggris",
    "Penalaran Matematika",
  ];

  // Render a TOCard for a tryout
  const renderTOCard = (tryout: TryoutData) => {
    return (
      <Link href="/tryout-detail" className="w-fit">
        <div className=" pr-12 w-fit dark:border-white bg-[rgba(255,255,255,0.1)] h-fit  flex flex-row border-1 rounded-md">
          <div>
            <div className="flex rounded-tl-md font-semibold text-white bg-blue-500/50 backdrop-blur-lg w-18 h-8 items-center justify-center">
              SNBT
            </div>
            <div className="text-center flex items-center justify-center text-5xl font-semibold mb-3">
              {tryout.id}
            </div>
          </div>
          <div className="px-3  justify-center border-l-1 flex flex-col">
            <p className="font-bold md:text-xl sm:text-md">{tryout.title}</p>
            <p className="text-gray-600 text-sm">
              {tryout.totalDuration} menit - {tryout.totalQuestions} soal
            </p>
            <div className="text-[12px] w-fit items-center mb-2 font-bold mt-1 flex border-1 gap-2 border-blue-300 text-blue-500 px-2 py-1 rounded-sm">
              {calendarSVG()}
              <p className="">{tryout.timePeriod}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between p-5">
        <div className="flex w-fit  flex-col  p-5 gap-5">
          <div className="justify-between flex-row flex">
            <p className="font-bold text-3xl">List Tryout</p>
            <button
              onClick={toggleMultipleChoicePopup}
              className="font-bold border-1 cursor-pointer rounded-md px-2 py-1"
            >
              Buat Tryout
            </button>
          </div>

          {multipleChoicePopup && (
            <MultPopup
              close={toggleMultipleChoicePopup}
              addQuestion={addQuestion}
              addTryout={addTryout}
            />
          )}

          <div className="border-1 w-[1000px] rounded-md px-5  py-3">
            <h2 className="text-3xl font-bold mb-4">Daftar Tryout</h2>
            {tryouts.length > 0 && (
              <div className="grid  grid-cols-3 w-fit gap-3">
                {tryouts.map(renderTOCard)}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
