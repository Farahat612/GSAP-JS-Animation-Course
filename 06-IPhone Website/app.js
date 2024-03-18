// 01. Pinning the hero to the top of the page
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: '.first-page', // the element that will trigger the animation
    start: '0%',
    end: '100%',
    pin: true, // pin the trigger element while active means the hero section will be pinned to the top of the page while the scrolling hasn't reached the end of it
    pinSpacing: false, // will allow the next section to overlap the hero section
  },
})

// 02. Animating the text highlighting in the second section during the scroll to highlight the text while it's getting in the viewport and then fade it out when it's going out of the viewport
// 2.1 Animating the highlighting part
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page', // the element that will trigger the animation
    // markers: { startColor: 'blue', endColor: 'blue' },
    scrub: true, // this will make the animation smooth and not jumpy
    start: '-40%', // when to start the animation --> minus means before the element reaches it's place the viewport to start sooner
    end: '40%', // when to end the animation --> plus means after the element reaches it's place the viewport to end later
  },
})
tlH.fromTo(
  '.highlight',
  { color: 'rgba(255,255,255, 0.4' },
  { color: 'rgba(255,255,255, 1', stagger: 1 }
)
// 2.2 Animating the fade out part
const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    // markers: { startColor: 'pink', endColor: 'pink' },
    scrub: true,
    start: '-20%',
    end: '60%',
  },
})
tlHRemove.to('.highlight', { color: 'rgba(255,255,255, 0.4', stagger: 1 })
