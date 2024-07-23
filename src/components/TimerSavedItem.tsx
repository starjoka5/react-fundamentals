import { useState } from "react";

type Props = {
  time: string;
  deleteTime: (time: string) => void;
};
export const TimeItem = ({ time: _time, deleteTime }: Props) => {
  const [time] = useState(_time);
  return (
    <div className="flex items-center gap-4">
      {time}{" "}
      <button
        className="text-xl rounded-md bg-red-600 hover:bg-red-700 transition-all duration-300 py-2 px-4"
        onClick={() => deleteTime(time)}
      >
        Delete
      </button>
    </div>
  );
};
