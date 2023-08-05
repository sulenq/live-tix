import { useState } from 'react';

function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  function handleResize() {
    setScreenWidth(window.innerWidth);
  }
  window.addEventListener('resize', handleResize);
  return screenWidth;
}

export { useScreenWidth };
