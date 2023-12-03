import Clock from "./components/Clock/Clock";

export default function Home() {
  return (
    <main className="bg-cover bg-center h-screen bg-black">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-white text-center">
          <p className="text-2xl">
            Embrace the weekend, Jian Hong. You aced Friday.
          </p>
          <Clock />
        </div>
        <div className="absolute bottom-0 mb-10 text-white">
          <p>Keep taking time for yourself until you&apos;re you again</p>
        </div>
      </div>
      {/* Add your music player and other components */}
    </main>
  );
}
