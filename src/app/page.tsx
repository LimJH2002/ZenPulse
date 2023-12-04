import BottomNav from "./components/BottomNav/BottomNav";
import Clock from "./components/Clock/Clock";

export default function Home() {
  return (
    <main className="bg-main-bg bg-center bg-cover h-screen w-screen bg-black overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full relative z-10">
        <div className="text-white text-center">
          <p className="text-xl mb-10 sm:text-3xl sm:mb-5 mx-2">
            Embrace the weekend, Jian Hong. You aced Friday.
          </p>
          <Clock />
        </div>

        <BottomNav />
      </div>
    </main>
  );
}
