import Chamber from "./03Chamber.jsx";

export default function Tower() {
  return (
    <div className="w-full h-full bg-yellow-400 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl font-bold mb-8">Tower</h2>
        <Chamber />
      </div>
    </div>
  );
}