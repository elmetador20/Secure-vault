import FancyBackground from "@/components/FancyBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <FancyBackground />
      <h1 className="text-white text-5xl font-bold z-10">Passwrd manager</h1>
    </main>
  );
}