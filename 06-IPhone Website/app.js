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


