import { useEffect, useState } from "react";

export function CustomCursor() {

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return (

    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`
      }}
    >

      <div
        className="
        w-6 h-6
        rounded-full
        bg-blue-500/30
        blur-md
        "
      />

    </div>

  );

}
