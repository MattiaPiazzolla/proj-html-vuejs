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
  ]
})
  
