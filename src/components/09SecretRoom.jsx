
import InputBox from "./InputBox";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

export default function SecretRoom() {
  const { inputText, secretText, setSecretText, isSecretRoomDark } = useContext(MessageContext);

  return (
    <div className="relative w-full h-full bg-gray-700 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-sm font-bold mb-4">Secret Room </h2>
        <p className="text-yellow-300 font-bold my-4 text-2xl ">
          Outside said: {inputText ? inputText : " ⏳ Waiting for a message from Outside..."}
        </p>
        <InputBox
          value={secretText}
          onChange={(e) => setSecretText(e.target.value)}
        />
                 <p className="text-black font-bold my-4 text-l ">
          Message for Outside: {secretText ? secretText : "⏳ Waiting for a message from the Secret Room..."}
        </p>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 bg-black transition-opacity duration-1000 ${
          isSecretRoomDark ? "opacity-75" : "opacity-0"
        }`}
      />
    </div>
  );
}