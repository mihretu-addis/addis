"use client";

import { useEffect } from "react";

/** Unregisters leftover service workers (e.g. from a prior Vite app on :3000). */
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
