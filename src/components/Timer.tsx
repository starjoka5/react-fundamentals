import { useEffect, useState } from "react";
import { TimeItem } from "./TimerSavedItem";

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timers, setTimers] = useState<string[]>([]);

  const handleTimer = () => {
    if (isRunning) return handleStop();
    handleStart();
  };

  const getFormatedTime = () => {
    let timeStr = ("0" + Math.floor((timer / 60000) % 60)).slice(-2);
    timeStr += ":";
    timeStr += ("0" + Math.floor((timer / 1000) % 60)).slice(-2);
    timeStr += ":";
    timeStr += ("0" + ((timer / 10) % 100)).slice(-2);
    return timeStr;
  };

  useEffect(() => {
    let interval: number | undefined = undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTime) => {
          return prevTime + 10;
        });
      }, 10);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTimer(0);
  };

  const saveTime = () => {
    if (timer !== 0) setTimers([...timers, getFormatedTime()]);
  };

  const deleteTime = (time:string) => {
    setTimers(timers.filter(t=>t!==time));
  };

  return (
    <div className="flex flex-col text-5xl gap-4">
      <h1 className="text-3xl">Timer</h1>
      <h2>{getFormatedTime()}</h2>
      <div className="flex gap-4">
        <button
          className={`text-2xl rounded-md ${
            isRunning
              ? "bg-red-700 hover:bg-red-900"
              : "bg-blue-700 hover:bg-blue-900"
          } py-4 px-6 transition-all duration-300 `}
          onClick={handleTimer}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className={`text-2xl rounded-md py-4 px-6 bg-yellow-600 hover:bg-yellow-700 disabled:opacity-30 transition-all duration-300 `}
          onClick={saveTime} disabled={timer === 0}
        >
          Save
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {timers.map((time) => {
          return <TimeItem key={time} time={time} deleteTime={deleteTime}/>
        })}
      </ul>
    </div>
  );
};
