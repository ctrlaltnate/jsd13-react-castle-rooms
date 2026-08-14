import Castle from "./01Castle.jsx";
import InputBox from "./InputBox.jsx";
import { useState } from "react";

export default function Outside() {
  const [question, setQuestion] = useState("Q");
  const [answer, setAnswer] = useState("A");
  const [inputText, setInputText] = useState("");
  const [secretText, setSecretText] = useState("");

  return (
    <div className="w-full h-full bg-gray-500 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
                
        
        <h2 className="text-white text-3xl font-bold mb-8">Outside</h2>
        <p className="text-yellow-300 font-bold my-4">
          Secret Room said: {secretText}
        </p>
        <InputBox 
            value={inputText}
            onChange={(e)=> setInputText(e.target.value)}
        />
        {question}
        {answer}
        <Castle textFromInput={inputText}
        onSecretRoomChange={(text) => setSecretText(text)}
        />

      </div>
    </div>
  );
}