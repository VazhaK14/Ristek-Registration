import { useState } from "react";
import { DatePicker } from "@/components/elements/DatePicker";
import { ToggleLeft } from "lucide-react";

interface MultPopupProps {
  readonly close: () => void;
  readonly addQuestion: (question: { text: string }) => void;
  readonly addTryout: (formData: any) => void;
}

export default function MultPopup({
  close,
  addQuestion,
  addTryout,
}: MultPopupProps) {
  const [isSelected, setIsSelected] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [choiceType, setChoiceType] = useState<"single" | "multiple">("single");
  const [questionText, setQuestionText] = useState("");

  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timePeriod, setTimePeriod] = useState("");

  // Define the sections with their details
  const [sections, setSections] = useState([
    { name: "Penalaran Umum", questionCount: "", duration: "" },
    { name: "Pengetahuan dan Pemahaman Umum", questionCount: "", duration: "" },
    { name: "Penalaran Kuantitatif", questionCount: "", duration: "" },
    { name: "Pengetahuan Baca & Menulis", questionCount: "", duration: "" },
    { name: "Literasi Bahasa Indonesia", questionCount: "", duration: "" },
    { name: "Literasi Bahasa Inggris", questionCount: "", duration: "" },
    { name: "Penalaran Matematika", questionCount: "", duration: "" },
  ]);

  // Track which section is being edited
  const [currentSection, setCurrentSection] = useState(0);

  const handleSave = () => {
    // Combine all sections data for saving
    const formData = {
      title,
      date,
      timePeriod,
      sections,
      description: questionText,
    };

    console.log("Saving tryout data:", formData);

    // Add the tryout to the parent component
    addTryout(formData);

    // Add the description as a question
    addQuestion({ text: questionText });

    // Close the popup
    close();
  };

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  const handleDateChange = (date: Date | undefined) => {
    setDate(date);
  };

  const updateSectionDetail = (
    index: number,
    field: "questionCount" | "duration",
    value: string
  ) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setCurrentSection(sections.length);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    } else {
      setCurrentStep(1);
    }
  };

  const renderSectionForm = (index: number) => {
    const section = sections[index];
    return (
      <div className="w-[90%] max-w-[1000px] border-1 p-3 items-center bg-white rounded-md">
        <p className="font-bold text-2xl">{section.name}</p>
        <div className="mt-3 space-y-2">
          <p className="font-bold">Jumlah Soal</p>
          <input
            type="number"
            className="border-1 p-1 rounded-md w-full"
            placeholder="ex: 20"
            value={section.questionCount}
            onChange={(e) =>
              updateSectionDetail(index, "questionCount", e.target.value)
            }
          />
        </div>
        <div className="mt-3 space-y-2">
          <p className="font-bold">Durasi (menit)</p>
          <input
            type="number"
            className="border-1 p-1 rounded-md w-full"
            placeholder="ex: 30"
            value={section.duration}
            onChange={(e) =>
              updateSectionDetail(index, "duration", e.target.value)
            }
          />
        </div>

        <div className="flex justify-between font-bold mt-5">
          <button
            onClick={prevSection}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Kembali
          </button>

          <button
            onClick={nextSection}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {index === sections.length - 1 ? "Review" : "Selanjutnya"}
          </button>
        </div>
      </div>
    );
  };

  const renderFinalReview = () => {
    return (
      <div className="w-[90%] max-w-[1000px] border-1 p-3 items-center bg-white rounded-md">
        <p className="font-bold text-2xl">Review Tryout</p>

        <div className="mt-4 border p-4 rounded-md bg-gray-50">
          <h3 className="font-bold text-lg">{title || "Untitled Tryout"}</h3>
          <p>Periode: {timePeriod || "Belum ditentukan"}</p>

          <div className="mt-3">
            <p className="font-bold">Rincian Bagian:</p>
            <table className="w-full mt-2 border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Bagian</th>
                  <th className="border p-2 text-center">Jumlah Soal</th>
                  <th className="border p-2 text-center">Durasi (menit)</th>
                </tr>
              </thead>
              <tbody>
                {sections.map((section, idx) => (
                  <tr key={idx}>
                    <td className="border p-2">{section.name}</td>
                    <td className="border p-2 text-center">
                      {section.questionCount || "-"}
                    </td>
                    <td className="border p-2 text-center">
                      {section.duration || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3">
            <p className="font-bold">Total:</p>
            <p>
              Jumlah Soal:{" "}
              {sections.reduce(
                (total, section) =>
                  total + (parseInt(section.questionCount) || 0),
                0
              )}
            </p>
            <p>
              Durasi Total:{" "}
              {sections.reduce(
                (total, section) => total + (parseInt(section.duration) || 0),
                0
              )}{" "}
              menit
            </p>
          </div>
        </div>

        <div className="flex justify-between font-bold mt-5">
          <button
            onClick={prevSection}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Kembali
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Simpan Tryout
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-10 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm">
      {currentStep === 1 ? (
        <div className="w-[90%] max-w-[1000px] border-1 p-3 items-center bg-white rounded-md">
          <p className="font-bold text-2xl">Buat Tryout</p>
          <div className="mt-3 space-y-2 ">
            <p className="font-bold">Judul</p>
            <input
              type="text"
              className="border-1 p-1 rounded-md w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-3 space-y-2">
            <p className="font-bold">Tanggal</p>
            <DatePicker />
          </div>
          <div className="mt-3 space-y-2">
            <p className="font-bold">Waktu Pengerjaan</p>
            <input
              type="text"
              className="border-1 p-1 rounded-md w-full"
              placeholder="ex: 25 Mar 2025 - 26 Mar 2025"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            />
          </div>
          <div className="flex justify-between font-bold mt-5">
            <button
              onClick={close}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Kembali
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      ) : currentSection < sections.length ? (
        renderSectionForm(currentSection)
      ) : (
        renderFinalReview()
      )}
    </div>
  );
}
