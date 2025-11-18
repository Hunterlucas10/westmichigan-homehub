import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Global hash navigation handler
 * Handles scrolling to anchor links on both same-page and cross-page navigation
 */
const HashNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    
    if (!hash) {
      return;
    }

    // Remove the # from the hash
    const id = hash.substring(1);
    
    if (!id) {
      return;
    }
    
    // Wait for the page to render before scrolling
    const scrollToElement = () => {
      const element = document.getElementById(id);
      
      if (element) {
        // Calculate offset for fixed header (assuming header is ~80px tall)
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
        return true; // Successfully scrolled
      }
      return false; // Element not found
    };

    // Try immediately
    if (scrollToElement()) {
      return; // Success, no need for retries
    }

    // Also try after delays in case content is still loading
    const timeout1 = setTimeout(() => {
      if (scrollToElement()) {
        clearTimeout(timeout2);
      }
    }, 100);
    
    const timeout2 = setTimeout(() => {
      scrollToElement();
    }, 500);
    
    // Cleanup function
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [location.pathname, location.hash]);

  // Also handle clicks on anchor links (for same-page navigation)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (!anchor || !anchor.hash) {
        return;
      }
      
      const id = anchor.hash.substring(1);
      
      if (!id) {
        return;
      }
      
      const element = document.getElementById(id);
      
      if (element) {
        // Check if it's a same-page link
        const isSamePage = !anchor.pathname || 
                          anchor.pathname === location.pathname || 
                          anchor.pathname === window.location.pathname ||
                          anchor.getAttribute('href')?.startsWith('#');
        
        if (isSamePage) {
          e.preventDefault();
          
          // Update the URL
          window.history.pushState(null, '', anchor.hash);
          
          // Scroll to element
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, true);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick, true);
    };
  }, [location.pathname]);

  return null;
};

export default HashNavigation;

