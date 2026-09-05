"use client";

import { useEffect } from "react";

/**
 * Clears leftover service workers / caches from older builds (e.g. Vite PWA)
 * so they cannot serve stale assets over this Next.js site.
 */
export function ClearStaleServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    void navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        void registration.unregister();
      }
    });

    if ("caches" in window) {
      void caches.keys().then((keys) => {
        for (const key of keys) {
          void caches.delete(key);
        }
      });
    }
  }, []);

  return null;
}
