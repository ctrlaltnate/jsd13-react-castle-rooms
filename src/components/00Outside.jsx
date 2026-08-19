import Castle from "./01Castle.jsx";
import InputBox from "./InputBox.jsx";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext.jsx";

export default function Outside() {
  const { inputText, setInputText, secretText, isOutsideDark } = useContext(MessageContext);

  return (
    <div className="relative w-full h-full bg-gray-500 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
                
        
        <h2 className="text-white text-3xl font-bold mb-8">Outside</h2>
        <p className="text-yellow-500 font-bold my-4 text-2xl ">
          Secret Room said: {secretText ? secretText : "⏳ Wating for a message from the Secret Room..."}
        </p>
        <InputBox 
            value={inputText}
            onChange={(e)=> setInputText(e.target.value)}
        />
         <p className="text-black font-bold my-4 text-l ">
          Message for Secret Room: {inputText ? inputText : "⏳ Waiting for a message to the Secret Room..."}
        </p>
        <Castle />
      </div>

      <div
        className={`pointer-events-none absolute inset-0 bg-black transition-opacity duration-1000 ${
          isOutsideDark ? "opacity-75" : "opacity-0"
        }`}
      />
    </div>
  );
}