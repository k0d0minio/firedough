// Static restaurant data to replace Cosmic.js
export const restaurantData = [
  // Header/Navigation data
  {
    type: 'navigation',
    metadata: {
      logo: '/favicon.ico',
      menu_items: [
        { title: 'Home', url: '#home' },
        { title: 'About', url: '#about' },
        { title: 'Menu', url: '#menu' },
        { title: 'Gallery', url: '#gallery' },
        { title: 'Contact', url: '#contact' }
      ]
    }
  },
  
  // Header section
  {
    type: 'header',
    metadata: {
      section: 'Chase the new flavour',
      title: 'The key to fine dining',
      intro: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus',
      picture: {
        imgix_url: '/assets/bg.png'
      }
    }
  },

  // About section
  {
    type: 'about',
    metadata: {
      about: 'About Us',
      about_intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.',
      title: 'Our History',
      title_intro: 'Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.',
      initials: {
        imgix_url: '/assets/sign.png'
      },
      picture: {
        imgix_url: '/assets/spoon.svg'
      }
    }
  },

  // Food menu
  {
    type: 'food',
    metadata: {
      title: 'Food Menu',
      section: [
        {
          metadata: {
            section: 'Menu that fits you palatte',
            title: 'Today\'s Special',
            picture: {
              imgix_url: '/assets/bg.png'
            }
          }
        }
      ],
      menu: [
        {
          title: 'Wine & Beer',
          slug: 'wine-beer',
          price: '$56',
          tags: ['Wine', 'Beer'],
          picture: {
            imgix_url: '/assets/bg.png'
          }
        },
        {
          title: 'Cocktails',
          slug: 'cocktails',
          price: '$59',
          tags: ['Cocktails', 'Spirits'],
          picture: {
            imgix_url: '/assets/bg.png'
          }
        },
        {
          title: 'Non-Alcoholic',
          slug: 'non-alcoholic',
          price: '$44',
          tags: ['Juices', 'Smoothies'],
          picture: {
            imgix_url: '/assets/bg.png'
          }
        }
      ]
    }
  },

  // Drink menu
  {
    type: 'drink',
    metadata: {
      title: 'Drink Menu',
      menu: [
        {
          title: 'Aperol Spritz',
          slug: 'aperol-spritz',
          price: '$20',
          tags: ['Cocktail', 'Aperol'],
          picture: {
            imgix_url: '/assets/bg.png'
          }
        },
        {
          title: 'Dark & Stormy',
          slug: 'dark-stormy',
          price: '$16',
          tags: ['Cocktail', 'Rum'],
          picture: {
            imgix_url: '/assets/bg.png'
          }
        },
        {
          title: 'Daiquiri',
          slug: 'daiquiri',
          price: '$22',
          tags: ['Cocktail', 'Rum'],
          picture: {
            imgix_url: '/assets/bg.png'
          }
        },
        {
          title: 'Old Fashioned',
          slug: 'old-fashioned',
          price: '$31',
          tags: ['Cocktail', 'Whiskey'],
          picture: {
            imgix_url: '/assets/bg.png'
          }
        },
        {
          title: 'Negroni',
          slug: 'negroni',
          price: '$26',
          tags: ['Cocktail', 'Gin'],
          picture: {
            imgix_url: '/assets/bg.png'
          }
        },
        {
          title: 'Aperol Spritz',
          slug: 'aperol-spritz-2',
          price: '$20',
          tags: ['Cocktail', 'Aperol'],
          picture: {
            imgix_url: '/assets/bg.png'
          }
        }
      ]
    }
  },

  // History section
  {
    type: 'history',
    metadata: {
      section: 'Chef\'s Word',
      title: 'What we believe in',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.'
    }
  },

  // Gallery section
  {
    type: 'gallery',
    metadata: {
      section: 'Instagram',
      title: 'Photo Gallery',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.'
    }
  },

  // Contact section
  {
    type: 'contact',
    metadata: {
      section: 'Contact',
      title: 'Find Us',
      intro: 'Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG',
      details: [
        {
          title: 'Opening Hours',
          intro: 'Mon - Fri: 10:00 am - 02:00 am\nSat - Sun: 10:00 am - 03:00 am'
        },
        {
          title: 'Visit Us',
          intro: 'Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG'
        }
      ],
      picture: {
        imgix_url: '/assets/bg.png'
      }
    }
  },

  // Video section
  {
    type: 'video',
    metadata: {
      url: 'https://www.youtube.com/watch?v=u6BOC7CDUTk'
    }
  }
];

