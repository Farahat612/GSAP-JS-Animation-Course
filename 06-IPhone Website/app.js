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

// 03. Animating the third section to move the image and the text to the right and left while scrolling like they are being splitted and then come back together
// 3.1 Creating a scroll triggered timeline to animate the split part
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page', // the element that will trigger the animation
    start: '-35%',
    end: '10%',
    // markers: true,
    scrub: true,
  },
})
// 3.2 Animating the split part for both left and right imgaes and also both left and right texts
tlSplit.fromTo('.large-phone', { x: '40%' }, { x: '20%' }) // left image
tlSplit.fromTo('.small-phone', { x: '-40%' }, { x: '-20%' }, '<') // right image
tlSplit.fromTo(
  '.product-text-left',
  { x: 250, opacity: 0 },
  { opacity: 1, x: -80 },
  '<'
) // left text
tlSplit.fromTo(
  '.product-text-right',
  { x: -150, opacity: 0 },
  { opacity: 1, x: 70 },
  '<'
) // right text
// 3.3 Pinning this page to the viewport after the split part --> !didn't like it
const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    pin: true,
    pinSpacing: false,
    start: '0%',
    end: '100%',
  },
})

// 04. Carousel Animation
// 4.1 Selecting the elements needed : swatches, gallery, and slides
const swatches = document.querySelectorAll('.swatches img')
const gallery = document.querySelector('.phone-gallery')
const slides = document.querySelectorAll('.phone-gallery-container')
// 4.2 declaring the variables needed to track the current swatch and the zIndex of the close up images
let currentSwatch = 'blue' // to keep track of the current swatch
let topIndex = 2 // to keep track of the zIndex of the close up images
// 4.3 Looping through the swatches to add the click event to each one
swatches.forEach((swatch, index) => {
  // getting the left position of the slide to move the gallery to the left or right
  const coord = slides[index].getBoundingClientRect().left // to get the left position of the slide --> getBoundingClientRect() returns a DOMRect object providing information about the size of an element and its position relative to the viewport
  // adding the click event to each swatch
  swatch.addEventListener('click', (e) => {
    let swatchName = e.target.getAttribute('swatch') // we gave it a custom attribute
    let closeUp = document.querySelector('.' + swatchName) // we gave the close up images the same class name as the swatch name

    if (currentSwatch === swatchName) return // if we are on the same swatch then don't do anything

    // 1. Close up fading on swatch click:
    gsap.set(closeUp, { zIndex: topIndex }) // set the zIndex of the close up image to be on top
    gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 }) // Fade in the close up image

    // 2. Gallery Slider on swatch click
    gsap.to(gallery, { x: -coord, duration: 1, ease: 'back.out(1)' }) // We simply move the gallery to the left or right by a certain amount of pixels we got from the left position of the slide

    // 3. needed actions
    topIndex++ // to increase the zIndex of the close up images
    currentSwatch = swatchName // to keep the same swatch name if same swatch is clicked again
  })
})
