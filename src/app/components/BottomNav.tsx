import FullscreenButton from "./FullscreenButton";
import ModeMenu from "./ModeMenu/ModeMenu";
import SettingsButton from "./SettingsButton";

function BottomNav() {
  return (
    <div className="absolute bottom-12 right-12 flex items-center">
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
