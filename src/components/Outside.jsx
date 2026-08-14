import Castle from "./Castle.jsx";
import { useState } from "react";

export default function Outside() {
  const [question, setQuestion] = useState("Q");
  const [answer, setAnswer] = useState("A");

  return (
    <div className="w-full h-full bg-gray-500 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-3xl font-bold mb-8">Outside</h2>
        <Castle />
        {question}
        {answer}
      </div>
    </div>
  );
}