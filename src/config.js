module.exports = {
  siteTitle: 'Shrawani Wagh',
  siteDescription:
    'Shrawani Wagh is undergraduate developing and designing things',
  siteKeywords:
    'Shrawani Wagh, Shrawani , Wagh',
  siteUrl: 'https://github.com/shrawaniwagh2003',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Shrawani Wagh',
  location: 'Wardha, India',
  email: 'waghshrawani2003@gmail.com',
  github: 'https://github.com/shrawaniwagh2003',
  twitterHandle: '@shrawani_.x04',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shrawaniwagh2003',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shrawani-wagh-38a013229',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shrawani_.x04?igsh=OGQ5ZDc2ODk2ZA==',
    },
    {
      name: 'Twitter',
      url: 'https://www.threads.net/@shrawani_.x04',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};