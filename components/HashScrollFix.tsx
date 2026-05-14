"use client";

import { useEffect } from "react";

export default function HashScrollFix() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a");
      if (!anchor) return;

      if (anchor.target && anchor.target !== "" && anchor.target !== "_self") {
        return;
      }
      if (anchor.hasAttribute("download")) return;

      if (anchor.host !== window.location.host) return;
      if (anchor.pathname !== window.location.pathname) return;

      const hash = anchor.hash;
      if (!hash || hash === "#") return;

      if (hash === "#top") {
        event.preventDefault();
        event.stopPropagation();
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
        return;
      }

      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (!el) return;

      event.preventDefault();
      event.stopPropagation();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search + hash,
      );
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
