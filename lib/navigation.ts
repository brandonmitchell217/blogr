type NavLinkProps = {
  text: string;
  subLinks: { text: string; href: string }[];
}[];

export const navLinks: NavLinkProps = [
  {
    text: "Product",
    subLinks: [
      { text: "Overview", href: "/product" },
      { text: "Pricing", href: "/product/pricing" },
      { text: "Marketplace", href: "/product/marketplace" },
      { text: "Features", href: "/product/features" },
      { text: "Integrations", href: "/product/intergrations" },
    ],
  },
  {
    text: "Company",
    subLinks: [
      { text: "About", href: "/about" },
      { text: "Team", href: "/about/team" },
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
