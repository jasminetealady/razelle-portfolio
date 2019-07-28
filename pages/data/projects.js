let projects = [
  {
    id: 1,
    category: 'react',
    title: 'Vote 2018',
    heroku: 'https://luxe-boutique.herokuapp.com',
    technologies: [
      'React',
      'Redux',
      'react-router',
      'Ruby on Rails',
      'HTML & CSS',
      'Google Civic Info API'
    ],
    vimeo: 'https://player.vimeo.com/video/300842726',
    functionality:
      'Matches user with local candidates, polling places, early voting places, and ballot questions based on the entry of any valid US residential address.',
    notes:
      '*Note that data is down except during election cycles, so app will not provide any results until the next active election. Please see video demo.',
    github: 'https://github.com/jasminetealady/boutique'
  },
  {
    id: 2,
    category: 'react',
    title: 'Portfolio',
    link: 'https://razelle.netlify.com',
    technologies: [
      'React',
      'Gatsby',
      'gatsby-source-wordpress',
      'GraphQL',
      'HTML & CSS'
    ],
    images: [],
    functionality:
      'Recreated <a href="https://razellemccarrick.com">portfolio</a> site with Gatsby, using a local WordPress instance as a back end, writing GraphQL queries to pull necessary data from WordPress, and styling from scratch.'
  },
  {
    id: 3,
    category: 'vue',
    title: 'Speakfully',
    link: 'https://speakfully.com',
    technologies: [`Can't disclose`],
    functionality:
      'Speakfully is a documentation platform for documenting sexual harassment, bias, and other forms of mistreatment in the workplace. The product provides the ability to create folders and within those folders create log entries with information about your experience. You can create, edit, and delete log entries, as well as open up existing log entries.',
    notes: `<p>In my previous role as a Software Engineer at Speakfully, I built the static website and product front end following designs provided by an external design agency as well as internal UI/UX designer. I worked closely with a back end developer to pull and display user data, as well as implemented user authorization.</p><br/><p>On May 12th 2019, we launched our MVP on a tight deadline.</p>`,
  },
  {
    id: 4,
    category: 'vue',
    title: 'Nuxt & Prismic Starter Site',
    github: 'https://github.com/jasminetealady/nuxt-prismic-starter',
    link: 'https://nuxt-prismic-starter.herokuapp.com',
    technologies: [
      'Vue',
      'Nuxt',
      'Prismic',
      'vue-mq',
      'HTML & Sass',
      'Server Side Rendering',
      'Heroku'
    ],
    functionality: `A modified Nuxt and Prismic CLI starter. Uses Prismic API endpoint to pull blog posts and individual posts. Original starter sets blog index to home page. I added a navbar that routes to Home, About, Blog, and Components. I moved the blog index page to a /blog route and implemented search functionality. Additionally, I created a Sass stylesheet and mini UI framework that includes classes for flexbox and spacing, as well as styled modals, buttons, inputs, and forms. Can be themed by changing Sass variables and Prismic API endpoint can be swapped out for your own.`,
    notes:
      '* Must be deployed to Heroku, as it is server side rendered. Still working on and refactoring it.<br/><br/><p>Original Starter Guide: <a href="https://user-guides.prismic.io/en/articles/2802125-create-a-sample-blog-with-prismic-and-nuxt">Nuxt and Prismic CLI Sample Blog</a></p>'
  },
  {
    id: 5,
    category: 'vue',
    title: 'razelle.design',
    link: '/',
    github: 'https://github.com/jasminetealady/razelle-portfolio',
    technologies: [
      'Nuxt',
      'Vue',
      'HTML & Sass',
      'vue-mq',
      'vue-carousel',
      'Font Awesome'
    ],
    functionality: `I created this portfolio site to make my projects more accessible. My previous portfolio site razellemccarrick.com was not only a mouthful domain-wise but had a portfolio page with individual projects you had to click to see information about. I had old Flatiron School blog posts up still, which no one wants to read. Knowing that folks hiring don't want to spend too much time clicking around, I made this site with the hopes that you'll be able to access my projects quickly and hire me! Plus, it was fun.`
  },
  {
    id: 6,
    category: 'ruby',
    title: 'Luxe Boutique',
    github: 'https://github.com/jasminetealady/boutique',
    heroku: 'https://luxe-boutique.herokuapp.com',
    vimeo: 'https://player.vimeo.com/video/309170386',
    technologies: [
      'Ruby',
      'Ruby on Rails',
      'jQuery, Vanilla JavaScript, & AJAX',
      'HTML & CSS',
      'Session Storage',
      'Facebook OAuth',
      'Rails Models w/ActiveRecord Relationships',
      'PostgreSQL DB',
      'Heroku'
    ],
    functionality:
      'Fictional e-commerce store that allows user to add items to their cart whether logged in or out. User can create an account or log in via Facebook. They can modify quantities of items in their cart and place an order with a new or saved address. User can view past orders and review items with a star rating.'
  },
  {
    id: 7,
    category: 'ruby',
    title: 'Andromeda Project',
    github: 'https://github.com/jasminetealady/andromeda',
    vimeo: 'https://player.vimeo.com/video/266735639',
    technologies: ['Ruby', 'Sinatra', 'HTML & CSS'],
    functionality:
      'User can create an account to log their planetary and extraterrestrial discoveries.'
  },
  {
    id: 8,
    category: 'ruby',
    title: 'Love of Tea CLI & Ruby Gem',
    github: 'https://github.com/jasminetealady/loveoftea',
    vimeo: 'https://player.vimeo.com/video/349257305',
    technologies: ['OO Ruby', 'Scraping with Nokogiri'],
    functionality:
      'A Ruby CLI and published Ruby gem that scrapes from the Rishi Tea website and allows users to view teas based on their caffeine level preferences as well as other criteria. They may choose a tea at random or select their own and add it to a cart, which they can view later.',
    notes:
      'Gem and CLI are now deprecated as Rishi did a full site redesign and this project was created for Flatiron School. Please see video demo.'
  },
  {
    id: 9,
    category: 'ecommerce',
    title: 'Shopify Custom Theme',
    link: 'http://razelle-site.myshopify.com',
    functionality:
      'Created custom theme via the Shopify Skeleton Theme, the most bare bones starter available.',
    technologies: ['Shopify', 'Liquid', 'HTML & Sass']
  },
  {
    id: 10,
    category: 'js',
    title: 'Type Checker',
    link: 'https://type-checker-67.superhi.com/',
    functionality:
      'This is a Type Checker app I built through SuperHi’s JavaScript for Designers Course. It uses vanilla JavaScript to listen for input events and change the text in the main section, a textarea, accordingly. The text can be changed from the text area in the body or the input in the panel. Changes to both are reflected in the other. From each input, we grab the value of the input when the user changes it and assign that value to the style element of the text in question (font-family, font-size, font-weight, line-height, background-color, and color respectively).',
    technologies: ['Vanilla JavaScript', 'HTML & CSS'],
    images: [require(`./typechecker.png`)]
  },
  {
    id: 11,
    category: 'js',
    title: 'Slide Menu & Photo Fan Out',
    link: 'https://plant-life-83.superhi.com/#',
    technologies: ['Vanilla JavaScript', 'HTML & CSS'],
    functionality:
      'This is a project I built in my JavaScript for Designers course. It features an initial image which when moused over fans out other images that can be clicked to make them appear on top. It also features a nav menu that slides in and can be shown and hidden with a click. Made with vanilla JavaScript and mouseover/click events.',
    images: [require(`./photofanout.png`)]
  },
  {
    id: 12,
    category: 'js',
    title: 'Slideshow',
    technologies: ['Vanilla JavaScript', 'HTML & CSS'],
    link: 'https://rose-culver-112.superhi.com/',
    functionality:
      'Here is a project I built in my JavaScript for Designers course. It features click events on the previous, next, and random icons that change the content and styles of elements on the page using vanilla JavaScript.',
    images: [require(`./roseculver.png`)]
  },
  {
    id: 13,
    category: 'css',
    title: 'Portfolio Concept',
    link: 'https://avelineamour.github.io/portfolio/',
    technologies: ['HTML & CSS', 'CodeKit'],
    functionality: 'A responsive portfolio concept site',
    images: []
  }
];

export default {
  projects
};
