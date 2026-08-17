import { useState } from "react";
import InputBox from "./InputBox";

export default function SecretRoom({
  textFromInput,
  onSecretRoomChange,
  prisoner,
  rescueTeam,
  gamePhase,
  onGamePhaseChange,
}) {
  const [reply, setReply] = useState("");

  function handleChange(event) {
    setReply(event.target.value);
    onSecretRoomChange?.(event.target.value);
  }

  const podIsHere = gamePhase === "pod-arrived" || gamePhase === "boarded";
  const hasEscaped = gamePhase === "escaped";

  return (
    <div className="w-full min-h-[620px] bg-slate-700 flex items-center justify-center p-8">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-white text-sm font-bold mb-6">SecretRoom</h2>

        {!hasEscaped && prisoner && (
          <div className="border-4 border-red-400 rounded-xl p-5 text-center mb-5">
            <p className="text-red-300 font-bold">
              {gamePhase === "boarded" ? "Entering the pod..." : "A prisoner is trapped here!"}
            </p>
            <img
              src={prisoner.sprites.front_default}
              alt={prisoner.name}
              className={`w-28 h-28 mx-auto ${gamePhase === "boarded" ? "opacity-50" : ""}`}
            />
            <p className="capitalize text-gray-300">{prisoner.name}</p>
          </div>
        )}

        {hasEscaped && (
          <div className="text-center mb-5">
            <p className="text-green-300 text-xl font-bold">The prisoner has escaped!</p>
            <p className="text-gray-300">The Secret Room is empty.</p>
          </div>
        )}

        {gamePhase === "ready" && (
          <div className="text-center mb-5">
            <p className="text-gray-300 mb-3">You sense something waiting just outside...</p>
            <button
              onClick={() => onGamePhaseChange("pod-arrived")}
              className="bg-purple-500 px-5 py-2 rounded font-bold"
            >
              Call the Pod!
            </button>
          </div>
        )}

        {podIsHere && (
          <div className="text-center mb-5">
            <div className="border-2 border-yellow-400 rounded-xl p-4 mb-3">
              <p className="text-yellow-300 font-bold mb-2">The Escape Pod is here!</p>
              <div className="flex justify-center gap-3">
                {rescueTeam.map((pokemon) => (
                  <div key={pokemon.id} className="text-xs text-center">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-12 h-12" />
                    <p className="capitalize">{pokemon.name}</p>
                  </div>
                ))}
                {gamePhase === "boarded" && prisoner && (
                  <div className="text-xs text-center text-yellow-300">
                    <img src={prisoner.sprites.front_default} alt={prisoner.name} className="w-12 h-12" />
                    <p className="capitalize">{prisoner.name} ✓</p>
                  </div>
                )}
              </div>
            </div>

            {gamePhase === "pod-arrived" ? (
              <button
                onClick={() => onGamePhaseChange("boarded")}
                className="bg-blue-500 px-5 py-2 rounded font-bold"
              >
                Enter the Pod!
              </button>
            ) : (
              <button
                onClick={() => onGamePhaseChange("escaped")}
                className="bg-yellow-400 text-black px-5 py-2 rounded font-bold"
              >
                Transport Outside!
              </button>
            )}
          </div>
        )}

        <p className="text-purple-300 font-bold mb-3">
          Message from outside: <span className="text-yellow-300">{textFromInput || "Waiting for a message..."}</span>
        </p>
        <InputBox value={reply} onChange={handleChange} />
        <p className="text-green-300 font-bold mt-4">
          Your reply: <span className="text-yellow-300">{reply || "..."}</span>
        </p>
      </div>
    </div>
  );
}
