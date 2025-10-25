export default function UmjetnicaCard({ umjetnica }) {
  return (
    <div className="card group relative">
      <img
        src={umjetnica.slika_url}
        alt={umjetnica.ime}
        className="w-full h-64 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-pink-700 mb-2 group-hover:text-pink-500 transition">
          {umjetnica.ime}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-3">
          {umjetnica.biografija}
        </p>
        <a
          href={umjetnica.genius_url}
          target="_blank"
          className="text-sm text-pink-500 hover:underline"
        >
          ↗ Više o {umjetnica.ime}
        </a>
      </div>
    </div>
  );
}
