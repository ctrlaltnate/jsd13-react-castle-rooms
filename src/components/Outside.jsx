import Castle from "./Castle.jsx";

export default function Outside() {
  return (
    <div className="w-full h-full bg-gray-500 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-3xl font-bold mb-8">Outside</h2>
        <Castle />
      </div>
    </div>
  );
}