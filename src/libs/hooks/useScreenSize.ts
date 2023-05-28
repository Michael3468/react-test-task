import { useState, useEffect } from 'react';

/**
 * Returns a boolean indicating whether the current screen size matches the provided media query.
 * @param {string} query - A CSS media query string.
 *
 * Example: const isLargeScreen = useScreenSize('(min-width: 428px)');
 * @returns {boolean} - Returns `true` if the screen size matches the media query,
 * and `false` otherwise.
 */
function useScreenSize(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    function handleMatchChange(event: MediaQueryListEvent) {
      setMatches(event.matches);
    }

    mediaQuery.addEventListener('change', handleMatchChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMatchChange);
    };
  }, [query]);

  return matches;
}

// eslint-disable-next-line import/prefer-default-export
export { useScreenSize };
