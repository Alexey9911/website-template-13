gsap.registerPlugin(ScrollTrigger);

const splitPrice = new SplitType(".prices-col h2", {
  types: "words, chars",
});

const tl2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".prices",
      start: "top 30%",
      end: "+=60%",
      scrub: 0.2,
    },
  })
  .set(
    splitPrice.chars,
    {
      duration: 0.3,
      color: "#fff",
      stagger: 0.1,
    },
    0.1
  );
