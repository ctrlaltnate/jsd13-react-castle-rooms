import Nook from "./08Nook.jsx";

export default function Gallery(gallery) {
  return (
    <div className="w-full h-full bg-violet-500 flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-white text-xs font-bold mb-8">Gallery</h2>
        <Nook textFromInput={gallery.textFromInput} onSecretRoomChange={gallery.onSecretRoomChange}/>
      </div>
    </div>
  );
}