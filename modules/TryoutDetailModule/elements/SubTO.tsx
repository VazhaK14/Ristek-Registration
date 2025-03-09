export default function SubTO({ subtest, time, filled, isLast }: SubTOProps) {
  return (
    <div className="flex flex-row items-start space-x-2">
      <div>
        <div className="w-4 h-4 border-1 bg-gray-200 rounded-full" />
        <div
          className={`w-1 ${
            !isLast ? "h-12" : "h-8"
          } bg-gray-200 border-2 ml-[6px]`}
        />
      </div>
      <div className="-translate-y-1">
        <p>{subtest}</p>
        <div className="flex flex-row">
          <p>{time} menit</p>
          <div className="border-1 border-gray-400 rounded-md h-6 mx-5" />
          <p>terisi {filled}</p>
        </div>
      </div>
    </div>
  );
}

interface SubTOProps {
  readonly subtest: string;
  readonly time: number;
  readonly filled: number;
  readonly isLast?: boolean;
}
