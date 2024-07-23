import { useEffect, useState } from "react";

export const Pointer = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    if (isEnabled) window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [isEnabled]);

  return (
    <>
      <h1>
        Counter: {cursor.x} {cursor.y}
      </h1>
      <button onClick={()=>setIsEnabled(!isEnabled)}>{!isEnabled ? "Activar" : "Desactivar"}</button>
    </>
  );
};
