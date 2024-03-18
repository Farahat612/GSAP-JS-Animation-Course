// Initializing Page Transitions Animations using Barbajs
barba.init({
  preventRunning: true,
  transitions: [
    // Showcase Section transitions
    {
      name: 'default-transition',
      leave(data) {
        const done = this.async()
        let currentContainer = data.current.container
        return gsap.fromTo(
          currentContainer,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            duration: 1,
            onComplete: done,
          }
        )
      },
      enter(data) {
        const done = this.async()
        let nextContainer = data.next.container
        return gsap.fromTo(
          nextContainer,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            onComplete: done,
          }
        )
      },
    },
  ],
})
