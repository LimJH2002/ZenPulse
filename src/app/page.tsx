import Clock from "./components/Clock/Clock";

export default function Home() {
  return (
    <main className="bg-main-bg bg-cover bg-center h-screen bg-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
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
    </main>
  );
}
