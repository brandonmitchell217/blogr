type NavLinkProps = {
  text: string;
  subLinks: { text: string; href: string }[];
}[];

export const navLinks: NavLinkProps = [
  {
    text: "Product",
    subLinks: [
      { text: "Overview", href: "/product" },
      { text: "Pricing", href: "/pricing" },
      { text: "Marketplace", href: "/marketplace" },
      { text: "Features", href: "/features" },
      { text: "Integrations", href: "/intergrations" },
    ],
  },
  {
    text: "Company",
    subLinks: [
      { text: "About", href: "/about" },
      { text: "Team", href: "/team" },
      { text: "Blog", href: "/blog" },
      { text: "Careers", href: "/careers" },
    ],
  },
  {
    text: "Connect",
    subLinks: [
      { text: "Contact", href: "/contact" },
      { text: "Newsletter", href: "/newsletter" },
      { text: "LinkedIn", href: "/linkedin" },
    ],
  },
];
