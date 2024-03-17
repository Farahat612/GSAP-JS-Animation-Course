// creating a GSAP default timeline for the text reveal animation
const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: 'Power3.out' },
})

// Animating the hero image to start from taking up the full width of the viewport and then scaling down to its original size
tl.fromTo(
  '.hero-img',
  {
    scale: 1.5,
    borderRadius: '0rem',
    duration: 1.5,
  },
  {
    scale: 1,
    borderRadius: '2rem',
    delay: 0.35,
    duration: 2.5,
    ease: 'elastic.out(1.5, 1)',
  }
)
