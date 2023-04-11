export const navLinks: {
  text: string;
  subLinks: { text: string; href: string }[];
}[] = [
  {
    text: "Product",
    subLinks: [
      { text: "Overview", href: "/" },
      { text: "Pricing", href: "/" },
      { text: "Marketplace", href: "/" },
      { text: "Features", href: "/" },
      { text: "Integrations", href: "/" },
    ],
  },
  {
    text: "Company",
    subLinks: [
      { text: "About", href: "/" },
      { text: "Team", href: "/" },
      { text: "Blog", href: "/" },
      { text: "Careers", href: "/" },
    ],
  },
  {
    text: "Connect",
    subLinks: [
      { text: "Contact", href: "/" },
      { text: "Newsletter", href: "/" },
      { text: "LinkedIn", href: "/" },
    ],
  },
];
