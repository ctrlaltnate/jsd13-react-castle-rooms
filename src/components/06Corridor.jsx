import Gallery from "./07Gallery.jsx";

export default function Corridor() {
  return (
    <div className="w-full h-full bg-indigo-500 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-sm font-bold mb-8">Corridor</h2>
        <Gallery />
      </div>
    </div>
  );
}