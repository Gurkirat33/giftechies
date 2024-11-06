export const navData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Work",
    href: "/work",
    submenu: {
      items: [
        {
          title: "Case Studies",
          description: "Explore our successful projects",
          href: "/work/case-studies",
        },
        {
          title: "Portfolio",
          description: "Browse our latest work",
          href: "/work/portfolio",
        },
        {
          title: "Blogs",
          description: "Read our latest blog posts",
          href: "/work/blog",
        },
        {
          title: "Client Testimonials",
          description: "See what our clients have to say",
          href: "/work/testimonials",
        },
      ],
      preview: {
        image:
          "https://imgs.search.brave.com/AynPTPoUajFXwF1GgWBrEP6Fyb0D9y-je4iTrHdQ4Gs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/ODQzMjM3MzA2ODct/MjI4MzBlMzgyMTA2/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UaDhmSGR2/Y210cGJtY2xNakJ0/WVc1OFpXNThNSHg4/TUh4OGZEQT0",
        title: "Our Work",
        description: "Discover how we've helped businesses grow",
      },
    },
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const navVariants = {
  visible: {
    y: 0,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
  hidden: {
    y: "-130%",
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};
