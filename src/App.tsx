import { useState } from "react";

export default function App() {
  const [tsize, setTsize] = useState("text-6xl");
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-teal-200 to-teal-500">
      <div className=" text-black">
        <h1
          className={tsize + " font-mono"}
          onMouseOver={() => setTsize("text-7xl")}
          onMouseOut={() => setTsize("text-6xl")}
        >
          Hello Rahul!
        </h1>
      </div>
    </div>
  );
}
