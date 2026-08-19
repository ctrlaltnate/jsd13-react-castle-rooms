import SecretRoom from "./09SecretRoom.jsx";


export default function Nook() {
  return (
    <div className="w-full h-full bg-purple-500 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-xs font-bold mb-8">Nook</h2>
        <SecretRoom />
      </div>
    </div>
  );
}