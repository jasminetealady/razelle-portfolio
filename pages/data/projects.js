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
      'Created portfolio with Gatsby, using a local WordPress instance as a back end.'
  },
  {
    id: 3,
    category: 'vue',
    title: 'Speakfully',
    link: 'https://speakfully.com',
    functionality:
      'Speakfully is a documentation platform for documenting sexual harassment, bias, and other forms of mistreatment in the workplace. The product provides the ability to create folders and within those folders create log entries with information about your experience. You can save, edit, and delete log entries, as well as open up existing log entries.',
    notes: `<p>In my previous role as a Software Engineer at Speakfully, I created applications for both the static website and the product. I built the static website and product following designs provided by an external design agency as well as internal UI/UX designer via Figma and Invision, as well as implementing user authorization.</p><br/><p>On May 12th 2019, we launched our MVP on a tight deadline.</p>`
  },
  {
    id: 4,
    category: 'vue',
    title: 'Nuxt & Prismic Starter Site',
    github: '',
    link: '',
    technologies: ['Vue', 'Nuxt', 'Prismic', 'vue-mq', 'HTML & Sass'],
    functionality: `A mobile responsive starter Nuxt and Prismic site. Has a navbar that routes to a /blog page with posts pulled from Prismic's headless API. Comes with a Sass stylesheet and mini UI framework (buttons, modals, forms, and inputs). Can be themed by altering Sass variables and Prismic API endpoint can be swapped with your own. Prismic has a Nuxt starter, but it routes to the index page -- I also added search functionality to the blog posts. This project is intended to be an easy way to get a site with a blog started, particularly if someone would like to blog with a friendly UI or have a non-tech person write blog posts without touching code.`,
    notes: '* Will be deploying and updating here soon'
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
  }
];

export default {
  projects
};
