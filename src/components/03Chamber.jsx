import Room from "./04Room.jsx";

export default function Chamber(chamber) {
  return (
    <div className="w-full h-full bg-emerald-400 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-xl font-bold mb-8">Chamber</h2>
        <Room textFromInput={chamber.textFromInput} onSecretRoomChange={chamber.onSecretRoomChange}/>
      </div>
    </div>
  );
}