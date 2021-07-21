jQuery(document).ready(function () {
  // animation time-lines
  var t1 = gsap.timeline()
  var tl2 = gsap.timeline()
  var tl3 = gsap.timeline()

  // illustration animation
  t1.from('.mainIll', { opacity: 0, x: 500, duration: 0.5 })
    .from('.languages', { opacity: 0, x: 500, duration: 0.5, stagger: 0.16 })
    .from('#plant', { opacity: 0, y: 10, duration: 0.5 })
    .from('#page2', { opacity: 0, x: 100, y: 10, duration: 0.5 })
    .from('#page3', { opacity: 0, x: 50, y: -100, duration: 0.5 })

  // welcome section animation
  tl2.to('.cards', { y: 10, repeat: -1, yoyo: true, duration: 0.5, stagger: 0.25 }, '+=2')
  tl3.from('.welcome', { delay: 1, opacity: 0, y: 500, duration: 0.5 })

  // section animation
  gsap.registerPlugin(ScrollTrigger)
  gsap.from('.skills', { ScrollTrigger: '.welcome', opacity: 0, y: 500, duration: 1 })
  gsap.from('.academics', { ScrollTrigger: '.skills', opacity: 0, y: 500, duration: 1 })
  gsap.from('.about', { ScrollTrigger: '.academics', opacity: 0, y: 500, duration: 1 })
  gsap.from('.contact', { ScrollTrigger: '.about', opacity: 0, y: 500, duration: 1 })

  const nav = document.querySelector('nav')

  // mobile menu display
  $('#menu-open').click(() => {
    nav.classList.add('menu-show')
  })

  // mobile menu hide
  $('#menu-close').click(() => {
    nav.classList.remove('menu-show')
  })

  // active section indicator on scroll
  var waypoint1 = new Waypoint({
    element: document.getElementById('welcome'),
    handler: function () {
      $('nav ul li').children().removeClass('active')
      $('#menu-home').addClass('active')
    },
    offset: 0
  })
  var waypoint3 = new Waypoint({
    element: document.getElementById('about'),
    handler: function (direction) {
      if (direction === 'down') {
        $('nav ul li').children().removeClass('active')
        $('#menu-about').addClass('active')
      }
    },
    offset: '100%'
  })
  var waypoint4 = new Waypoint({
    element: document.getElementById('contact'),
    handler: function (direction) {
      if (direction === 'up') {
        $('nav ul li').children().removeClass('active')
        $('#menu-about').addClass('active')
      }
    },
    offset: '80%'
  })
  var waypoint4 = new Waypoint({
    element: document.getElementById('contact'),
    handler: function () {
      $('nav ul li').children().removeClass('active')
      $('#menu-contact').addClass('active')
    },
    offset: '60%'
  })
  var waypoint2 = new Waypoint({
    element: document.getElementById('academics'),
    handler: function (direction) {
      if (direction === 'down') {
        $('nav ul li').children().removeClass('active')
        $('#menu-academics').addClass('active')
      }
    },
    offset: '100%'
  })

  var waypoint21 = new Waypoint({
    element: document.getElementById('about'),
    handler: function (direction) {
      if (direction === 'up') {
        $('nav ul li').children().removeClass('active')
        $('#menu-academics').addClass('active')
      }
    },
    offset: '100%'
  })
})
