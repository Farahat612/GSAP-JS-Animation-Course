// creating a GSAP default timeline for the text reveal animation
const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: 'Power3.out' },
})

// Animating the hero image to start from taking up the full width of the viewport and then scaling down to its original size
tl.fromTo(
  '.hero-img',
  {
    scale: 1.3,
    borderRadius: '0rem',
  },
  {
    scale: 1,
    borderRadius: '2rem',
    delay: 0.35,
    duration: 2.5,
    ease: 'elastic.out(1.5, 1)',
  }
)

// Animating the first line of cta text to reveal from the left to the right
tl.fromTo(
  '.cta-1',
  {
    x: '100%',
    opacity: 0.5,
  },
  {
    x: 0,
    opacity: 1,
  },
  '<20%'
) // <20% means it should start 20% before the hero animation ends
tl.fromTo(
  '.cta-3',
  {
    x: '-100%',
    opacity: 0.5,
  },
  {
    x: 0,
    opacity: 1,
  },
  '<20%'
) // <20% means it should start 20% before the cta-1 animation ends
tl.fromTo(
  '.cta-2',
  {
    y: '100%',
    opacity: 0.5,
  },
  {
    y: 0,
    opacity: 1,
  },
  '<20%'
) // <20% means it should start 20% before the cta-3 animation ends

