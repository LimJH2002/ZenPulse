import React from 'react'
import FullscreenButton from './FullscreenButton';
import SettingsButton from './SettingsButton';

function BottomNav() {
  return (
    <div className="absolute bottom-10 right-20 flex items-center">
      {/* Settings Button */}
      <SettingsButton />

      {/* Fullscreen Button */}
      <FullscreenButton />
    </div>
  );
}

export default BottomNav