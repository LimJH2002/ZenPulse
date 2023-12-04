import FullscreenButton from "./FullscreenButton";
import ModeMenu from "./ModeMenu/ModeMenu";
import SettingsButton from "./SettingsButton";

function BottomNav() {
  return (
    <div className="absolute md:bottom-12 md:right-12 flex items-center bottom-10">
      {/* Mode Menu */}
      <ModeMenu />

      {/* Settings Button */}
      <SettingsButton />

      {/* Fullscreen Button */}
      <FullscreenButton />
    </div>
  );
}

export default BottomNav;
