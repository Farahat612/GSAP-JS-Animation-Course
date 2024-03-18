// Initializing Page Transitions Animations using Barbajs
barba.init({
  transitions: [
    // Showcase Section transitions
    {
      name: 'default-transition',
      leave(data) {
        let currentContainer = data.current.container
        return gsap.fromTo(
          currentContainer,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            duration: 1,
          }
        )
      },
      enter(data) {
        let nextContainer = data.next.container
        return gsap.fromTo(
          nextContainer,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          }
        )
      },
    },
  ],
})
