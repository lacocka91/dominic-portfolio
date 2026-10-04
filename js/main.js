"use strict";

// Progressive enhancement: Inhalt und Navigation funktionieren auch ohne JavaScript.
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const mobileViewport = window.matchMedia("(max-width: 900px)");

function setMenuOpen(isOpen, returnFocus = false) {
  menuButton.setAttribute("aria-expanded", String(isOpen));
  navigation.classList.toggle("is-open", isOpen);
  menuButton.querySelector(".menu-label").textContent = isOpen ? "Schließen" : "Menü";
  if (returnFocus) menuButton.focus();
}

if (header && menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });
  navigation.addEventListener("click", (event) => {
    const link = event.target.closest("a[href^='#']");
    if (!link || !mobileViewport.matches) return;
    setMenuOpen(false);
    const destination = document.querySelector(link.getAttribute("href"));
    if (destination) destination.focus({ preventScroll: true });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false, true);
    }
  });
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) setMenuOpen(false);
  });
  header.addEventListener("focusout", (event) => {
    if (event.relatedTarget && !header.contains(event.relatedTarget)) setMenuOpen(false);
  });
  mobileViewport.addEventListener("change", () => setMenuOpen(false));
  header.classList.add("menu-ready");
  menuButton.hidden = false;
}

const year = document.getElementById("current-year");
if (year) year.textContent = String(new Date().getFullYear());

// Nur die Navigation wird hervorgehoben; alle Inhalte bleiben jederzeit sichtbar.
if (navigation && "IntersectionObserver" in window) {
  const links = [...navigation.querySelectorAll("a[href^='#']")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const visibleSections = new Set();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) visibleSections.add(entry.target);
      else visibleSections.delete(entry.target);
    }
    const current = sections.find((section) => visibleSections.has(section));
    for (const link of links) {
      if (current && link.getAttribute("href") === `#${current.id}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}
