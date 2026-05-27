export default function Hero() {

  const nombre = "Jose Manuel";
  const profesion = "Frontend Developer";

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center">

      <h1 className="text-6xl font-bold mb-4">
        {nombre}
      </h1>

      <h2 className="text-2xl text-gray-400 mb-6">
        {profesion}
      </h2>

      <p className="max-w-xl text-center text-lg mb-8">
        Estoy construyendo mi primer SaaS con React y Next.js
      </p>

      <button className="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition">
        Contactar
      </button>

    </main>
  );
}