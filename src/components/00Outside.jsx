import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Castle from "./01Castle.jsx";
import InputBox from "./InputBox.jsx";

const pokeUrl = "https://pokeapi.co/api/v2/pokemon";
const reinforcementNames = ["bulbasaur", "charmander", "squirtle"];

export default function Outside() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [starterPokemon, setStarterPokemon] = useState([]);
  const [prisoner, setPrisoner] = useState(null);
  const [rescuePokemon, setRescuePokemon] = useState([]);
  const [gamePhase, setGamePhase] = useState("idle");
  const [podProgress, setPodProgress] = useState(0);
  const [showBuildModal, setShowBuildModal] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const rescueTeam = [...starterPokemon, ...rescuePokemon];
  const hasHelpSignal = answer.toLowerCase().includes("help");

  useEffect(() => {
    async function fetchPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1;

        const starterResponse = await fetch(`${pokeUrl}/pikachu`);
        const prisonerResponse = await fetch(`${pokeUrl}/${randomId}`);
        const starterData = await starterResponse.json();
        const prisonerData = await prisonerResponse.json();
        setStarterPokemon([starterData]);
        setPrisoner(prisonerData);
     
    }

    fetchPokemon();
  }, []);

  useEffect(() => {
    if (gamePhase !== "building") return undefined;

    const interval = setInterval(() => {
      setPodProgress((currentProgress) => {
        const nextProgress = Math.min(currentProgress + 4, 100);
        if (nextProgress === 100) {
          clearInterval(interval);
          setShowBuildModal(false);
          setGamePhase("ready");
        }
        return nextProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [gamePhase]);

  useEffect(() => {
    if (gamePhase !== "escaped") return;

    confetti({ particleCount: 220, spread: 120, origin: { y: 0.55 } });
    setTimeout(() => {
      confetti({ particleCount: 120, angle: 60, spread: 80, origin: { x: 0 } });
      confetti({ particleCount: 120, angle: 120, spread: 80, origin: { x: 1 } });
    }, 250);
  }, [gamePhase]);

  async function handleCallReinforcements() {
    try {
      const team = [];
      for (const name of reinforcementNames) {
        const response = await fetch(`${pokeUrl}/${name}`);
        team.push(await response.json());
      }
      setRescuePokemon(team);
      setGamePhase("team-ready");
    } catch (error) {
      console.error(error);
      setLoadError(true);
    }
  }

  function handleBuildPod() {
    setPodProgress(0);
    setShowBuildModal(true);
    setGamePhase("building");
  }

  return (
    <div className="min-h-screen bg-slate-800 text-white flex flex-col items-center pt-10">
      <h1 className="text-yellow-400 text-3xl font-bold mb-4">Outside the Castle</h1>

      {loadError && <p className="text-red-400 mb-4">Unable to load Pokemon.</p>}

      <p className="text-gray-400 text-sm mb-3">
        {gamePhase === "ready" || gamePhase === "pod-arrived" || gamePhase === "boarded"
          ? "All aboard the Escape Pod!"
          : "Pokemon outside:"}
      </p>

      <div className={`flex gap-5 p-3 mb-4 ${gamePhase === "ready" ? "border-2 border-yellow-400 rounded-xl" : ""}`}>
        {rescueTeam.map((pokemon) => (
          <div key={pokemon.id} className="text-center text-xs">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-16 h-16" />
            <p className="capitalize">{pokemon.name}</p>
          </div>
        ))}
      </div>

      {hasHelpSignal && gamePhase === "idle" && (
        <div className="text-center mb-4">
          <p className="text-yellow-400 mb-2">Help signal received from inside!</p>
          <button onClick={handleCallReinforcements} className="bg-blue-500 px-5 py-2 rounded font-bold">
            Call for Reinforcements!
          </button>
        </div>
      )}

      {gamePhase === "team-ready" && (
        <button onClick={handleBuildPod} className="bg-green-500 px-5 py-3 rounded font-bold mb-4">
          Build Escape Pod!
        </button>
      )}

      <p className="text-purple-300 font-bold mb-2">
        Message to the Secret Room: <span className="text-yellow-300">{question || "Waiting..."}</span>
      </p>
      <InputBox value={question} onChange={(event) => setQuestion(event.target.value)} />
      <p className="text-green-300 font-bold my-3">
        Reply from the Secret Room: <span className="text-yellow-300">{answer || "..."}</span>
      </p>

      {showBuildModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="w-80 bg-slate-800 border-2 border-yellow-400 rounded-xl p-8 text-center">
            <p className="text-yellow-400 font-bold mb-5">Building Escape Pod...</p>
            <div className="h-5 bg-slate-600 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 transition-all" style={{ width: `${podProgress}%` }} />
            </div>
            <p className="text-xl font-bold mt-3">{podProgress}%</p>
          </div>
        </div>
      )}

      <Castle
        textFromInput={question}
        onSecretRoomChange={setAnswer}
        prisoner={prisoner}
        rescueTeam={rescueTeam}
        gamePhase={gamePhase}
        onGamePhaseChange={setGamePhase}
      />
    </div>
  );
}
