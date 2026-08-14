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
        <p className="text-yellow-500 font-bold my-4 text-2xl ">
          Secret Room said: {secretText ? secretText : "⏳ Wating for a message from the Secret Room..."}
        </p>
        <InputBox 
            value={inputText}
            onChange={(e)=> setInputText(e.target.value)}
        />
        <Castle textFromInput={inputText}
        onSecretRoomChange={(text) => setSecretText(text)}
        />

      </div>
    </div>
  );
}