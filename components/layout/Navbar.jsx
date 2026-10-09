"use client";

import { useEffect, useRef, useState } from "react";
import { bookCall, navLinks } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { SmartLink } from "@/components/ui/SmartLink";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const focusables = () => [toggleRef.current, ...menuRef.current.querySelectorAll("a")];
    focusables()[1]?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    const desktop = window.matchMedia("(width >= 64rem)");
    const onDesktop = (e) => e.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4">
      {open && (
        <div aria-hidden="true" onClick={close} className="fixed inset-0 -z-10 animate-fade bg-ink/60 lg:hidden" />
      )}

      <div className="shell">
        {/* Floating bar — Figma: 1280×62, aligned to the content container */}
        <div className="flex h-[62px] items-center justify-between gap-6 rounded-full border border-white/10 bg-[linear-gradient(to_bottom,rgb(22_22_22/0.92),rgb(13_13_13/0.92))] px-3 backdrop-blur-md md:px-[19px]">
          <SmartLink href="/" aria-label="Trivyah Tech home" className="rounded-full">
            <Logo variant="nav" />
          </SmartLink>

          <nav aria-label="Primary" className="max-lg:hidden">
            <ul className="flex items-center gap-1.5">
              {navLinks.map((link) => (
                <li key={link.label} className="flex">
                  <NavLink href={link.href}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Button href={bookCall.href} size="xs" className="max-lg:hidden">
            {bookCall.label}
          </Button>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="relative flex size-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:bg-white/5 lg:hidden"
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute h-px w-4 bg-fg transition-transform duration-200",
                open ? "rotate-45" : "-translate-y-[3px]",
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "absolute h-px w-4 bg-fg transition-transform duration-200",
                open ? "-rotate-45" : "translate-y-[3px]",
              )}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          id="mobile-menu"
          ref={menuRef}
          hidden={!open}
          className="mt-2 animate-fade rounded-[28px] border border-white/10 bg-ink/90 bg-linear-to-b from-white/6 to-white/2 p-3 shadow-float backdrop-blur-md lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col items-stretch gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href} onClick={close} className="justify-start py-3">
                {link.label}
              </NavLink>
            ))}
            <Button href={bookCall.href} className="mt-2" onClick={close}>
              {bookCall.label}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
