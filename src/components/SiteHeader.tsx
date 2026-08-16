"use client";

import { useState } from "react";

const links = [["About", "#about"], ["Work", "#work"], ["Experience", "#experience"], ["Stack", "#stack"], ["Contact", "#contact"]] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header shell">
    <a className="mark" href="#top" aria-label="Mohammed Samaan Jushiddi home">MSJ</a>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <a className="talk desktop-talk" href="#contact">Let&apos;s talk <span>↗</span></a>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "≡"}</span></button>
    {open && <nav className="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
  </header>;
}
