import menuImage from '../assets/image/menu-image.webp'

export const menuItems = [
        //  {
        //    name: "",
        //    label: "Landings",
        //    items: [
        //      { name: "", label: "Software" },
        //      { name: "mobile", label: "Mobile App" },
        //      { name: "conferrence", label: "Video Conference" },
        //      { name: "telemedecine", label: "Telemedicine" },
        //      { name: "crypto", label: "Crypto" },
        //      { name: "web", label: "Web Application" },
        //      { name: "ios", label: "IOS App" },
        //      { name: "webHosting", label: "Web Hosting" },
        //      { name: "onlineCourse", label: "Online Course" },
        //    ],
        //  },

        //  {
        //    name: "pages",
        //    label: "Pages",
        //    items: [
        //      { name: "about", label: "About Us" },
        //      { name: "contact-us", label: "Contact Us" },
        //      {
        //        name: "#",
        //        label: "Blog",
        //        items: [
        //          { name: "blog", label: "Blog Single" },
        //          { name: "blog-details", label: "Blog Details" },
        //        ],
        //      },
        //      {
        //        name: "careers",
        //        label: "Careers",
        //        items: [
        //          { name: "career", label: "Career" },
        //          { name: "career-details", label: "Career Details" },
        //        ],
        //      },
        //      {
        //        name: "#",
        //        label: "Case Study",
        //        items: [
        //          { name: "case-studies", label: "Case Studies" },
        //          { name: "case-study-details", label: "Case Details" },
        //        ],
        //      },
        //      {
        //        name: "#",
        //        label: "Pricing",
        //        items: [
        //          { name: "pricing-1", label: "Pricing-01" },
        //          { name: "pricing-2", label: "Pricing-02" },
        //          { name: "pricing-3", label: "Pricing-03" },
        //        ],
        //      },
        //      {
        //        name: "#",
        //        label: "Shop",
        //        items: [
        //          { name: "shop", label: "Product" },
        //          { name: "shop-details", label: "Product Details" },
        //          { name: "cart", label: "Cart" },
        //          { name: "checkout", label: "Checkout" },
        //        ],
        //      },
        //      {
        //        name: "#",
        //        label: "Account",
        //        items: [
        //          { name: "sign-in", label: "Sign In" },
        //          { name: "sign-up", label: "Sign Up" },
        //          { name: "reset-password", label: "Reset Password" },
        //        ],
        //      },
        //      {
        //        name: "utility",
        //        label: "Utility",
        //        items: [
        //          { name: "faq", label: "FAQ" },
        //          { name: "comingsoon", label: "Coming soon" },
        //          { name: "terms", label: "Terms & Conditions" },
        //          { name: "404", label: "404 Page" },
        //          { name: "thank-you", label: "Thank You" },
        //        ],
        //      },
        //    ],
        //  },
        {
          name: "megamenu",
          label: "Events",
          megamenu: false,
          col: 12,
          items: {
            col_1: {
              title: "Google IO Extended",
              items: [
                { name: "io2022", label: "IO 2022" },
                { name: "", label: "IO 2019" },
              ]
            },
            col_2: {
              title: "Google Devfest",
              items: [
                { name: "https://www.youtube.com/watch?v=o22Ug6bS-U0", label: "Devfest 2019", isExternal: true, },
                { name: "https://www.youtube.com/watch?v=0l8MfXd4GPg", label: "Devfest 2018", isExternal: true, },
                { name: "https://www.youtube.com/watch?v=bKqbil6CQY0", label: "Devfest 2017", isExternal: true, },
                { name: "https://www.youtube.com/watch?v=dsv9ZPhxPl4", label: "Devfest 2016", isExternal: true, },
              ]
            },
            col_3: {
              title: "Woman Tech Makers",
              items: [
                {
                  name: "",
                  label: "Update soon",
                },
              ]
            },
            col_4: {
              title: "Others",
              items: [
                {
                  name: "https://www.youtube.com/watch?v=oUHpYqGZQ10",
                  label: "Vietnam Online Hackacthon 2020",
                  isExternal: true,
                },
              ]
            },
          }
        },
         {
           name: "partners",
           label: "Partners",
          },
          {
            name: "about",
            label: "About Us",
          },
       ];
