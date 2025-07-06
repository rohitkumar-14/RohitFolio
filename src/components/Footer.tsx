import { Github, Linkedin, Mail, Code, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Rohit Kumar</h3>
                <p className="text-gray-400">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Passionate about creating digital experiences that make a
              difference. I help businesses and individuals bring their ideas to
              life through innovative web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Socials</h4>
            <div className="flex space-x-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/rohitkumar-14",
                  color: "hover:text-gray-300",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/rohit-kumar-0988771b7",
                  color: "hover:text-blue-400",
                },
                { icon: Mail, href: "mailto:rohitk1400@gmail.com", color: "hover:text-red-400" },
              ].map(({ icon: Icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  className={`p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 ${color} transition-all duration-300 transform hover:scale-110 hover:bg-white/10`}>
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by Rohit Kumar. All rights reserved.</span>
            </div>

            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-white/20 text-gray-600 cursor-pointer hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <ArrowUp className="h-4 w-4" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
