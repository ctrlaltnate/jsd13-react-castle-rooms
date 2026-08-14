import Hall from "./05Hall.jsx";

export default function Room(room) {
  return (
    <div className="w-full h-full bg-green-500 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-lg font-bold mb-8">Room</h2>
        <Hall textFromInput={room.textFromInput} onSecretRoomChange={room.onSecretRoomChange}/>
      </div>
    </div>
  );
}