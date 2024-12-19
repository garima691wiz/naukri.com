import { Link } from "react-router-dom";
import {
  socialLinks,
  footerLinks,
  businessLinks,
} from "../../utils/constants/constants";

const Footer = () => {
  return (
    <footer className="mt-24 bg-white py-8 text-gray-600">
      <div className="container mx-auto max-w-[1400px] px-4">
        {/* Naukri Logo and Social Links */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center space-x-4">
            <img
              src="/images/logo/logo.svg"
              alt="Naukri Logo"
              className="h-8"
            />
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xl text-gray-600 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="md:text-md mt-8 grid grid-cols-2 gap-6 text-sm font-semibold text-opacity-50 md:grid-cols-4">
          {footerLinks.map((section, index) => (
            <div key={index}>
              {section.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="mt-2 block hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
            </div>
          ))}
          <div className="space-y-6 md:text-left">
            <div>
              <p className="font-semibold">Apply on the go</p>
              <p className="mb-2 text-sm text-gray-500">
                Get real-time job updates on our App
              </p>
            </div>
            <div className="flex flex-col gap-2 opacity-70 md:flex-row">
              <Link>
                <img
                  src="/images/home/googleplay.png"
                  className="h-10 w-32"
                  alt="Google play"
                />
              </Link>
              <Link>
                <img
                  src="/images/home/appStore.png"
                  className="h-10 w-32"
                  alt="App store"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* InfoEdge and Partners */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="mb-4 text-center text-xs text-gray-500">
            <p>All trademarks are the property of their respective owners</p>
            <p>All rights reserved © 2024 Info Edge (India) Ltd.</p>
          </div>
          <div className="flex justify-center space-x-4 text-xs text-gray-600">
            <span>Our businesses</span>
            {businessLinks.map((business, index) => (
              <a
                key={index}
                href={business.href}
                className="hover:text-blue-600"
              >
                {business.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
