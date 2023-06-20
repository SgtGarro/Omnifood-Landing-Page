"use strict";

const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

const allNavLinks = document.querySelectorAll(".main-nav .nav-link");
const logoHeaderLink = document.querySelector(".header .logo");
const heroLinks = document.querySelectorAll(".hero a");

//////////////////////////////////////////////////////////////////////
// Make mobile navigation works
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////////////////////////////
// Implement Smooth Scrolling
logoHeaderLink.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
});

allNavLinks.forEach((link) => {
  const href = link.getAttribute("href");
  const sectionEl = document.querySelector(href);

  link.addEventListener("click", function (e) {
    e.preventDefault();
    sectionEl.scrollIntoView({ behavior: "smooth" });
  });
});

const [startBtn, ctaBtn] = heroLinks;
startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const section = document.querySelector("#cta");

  section.scrollIntoView({ behavior: "smooth" });
});
ctaBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const section = document.querySelector("#how");

  section.scrollIntoView({ behavior: "smooth" });
});
//////////////////////////////////////////////////////////////////////
// Implementing Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const [ent] = entries;
    ent.isIntersecting
      ? document.body.classList.remove("sticky")
      : document.body.classList.add("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
