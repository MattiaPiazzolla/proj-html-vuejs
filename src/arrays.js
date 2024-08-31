import { reactive } from 'vue';

export const arrays = reactive({
    // Menu Header
    headerMenu :[
        {
          name: "Home",
          link:  "#home",
          selected: true,
        },
        {
          name: "Shop",
          link:  "#shop",
          selected: false,
        },
        {
          name: "About",
          link:  "#about",
          selected: false,
        },
        {
          name: "Gallery",
          link:  "#gallery",
          selected: false,
        },
        {
          name: "Locations",
          link:  "#locations",
          selected: false,
        },
        {
          name: "Journal",
          link:  "#journal",
          selected: false,
        },
        {
          name: "Contact",
          link:  "#contact",
          selected: false,
        },
        {
          name: "My Account",
          link:  "#myAccount",
          selected: false,
        },
        {
          name: "",
          link:  "",
          icon: "fas fa-cart-shopping",
        }
      ],
      footerMenuItems : [
        {
          name: "Shop",
          link: "#shop",
          selected: false,
        },
        {
          name: "About",
          link: "#about",
          selected: false,
        },
        {
          name: "Gallery",
          link: "#gallery",
          selected: false,
        },
        {
          name: "Locations",
          link: "#locations",
          selected: false,
        },
        {
          name: "Journal",
          link: "#journal",
          selected: false,
        },
        {
          name: "Contact",
          link: "#contact",
          selected: false,
        },
        {
          name: "Orders",
          link: "#orders",
          selected: false,
        },
        {
          name: "",
          link: "",
          icon: "fas fa-cart-shopping",
        }
      ],
    // Social Media Icons
    socialIcons: [
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      link: "https://www.instagram.com"
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      link: "https://www.twitter.com"
    },
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      link: "https://www.facebook.com"
    },
    {
      name: "Pinterest",
      icon: "fab fa-pinterest-p",
      link: "https://www.pinterest.com"
    }
  ],
  // Cookies
  cookies: [
    {
      name: "choco chip cookies",
      price:['$19:00', '$39:00'],
      link: "choco-chip-cookies.jpg",
      categories: ["cookies", "pastries"], 
    },
    {
      name: "strawberry jam cookies",
      price:['$24:00', '$62:00'],
      link: "strawberry-jam-cookies.jpg",
      categories: ["cookies", "pastries"], 
    },
    {
      name: "strawberry donut",
      price:['$24:00', '$42:00'],
      link: "strawberry-donut.jpg",
      categories: ["donuts", "pastries"], 
    },
    {
      name: "perfect macarons",
      price:['$18:00', '$52:00'],
      link: "perfect-macarons.jpg",
      categories: ["macarons", "pastries"], 
    },
    {
      name: "cookies with ice cream",
      price:['$16:00', '$18:00'],
      link: "cookies-with-ice-cream.jpg",
      categories: ["cookies", "desserts"], 
    },
    {
      name: "blackberry stuffed bread",
      price:['$14:00', '$36:00'],
      link: "blackberry-stuffed-bread.jpg",
      categories: ["bread", "pastries"], 
    },
    {
      name: "glazed pancake with lemon",
      price:['$7:00', '$26:00'],
      link: "glazed-pancake-with-lemon.jpg",
      categories: ["pancakes", "breakfast"], 
    },
    {
      name: "home bread",
      price:['$9:00', '$30:00'],
      link: "home-bread.jpg",
      categories: ["bread", "pastries"], 
    },
    
  ]
})
  
