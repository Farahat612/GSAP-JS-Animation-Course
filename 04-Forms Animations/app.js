// Selecting the elements needed from the document
const containers = document.querySelectorAll('.input-container')
const form = document.querySelector('form')

// Creating a GSAP default timeline
const tl = gsap.timeline({ defaults: { duration: 1 } })

// creating start and end positions for the line svg to achieve the elastic effect
const start =
  'M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512'
const end =
  'M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512'
