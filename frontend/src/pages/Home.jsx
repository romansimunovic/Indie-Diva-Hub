import { useEffect, useState } from "react";
import UmjetnicaCard from "../components/UmjetnicaCard.jsx";

export default function Home() {
  const [umjetnice, setUmjetnice] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/umjetnice")
      .then((res) => res.json())
      .then((data) => setUmjetnice(data))
      .catch(() => console.warn("Greška pri dohvaćanju podataka."));
  }, []);

  return (
    <section className="animate-fadeIn">
      <h1 className="text-4xl font-bold text-center mb-10 mt-6 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400 bg-clip-text text-transparent">
  Umjetnice koje oblikuju zvuk suvremenosti 🎵
</h1>

      {umjetnice.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {umjetnice.map((u) => (
            <UmjetnicaCard key={u._id} umjetnica={u} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 italic">
          Nema unosa... možda je vrijeme da dodate prvu divu. 🌷
        </p>
      )}
    </section>
  );
}
