import { useState } from "react";

export default function AddUmjetnica() {
  const [form, setForm] = useState({
    ime: "",
    biografija: "",
    slika_url: "",
    genius_url: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/umjetnice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("🌸 Umjetnica dodana!");
      setForm({ ime: "", biografija: "", slika_url: "", genius_url: "" });
    } else {
      alert("Greška — pokušaj ponovno.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">
        Dodaj novu umjetnicu 🌷
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Ime"
          value={form.ime}
          onChange={(e) => setForm({ ...form, ime: e.target.value })}
          className="input-field"
          required
        />
        <textarea
          placeholder="Biografija"
          value={form.biografija}
          onChange={(e) => setForm({ ...form, biografija: e.target.value })}
          className="input-field"
          rows="4"
          required
        />
        <input
          type="text"
          placeholder="URL slike"
          value={form.slika_url}
          onChange={(e) => setForm({ ...form, slika_url: e.target.value })}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Genius link"
          value={form.genius_url}
          onChange={(e) => setForm({ ...form, genius_url: e.target.value })}
          className="input-field"
        />
        <button type="submit" className="btn-primary">
          Spremi ✨
        </button>
      </form>
    </div>
  );
}
