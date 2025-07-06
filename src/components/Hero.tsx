import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="min-h-screen pt-10 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-70"></div>
        <div
          className="absolute top-1/3 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-50"
          style={{ animationDelay: "1s" }}></div>
        <div
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-violet-400 rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in-up mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-blue-300 mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to my digital space
            </span>
          </div>

          {/* Main Title */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">I'm a</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift bg-300%">
                Full Stack
              </span>
              <br />
              <span className="text-white">Developer</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Crafting pixel-perfect digital experiences with cutting-edge
              technologies. I transform ideas into scalable, beautiful web
              applications.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center mb-16"
            style={{ animationDelay: "0.6s" }}>
            <Button
              onClick={handleScrollToProjects}
              size="lg"
              className="group cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-0">
              <span>View My Work</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            <Link to="./RohitKumar-Resume.pdf" download className="rounded-full">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white cursor-pointer bg-transparent hover:bg-white/10 hover:text-white px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div
            className="animate-fade-in-up flex justify-center gap-8 mb-45"
            style={{ animationDelay: "0.8s" }}>
            {[
              {
                icon: Github,
                href: "https://github.com/rohitkumar-14",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/rohit-kumar-0988771b7",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "#contact",
                label: "Email",
                scrollFunction: handleScrollToContact,
              },
            ].map(({ icon: Icon, href, label, scrollFunction }) => (
              <Link
                target="_blank"
                key={label}
                onClick={scrollFunction}
                to={href}
                className="group relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110"
                aria-label={label}>
                <Icon className="w-6 h-6" />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce mt-10">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
