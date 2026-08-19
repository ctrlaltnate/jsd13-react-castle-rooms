import Tower from "./02Tower.jsx";

export default function Castle() {
  return (
    <div className="w-full h-full bg-orange-500  flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-3xl font-bold mb-8">Castle</h2>
        <Tower />
      </div>
    </div>
  );
}