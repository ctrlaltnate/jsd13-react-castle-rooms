
import InputBox from "./InputBox";
import { useState } from "react";

export default function SecretRoom({ textFromInput, onSecretRoomChange }) {
  const [inputTextFromSecretRoom, setInputTextFromSecretRoom] = useState("");
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputTextFromSecretRoom(newValue);
  
    if (onSecretRoomChange) {
      onSecretRoomChange(newValue);
    }
  };
  return (
    <div className="w-full h-full bg-gray-700 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-sm font-bold mb-4">Secret Room </h2>
        <p className="text-yellow-300 text-xs text-center my-5">Outside said : {textFromInput}</p>
        <InputBox 
            value={inputTextFromSecretRoom}
            onChange={handleChange}
        />
      </div>
    </div>
  );
}