// Menu items for dynamic routes
export const menuItems = [
  {
    slug: 'wine-beer',
    title: 'Wine & Beer Selection',
    metadata: {
      section: 'Wine & Beer',
      title: 'Wine & Beer',
      intro: 'Carefully curated selection of wines and craft beers',
      menu: [
        { title: 'House Red Wine', price: '$12', tags: ['Red Wine'] },
        { title: 'House White Wine', price: '$10', tags: ['White Wine'] },
        { title: 'Craft IPA', price: '$8', tags: ['Beer', 'IPA'] },
        { title: 'Stout', price: '$9', tags: ['Beer', 'Stout'] }
      ]
    }
  },
  {
    slug: 'cocktails',
    title: 'Cocktail Menu',
    metadata: {
      section: 'Cocktails',
      title: 'Cocktails',
      intro: 'Expertly crafted cocktails using premium spirits',
      menu: [
        { title: 'Classic Martini', price: '$18', tags: ['Gin', 'Vermouth'] },
        { title: 'Old Fashioned', price: '$22', tags: ['Whiskey', 'Bitters'] },
        { title: 'Moscow Mule', price: '$16', tags: ['Vodka', 'Ginger'] }
      ]
    }
  },
  {
    slug: 'non-alcoholic',
    title: 'Non-Alcoholic Beverages',
    metadata: {
      section: 'Non-Alcoholic',
      title: 'Non-Alcoholic',
      intro: 'Refreshing non-alcoholic options',
      menu: [
        { title: 'Fresh Orange Juice', price: '$6', tags: ['Juice'] },
        { title: 'Virgin Mojito', price: '$8', tags: ['Mocktail'] },
        { title: 'Sparkling Water', price: '$4', tags: ['Water'] }
      ]
    }
  },
  {
    slug: 'aperol-spritz',
    title: 'Aperol Spritz',
    metadata: {
      section: 'Cocktails',
      title: 'Aperol Spritz',
      intro: 'Classic Italian aperitif',
      menu: [
        { title: 'Aperol Spritz', price: '$20', tags: ['Aperol', 'Prosecco'] }
      ]
    }
  },
  {
    slug: 'dark-stormy',
    title: 'Dark & Stormy',
    metadata: {
      section: 'Cocktails',
      title: 'Dark & Stormy',
      intro: 'Classic rum cocktail',
      menu: [
        { title: 'Dark & Stormy', price: '$16', tags: ['Rum', 'Ginger Beer'] }
      ]
    }
  },
  {
    slug: 'daiquiri',
    title: 'Daiquiri',
    metadata: {
      section: 'Cocktails',
      title: 'Daiquiri',
      intro: 'Classic rum cocktail',
      menu: [
        { title: 'Classic Daiquiri', price: '$22', tags: ['Rum', 'Lime'] }
      ]
    }
  },
  {
    slug: 'old-fashioned',
    title: 'Old Fashioned',
    metadata: {
      section: 'Cocktails',
      title: 'Old Fashioned',
      intro: 'Classic whiskey cocktail',
      menu: [
        { title: 'Old Fashioned', price: '$31', tags: ['Whiskey', 'Bitters'] }
      ]
    }
  },
  {
    slug: 'negroni',
    title: 'Negroni',
    metadata: {
      section: 'Cocktails',
      title: 'Negroni',
      intro: 'Classic Italian cocktail',
      menu: [
        { title: 'Negroni', price: '$26', tags: ['Gin', 'Campari'] }
      ]
    }
  },
  {
    slug: 'aperol-spritz-2',
    title: 'Aperol Spritz',
    metadata: {
      section: 'Cocktails',
      title: 'Aperol Spritz',
      intro: 'Classic Italian aperitif',
      menu: [
        { title: 'Aperol Spritz', price: '$20', tags: ['Aperol', 'Prosecco'] }
      ]
    }
  }
];
