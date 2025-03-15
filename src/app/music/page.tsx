import BottomNav from "../components/BottomNav";

export default function Music() {
  return (
    <main className="bg-main-bg bg-cover bg-center h-screen bg-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full relative z-10">
        <div className="text-white text-center">
          <p className="text-3xl mb-8">Music</p>
          {/* Music content will go here */}
        </div>
        <div className="absolute bottom-0 mb-10 text-white">
          <p>Let the music guide you</p>
        </div>

        <BottomNav />
      </div>
    </main>
  );
}
