import Corridor from "./06Corridor.jsx";

export default function Hall({ textFromInput, onSecretRoomChange, ...gameProps }) {
  return (
    <div className="w-full h-full bg-blue-500 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-base font-bold mb-8">Hall</h2>
        <Corridor textFromInput={textFromInput} onSecretRoomChange={onSecretRoomChange} {...gameProps} />
      </div>
    </div>
  );
}
