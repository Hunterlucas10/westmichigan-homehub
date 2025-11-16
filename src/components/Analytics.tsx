import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Replace with your actual Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

export const Analytics = () => {
  const location = useLocation();

  // Initialize GA4 script once
  useEffect(() => {
    if (typeof window !== "undefined" && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX") {
      // Check if script already loaded
      if (document.querySelector(`script[src*="googletagmanager"]`)) {
        return;
      }

      // Load gtag script
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag("js", new Date());
      gtag("config", GA_MEASUREMENT_ID);
    }
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX") {
      (window as any).gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

