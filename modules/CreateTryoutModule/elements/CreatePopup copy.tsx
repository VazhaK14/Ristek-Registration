import { useState } from "react";

interface MultPopupProps {
  readonly close: () => void;
  readonly addQuestion: (question: { text: string }) => void;
}

export default function MultPopup({ close, addQuestion }: MultPopupProps) {
  const [isSelected, setIsSelected] = useState<number | null>(null);
  const [choiceType, setChoiceType] = useState<"single" | "multiple">("single");
  const [questionText, setQuestionText] = useState("");

  const handleSave = () => {
    addQuestion({ text: questionText });
    close();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-10 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm">
      <div className="md:w-96 sm:w-72 border-1 p-3 items-center bg-white rounded-md">
        <textarea
          className="w-full border-1 rounded-md min-h-32 p-2 text-center"
          placeholder="Masukkan pertanyaan di sini..."
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
        <div className="grid grid-cols-2 my-2 text-center">
          <p
            className={`hover:bg-gray-200 cursor-pointer p-2 ${
              choiceType == "single" ? "bg-gray-200" : ""
            }`}
            onClick={() => setChoiceType("single")}
          >
            Single Choice
          </p>
          <p
            className={`hover:bg-gray-200 cursor-pointer p-2 ${
              choiceType == "multiple" ? "bg-gray-200" : ""
            }`}
            onClick={() => setChoiceType("multiple")}
          >
            Multiple Choice
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Opsi pilihan ganda</p>
          <div className="flex flex-col gap-3">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center space-x-3">
                {choiceType == "single" ? (
                  <input
                    type="radio"
                    checked={isSelected == index}
                    onChange={() => setIsSelected(index)}
                  />
                ) : (
                  <input type="checkbox" />
                )}
                <input
                  type="text"
                  placeholder="Masukkan pilihan"
                  className="border-1 px-2 py-1 w-full rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-10 h-8 mt-4">
          <button
            onClick={close}
            className="border-1 cursor-pointer rounded-md w-28"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="border-1 cursor-pointer rounded-md w-28 bg-blue-500 text-white"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
