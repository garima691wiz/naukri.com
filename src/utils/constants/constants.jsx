import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaEnvelope />, href: "#" },
  { icon: <FaLinkedin />, href: "#" },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Employer home", href: "#" },
      { name: "Sitemap", href: "#" },
      { name: "Credits", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help center", href: "#" },
      { name: "Summons/Notices", href: "#" },
      { name: "Grievances", href: "#" },
      { name: "Report issue", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy policy", href: "#" },
      { name: "Terms & conditions", href: "#" },
      { name: "Fraud alert", href: "#" },
      { name: "Trust & safety", href: "#" },
    ],
  },
];

const businessLinks = [
  { name: "nrigulf.com", href: "#" },
  { name: "shiksha", href: "#" },
  { name: "iimjobs", href: "#" },
  { name: "hirist", href: "#" },
];

export { socialLinks, footerLinks, businessLinks };
