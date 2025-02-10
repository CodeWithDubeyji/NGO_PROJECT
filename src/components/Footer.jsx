import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "ABOUT US": ["About Us", "Impact", "Reach & Presence", "Milestones", "Privacy Policy"],
    "OUR WORK": ["Education", "Health", "Livelihood", "Women Empowerment", "Disaster Response"],
    CAMPAIGNS: ["Coming Soon"],
    "GET INVOLVED": ["Individual Support", "Corporate Partnerships", "Volunteer", "School Partnerships", "Careers"],
    "RESOURCE CENTRE": ["Annual Report", "Newsletter", "Stories of Change", "Blogs", "Films"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto">
        {/* Scrollable Footer Content */}
        <div className="overflow-y-auto max-h-[calc(100vh-100px)]">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <h3 className="text-white font-semibold border-b border-gray-600 pb-2">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white transition duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-600 pt-8 space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Smile Foundation</h4>
                <p className="text-sm">
                  161 B/4, 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre, New Delhi - 110049, India
                </p>
                <p className="text-sm">Contact: +91-11-43123700 | info@smilefoundationindia.org</p>
              </div>

              {/* Newsletter Subscription */}
              <div className="lg:text-right">
                <h4 className="font-semibold text-white mb-2">Subscribe to Our Newsletter</h4>
                <div className="flex max-w-md lg:ml-auto flex-wrap">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-700 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 pt-4">
              {socialLinks.map(({ icon: Icon, href }) => (
                <a key={href} href={href} aria-label="Social Link" className="text-gray-400 hover:text-white transition duration-300">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} Sanvi Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
