
import InputBox from "./InputBox";
import { useState } from "react";

export default function SecretRoom(secretRoom) {
  const [inputTextFromSecretRoom, setInputTextFromSecretRoom] = useState("");
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputTextFromSecretRoom(newValue);

    if (secretRoom.onSecretRoomChange) {
      secretRoom.onSecretRoomChange(newValue);
    }
  };
  return (
    <div className="w-full h-full bg-gray-700 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-sm font-bold mb-4">Secret Room </h2>
        <p className="text-yellow-300 font-bold my-4 text-2xl ">
          Outside said: {secretRoom.textFromInput ? secretRoom.textFromInput : " ⏳ Waiting for a message from Outside..."}
        </p>
        <InputBox
          value={inputTextFromSecretRoom}
          onChange={handleChange}
        />
                 <p className="text-black font-bold my-4 text-l ">
          Message for Outside: {inputTextFromSecretRoom ? inputTextFromSecretRoom : "⏳ Waiting for a message from the Secret Room..."}
        </p>
      </div>
    </div>
  );
}