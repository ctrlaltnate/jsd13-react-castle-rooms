export default function InputBox({value, onChange}) {
  return (
    <input 
      type="text"
      value={value} 
      onChange={onChange}
      className="
        w-72 h-14 
        bg-white text-black 
        border border-gray-300 rounded-lg 
        px-3 py-2 
        focus:outline-none focus:ring-2 focus:ring-blue-500
      "
      placeholder="Type Your Message Here..."
    />
  );
}