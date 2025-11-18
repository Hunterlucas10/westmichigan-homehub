import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top of page when route changes (unless there's a hash fragment)
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash fragment
    // HashNavigation component will handle scrolling to hash targets
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // Use instant for immediate scroll
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

